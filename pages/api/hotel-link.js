// /api/hotel-link?slug=shilla-jeju
// 공개 GET: 호텔 슬러그로 어드민 등록 딥링크 조회 (호텔 페이지 클라이언트에서 사용)

import { createServerClient } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end()
  const slug = req.query.slug
  if (!slug) return res.json({})

  const supabase = createServerClient()
  if (!supabase) return res.json({})

  const { data, error } = await supabase
    .from('hotel_links')
    .select('hotel_slug, deeplink, hotelscombined_id, verified')
    .eq('hotel_slug', slug)
    .maybeSingle()

  if (error || !data) return res.json({})
  return res.json(data)
}
