import { useEffect } from 'react'

function detectEngine(ref) {
  if (!ref) return 'direct'
  try {
    const host = new URL(ref).hostname.toLowerCase()
    if (host.includes('google')) return 'google'
    if (host.includes('naver')) return 'naver'
    if (host.includes('daum') || host.includes('kakao')) return 'daum'
    if (host.includes('bing')) return 'bing'
    if (host.includes('yahoo')) return 'yahoo'
    if (host.includes('zum')) return 'zum'
    if (host.includes('ambitstock.com')) return 'internal'
    return 'other'
  } catch { return 'other' }
}

function extractKeyword(ref) {
  if (!ref) return null
  try {
    const params = new URL(ref).searchParams
    return params.get('query') || params.get('q') || null
  } catch { return null }
}

export default function PageTracker({ slug, title }) {
  useEffect(() => {
    if (!slug || typeof window === 'undefined') return
    const key = 'pv_' + slug
    if (sessionStorage.getItem(key)) return
    const referrer = document.referrer || ''
    const source = detectEngine(referrer)
    const keyword = extractKeyword(referrer)
    const payload = { slug, source, referrer, keyword, title: title || document.title }
    fetch('/api/pageview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).then(r => { if (r.ok) sessionStorage.setItem(key, '1') }).catch(() => {})
  }, [slug, title])
  return null
}
