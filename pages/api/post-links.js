import { createServerClient } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end()
  const slug = req.query.slug
  if (!slug) return res.json([])
  const supabase = createServerClient()
  if (!supabase) return res.json([])
  const { data, error } = await supabase
    .from('coupang_links')
    .select('product_name, category, coupang_url, post_slugs, notes')
    .contains('post_slugs', [slug])
    .not('coupang_url', 'is', null)
  if (error) return res.json([])
  return res.json(data || [])
}
