import { createServerClient } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const supabase = createServerClient()
  if (!supabase) return res.json({ ok: false })
  const { slug, title, referrer, source, keyword } = req.body || {}
  if (!slug) return res.status(400).json({ error: 'slug required' })
  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString().split(',')[0].trim()
  const ua = req.headers['user-agent'] || ''
  const { error } = await supabase.from('pageviews').insert({
    slug, title: title || null, referrer: referrer || null,
    source: source || null, keyword: keyword || null, ip, user_agent: ua,
  })
  if (error) return res.json({ ok: false, error: error.message })
  return res.json({ ok: true })
}
