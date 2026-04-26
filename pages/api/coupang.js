import { createServerClient } from '../../lib/supabase'

function checkAuth(req) {
  const pwd = req.headers['x-admin-password'] || req.query.pwd
  return pwd === process.env.ADMIN_PASSWORD
}

export default async function handler(req, res) {
  if (!checkAuth(req)) return res.status(401).json({ error: 'unauthorized' })
  const supabase = createServerClient()
  if (!supabase) return res.status(500).json({ error: 'supabase not configured' })

  if (req.method === 'GET') {
    const { search, category, sort } = req.query
    let q = supabase.from('coupang_links').select('*').order('category').order('product_name')
    if (category && category !== '전체') q = q.eq('category', category)
    if (search) q = q.ilike('product_name', `%${search}%`)
    const { data, error } = await q
    if (error) return res.status(500).json({ error: error.message })

    if (sort === 'traffic' && data && data.length > 0) {
      const allSlugs = [...new Set(data.flatMap(p => p.post_slugs || []))]
      if (allSlugs.length > 0) {
        const { data: pv } = await supabase.from('pageviews').select('slug').in('slug', allSlugs)
        const cnt = {}
        ;(pv || []).forEach(r => { cnt[r.slug] = (cnt[r.slug] || 0) + 1 })
        const scored = data.map(p => ({
          ...p, _traffic: (p.post_slugs || []).reduce((s, slug) => s + (cnt[slug] || 0), 0)
        })).sort((a, b) => b._traffic - a._traffic)
        return res.json(scored)
      }
    }
    return res.json(data || [])
  }

  if (req.method === 'POST') {
    const { product_name, category, coupang_url, post_slugs, notes } = req.body || {}
    if (!product_name) return res.status(400).json({ error: 'product_name required' })
    const { data, error } = await supabase
      .from('coupang_links')
      .insert({ product_name, category: category || null, coupang_url: coupang_url || null, post_slugs: post_slugs || [], notes: notes || null })
      .select().single()
    if (error) return res.status(500).json({ error: error.message })
    return res.status(201).json(data)
  }

  if (req.method === 'PUT') {
    const { id } = req.query
    if (!id) return res.status(400).json({ error: 'id required' })
    const { product_name, category, coupang_url, post_slugs, notes } = req.body || {}
    const { data, error } = await supabase
      .from('coupang_links')
      .update({ product_name, category: category || null, coupang_url: coupang_url || null, post_slugs: post_slugs || [], notes: notes || null })
      .eq('id', id).select().single()
    if (error) return res.status(500).json({ error: error.message })
    return res.json(data)
  }

  if (req.method === 'DELETE') {
    const { id } = req.query
    if (!id) return res.status(400).json({ error: 'id required' })
    const { error } = await supabase.from('coupang_links').delete().eq('id', id)
    if (error) return res.status(500).json({ error: error.message })
    return res.json({ ok: true })
  }

  return res.status(405).end()
}
