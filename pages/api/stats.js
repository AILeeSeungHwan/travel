import { createServerClient } from '../../lib/supabase'

function checkAuth(req) {
  const pwd = req.headers['x-admin-password'] || req.query.pwd
  return pwd === process.env.ADMIN_PASSWORD
}

export default async function handler(req, res) {
  if (!checkAuth(req)) return res.status(401).json({ error: 'unauthorized' })
  const supabase = createServerClient()
  if (!supabase) return res.json({})
  const { type, days } = req.query
  const period = parseInt(days || '7', 10)
  const since = new Date(Date.now() - period * 86400000).toISOString()

  if (type === 'summary') {
    const { count: total } = await supabase.from('pageviews').select('*', { count: 'exact', head: true })
    const { count: recent } = await supabase.from('pageviews').select('*', { count: 'exact', head: true }).gte('created_at', since)
    return res.json({ total: total || 0, recent: recent || 0, days: period })
  }
  if (type === 'pages') {
    const { data } = await supabase.from('pageviews').select('slug, title').gte('created_at', since).limit(2000)
    const cnt = {}
    ;(data || []).forEach(r => { cnt[r.slug] = (cnt[r.slug] || 0) + 1 })
    const top = Object.entries(cnt).sort((a, b) => b[1] - a[1]).slice(0, 15).map(([slug, count]) => ({ slug, count }))
    return res.json(top)
  }
  if (type === 'keywords') {
    const { data } = await supabase.from('pageviews').select('keyword').gte('created_at', since).not('keyword', 'is', null).limit(2000)
    const cnt = {}
    ;(data || []).forEach(r => { cnt[r.keyword] = (cnt[r.keyword] || 0) + 1 })
    const top = Object.entries(cnt).sort((a, b) => b[1] - a[1]).slice(0, 15).map(([keyword, count]) => ({ keyword, count }))
    return res.json(top)
  }
  if (type === 'sources') {
    const { data } = await supabase.from('pageviews').select('source').gte('created_at', since).limit(2000)
    const cnt = {}
    ;(data || []).forEach(r => { cnt[r.source || 'direct'] = (cnt[r.source || 'direct'] || 0) + 1 })
    const top = Object.entries(cnt).sort((a, b) => b[1] - a[1]).map(([source, count]) => ({ source, count }))
    return res.json(top)
  }
  if (type === 'recent') {
    const { data } = await supabase.from('pageviews').select('slug, title, source, keyword, created_at').order('created_at', { ascending: false }).limit(100)
    return res.json(data || [])
  }
  return res.json({})
}
