/**
 * /api/admin/products
 * 쿠팡 상품 파일 기반 CRUD
 * GET    : 전체 목록 (search 쿼리 지원)
 * PUT    : coupangUrl 업데이트 (productKey로 식별)
 */
import fs from 'fs'
import path from 'path'

const PROD_FILE = path.resolve(process.cwd(), 'data', 'coupang-products.json')
const ADMIN_PW  = process.env.ADMIN_PASSWORD

function checkAuth(req) {
  return req.headers['x-admin-password'] === ADMIN_PW
}

function readProducts() {
  if (!fs.existsSync(PROD_FILE)) return []
  try { return JSON.parse(fs.readFileSync(PROD_FILE, 'utf8')) } catch (_) { return [] }
}

function writeProducts(data) {
  fs.writeFileSync(PROD_FILE, JSON.stringify(data, null, 2))
}

export default function handler(req, res) {
  if (!checkAuth(req)) return res.status(401).json({ error: 'Unauthorized' })

  if (req.method === 'GET') {
    const { search = '' } = req.query
    let products = readProducts()
    if (search) {
      const q = search.toLowerCase()
      products = products.filter(p =>
        p.productKey.toLowerCase().includes(q) ||
        p.productName.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
    }
    return res.json(products)
  }

  if (req.method === 'PUT') {
    const { productKey, coupangUrl, notes } = req.body
    if (!productKey) return res.status(400).json({ error: 'productKey required' })
    const products = readProducts()
    const idx = products.findIndex(p => p.productKey === productKey)
    if (idx === -1) return res.status(404).json({ error: 'not found' })
    if (coupangUrl !== undefined) products[idx].coupangUrl = coupangUrl
    if (notes !== undefined) products[idx].notes = notes
    writeProducts(products)
    return res.json(products[idx])
  }

  return res.status(405).end()
}
