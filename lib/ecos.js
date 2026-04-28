// lib/ecos.js — 한국은행 ECOS API (환율) 헬퍼
// 무료 한도: 일 10,000건. 일별 환율은 매일 1회 갱신 충분.

const KEY = process.env.ECOS_API_KEY
const ENDPOINT = 'https://ecos.bok.or.kr/api'

// 통계코드: 731Y001 (주요국 통화의 대원화 환율, 일별)
// 항목코드 (통화별):
const CURRENCY_ITEMS = {
  USD: '0000001',   // 미국 달러
  JPY: '0000002',   // 일본 옌(100엔)
  EUR: '0000003',   // 유로
  CNY: '0000027',   // 중국 위안
  GBP: '0000012',   // 영국 파운드
  HKD: '0000015',   // 홍콩 달러
  TWD: '0000026',   // 대만 달러
  SGD: '0000024',   // 싱가포르 달러
  THB: '0000022',   // 태국 바트
  VND: '0000048',   // 베트남 동(100동)
  IDR: '0000018',   // 인도네시아 루피아(100루피아)
  MYR: '0000020',   // 말레이시아 링깃
  PHP: '0000021',   // 필리핀 페소
  AUD: '0000051',   // 호주 달러
  CAD: '0000004',   // 캐나다 달러
}

// 최근 7일 평균 — 일별 데이터 호출
export async function fetchExchangeRate(currency = 'USD', days = 7) {
  if (!KEY) return null
  const code = CURRENCY_ITEMS[currency]
  if (!code) return null

  const today = new Date()
  const todayStr = today.toISOString().slice(0, 10).replace(/-/g, '')
  const startDate = new Date(today.getTime() - days * 86400000)
  const startStr = startDate.toISOString().slice(0, 10).replace(/-/g, '')

  const url = `${ENDPOINT}/StatisticSearch/${KEY}/json/kr/1/${days}/731Y001/D/${startStr}/${todayStr}/${code}`
  try {
    const r = await fetch(url)
    if (!r.ok) return null
    const data = await r.json()
    const rows = data?.StatisticSearch?.row
    if (!rows || rows.length === 0) return null
    const latest = rows[rows.length - 1]
    return {
      currency,
      rate: parseFloat(latest.DATA_VALUE),
      date: latest.TIME, // YYYYMMDD
      unit: latest.UNIT_NAME || '원',
      source: '한국은행 ECOS',
    }
  } catch (e) {
    return null
  }
}

export async function fetchAllRates(currencies = Object.keys(CURRENCY_ITEMS)) {
  const results = await Promise.all(currencies.map(c => fetchExchangeRate(c)))
  return results.filter(Boolean).reduce((acc, r) => { acc[r.currency] = r; return acc }, {})
}

export const SUPPORTED_CURRENCIES = Object.keys(CURRENCY_ITEMS)
