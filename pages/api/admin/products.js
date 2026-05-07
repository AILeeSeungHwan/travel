/**
 * /api/admin/products
 * 쿠팡 상품 관리 — Supabase 기반 (파일 fallback 포함)
 *
 * GET : 목록 조회 (?search=)
 * PUT : coupangUrl / notes 업데이트 (productKey로 식별)
 */
import fs from 'fs'
import path from 'path'
import { createServerClient } from '../../../lib/supabase'

const PROD_FILE = path.resolve(process.cwd(), 'data', 'coupang-products.json')
const ADMIN_PW  = process.env.ADMIN_PASSWORD

function checkAuth(req) {
  return req.headers['x-admin-password'] === ADMIN_PW
}

// ── 파일 fallback (로컬 개발 / Supabase 미연결 시) ──────────
function readFile() {
  if (!fs.existsSync(PROD_FILE)) return []
  try { return JSON.parse(fs.readFileSync(PROD_FILE, 'utf8')) } catch (_) { return [] }
}
function writeFile(data) {
  try { fs.writeFileSync(PROD_FILE, JSON.stringify(data, null, 2)) } catch (_) {}
}

export default async function handler(req, res) {
  if (!checkAuth(req)) return res.status(401).json({ error: 'Unauthorized' })

  const supabase = createServerClient()

  // ── GET ──────────────────────────────────────────────────
  if (req.method === 'GET') {
    const { search = '' } = req.query

    if (supabase) {
      let q = supabase
        .from('coupang_products')
        .select('product_key,product_name,category,coupang_url,post_slugs,notes')
        .order('product_name')
      if (search) q = q.or(`product_key.ilike.%${search}%,product_name.ilike.%${search}%,category.ilike.%${search}%`)
      const { data, error } = await q
      if (!error) {
        // DB 컬럼명 → 프론트 camelCase 변환
        return res.json((data || []).map(row => ({
          productKey:   row.product_key,
          productName:  row.product_name,
          category:     row.category,
          coupangUrl:   row.coupang_url,
          postSlugs:    row.post_slugs || [],
          notes:        row.notes,
        })))
      }
    }

    // fallback: 파일
    let products = readFile()
    if (search) {
      const q = search.toLowerCase()
      products = products.filter(p =>
        (p.productKey || '').toLowerCase().includes(q) ||
        (p.productName || '').toLowerCase().includes(q) ||
        (p.category || '').toLowerCase().includes(q)
      )
    }
    return res.json(products)
  }

  // ── PUT ──────────────────────────────────────────────────
  if (req.method === 'PUT') {
    const { productKey, coupangUrl, notes } = req.body || {}
    if (!productKey) return res.status(400).json({ error: 'productKey required' })

    if (supabase) {
      const updates = {}
      if (coupangUrl !== undefined) updates.coupang_url = coupangUrl
      if (notes !== undefined)      updates.notes       = notes

      // upsert: 없으면 insert, 있으면 update
      const { data, error } = await supabase
        .from('coupang_products')
        .upsert({ product_key: productKey, ...updates }, { onConflict: 'product_key' })
        .select()
        .single()

      if (!error && data) {
        return res.json({
          productKey:  data.product_key,
          productName: data.product_name,
          coupangUrl:  data.coupang_url,
          notes:       data.notes,
        })
      }
    }

    // fallback: 파일
    const products = readFile()
    const idx = products.findIndex(p => p.productKey === productKey)
    if (idx === -1) return res.status(404).json({ error: 'not found' })
    if (coupangUrl !== undefined) products[idx].coupangUrl = coupangUrl
    if (notes !== undefined)      products[idx].notes      = notes
    writeFile(products)
    return res.json(products[idx])
  }

  return res.status(405).end()
}
