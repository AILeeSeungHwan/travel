import { createServerClient } from '../../lib/supabase'
import { createHash } from 'crypto'

function detectDevice(ua) {
  if (!ua) return 'unknown'
  const u = ua.toLowerCase()
  if (u.includes('mobile') || u.includes('android') || u.includes('iphone') || u.includes('ipad')) return 'mobile'
  return 'desktop'
}

function makeSessionHash(ip, ua) {
  const raw = (ip || '') + '|' + (ua || '') + '|' + new Date().toISOString().slice(0, 10)
  return createHash('sha256').update(raw).digest('hex').slice(0, 32)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const supabase = createServerClient()
  if (!supabase) return res.json({ ok: false, error: 'supabase not configured' })

  const { slug, title, referrer, source, keyword } = req.body || {}
  if (!slug) return res.status(400).json({ error: 'slug required' })

  const ip = (req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '').toString().split(',')[0].trim()
  const ua = req.headers['user-agent'] || ''

  const { error } = await supabase.from('pageview_events').insert({
    slug,
    title: title || null,
    source: source || 'direct',
    keyword: keyword || null,
    referrer: referrer || null,
    session_hash: makeSessionHash(ip, ua),
    device: detectDevice(ua),
    site: 'travel',
  })

  if (error) {
    console.error('[pageview] insert error:', error.message)
    return res.json({ ok: false, error: error.message })
  }
  return res.json({ ok: true })
}
