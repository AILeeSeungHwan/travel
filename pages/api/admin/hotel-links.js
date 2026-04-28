// /api/admin/hotel-links — 어드민 호텔 딥링크 CRUD
import { createServerClient } from '../../../lib/supabase'

function checkAuth(req) {
  const pwd = req.headers['x-admin-password'] || req.query.pwd
  return pwd === process.env.ADMIN_PASSWORD
}

export default async function handler(req, res) {
  if (!checkAuth(req)) return res.status(401).json({ error: 'unauthorized' })
  const supabase = createServerClient()
  if (!supabase) return res.status(500).json({ error: 'supabase not configured' })

  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('hotel_links')
      .select('*')
      .order('updated_at', { ascending: false })
    if (error) return res.status(500).json({ error: error.message })
    return res.json(data || [])
  }

  if (req.method === 'POST') {
    const { hotel_slug, hotel_name, deeplink, hotelscombined_id, notes } = req.body || {}
    if (!hotel_slug) return res.status(400).json({ error: 'hotel_slug required' })

    // upsert (이미 있으면 업데이트)
    const { data, error } = await supabase
      .from('hotel_links')
      .upsert({
        hotel_slug, hotel_name: hotel_name || null,
        deeplink: deeplink || null,
        hotelscombined_id: hotelscombined_id || null,
        notes: notes || null,
        verified: !!deeplink,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'hotel_slug' })
      .select().single()

    if (error) return res.status(500).json({ error: error.message })
    return res.json(data)
  }

  if (req.method === 'PUT') {
    const { id } = req.query
    if (!id) return res.status(400).json({ error: 'id required' })
    const { hotel_slug, hotel_name, deeplink, hotelscombined_id, notes, verified } = req.body || {}
    const { data, error } = await supabase
      .from('hotel_links')
      .update({
        hotel_slug, hotel_name, deeplink, hotelscombined_id, notes,
        verified: verified ?? !!deeplink,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id).select().single()
    if (error) return res.status(500).json({ error: error.message })
    return res.json(data)
  }

  if (req.method === 'DELETE') {
    const { id } = req.query
    if (!id) return res.status(400).json({ error: 'id required' })
    const { error } = await supabase.from('hotel_links').delete().eq('id', id)
    if (error) return res.status(500).json({ error: error.message })
    return res.json({ ok: true })
  }

  if (req.method === 'PATCH') {
    // 시드: data/hotels.js 의 모든 호텔을 hotel_links 테이블에 빈 deeplink 로 일괄 등록
    const hotels = require('../../../data/hotels')
    const rows = hotels.map(h => ({
      hotel_slug: h.slug,
      hotel_name: h.hotelName,
      deeplink: h.hotelsCombinedDeepLink || null,
      verified: !!h.hotelsCombinedDeepLink,
    }))
    const { error } = await supabase.from('hotel_links').upsert(rows, { onConflict: 'hotel_slug' })
    if (error) return res.status(500).json({ error: error.message })
    return res.json({ inserted: rows.length })
  }

  return res.status(405).end()
}
