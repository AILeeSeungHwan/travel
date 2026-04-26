import { createServerClient } from '../../../lib/supabase'
import seed from '../../../data/coupang-seed.json'

function checkAuth(req) {
  const pwd = req.headers['x-admin-password'] || req.query.pwd
  return pwd === process.env.ADMIN_PASSWORD
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  if (!checkAuth(req)) return res.status(401).json({ error: 'unauthorized' })
  const supabase = createServerClient()
  if (!supabase) return res.status(500).json({ error: 'supabase not configured' })

  const { data: existing } = await supabase.from('coupang_links').select('product_name')
  const existingSet = new Set((existing || []).map(r => r.product_name))
  const toInsert = seed.filter(s => !existingSet.has(s.product_name)).map(s => ({
    product_name: s.product_name,
    category: s.category || null,
    coupang_url: s.coupang_url || null,
    post_slugs: s.post_slugs || [],
    notes: s.notes || null,
  }))
  if (toInsert.length === 0) return res.json({ inserted: 0, skipped: seed.length })
  const { data, error } = await supabase.from('coupang_links').insert(toInsert).select()
  if (error) return res.status(500).json({ error: error.message })
  return res.json({ inserted: (data || []).length, skipped: seed.length - (data || []).length })
}
