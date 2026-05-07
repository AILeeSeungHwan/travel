/**
 * /api/post-links?slug=...
 * 해당 slug에 연결된 쿠팡 링크 반환
 * 1순위: Supabase coupang_links 테이블
 * 2순위 (Supabase 미연결 시): data/coupang-products.json 파일
 */
import fs from 'fs'
import path from 'path'
import { createServerClient } from '../../lib/supabase'

const PROD_FILE = path.resolve(process.cwd(), 'data', 'coupang-products.json')

function fileLinks(slug) {
  if (!fs.existsSync(PROD_FILE)) return []
  try {
    const products = JSON.parse(fs.readFileSync(PROD_FILE, 'utf8'))
    return products
      .filter(p => p.coupangUrl && p.postSlugs && p.postSlugs.includes(slug))
      .map(p => ({
        product_name: p.productName,
        category: p.category,
        coupang_url: p.coupangUrl,
        post_slugs: p.postSlugs,
        notes: p.notes || '',
      }))
  } catch (_) { return [] }
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end()
  const slug = req.query.slug
  if (!slug) return res.json([])

  // 1순위: Supabase
  const supabase = createServerClient()
  if (supabase) {
    const { data, error } = await supabase
      .from('coupang_links')
      .select('product_name, category, coupang_url, post_slugs, notes')
      .contains('post_slugs', [slug])
      .not('coupang_url', 'is', null)
    if (!error && data && data.length > 0) return res.json(data)
  }

  // 2순위: 파일 기반
  return res.json(fileLinks(slug))
}
