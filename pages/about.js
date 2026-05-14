import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import Head from 'next/head'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://travel.ambitstock.com'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': SITE + '/about/#editor',
  name: '트립스팟 에디터',
  url: SITE + '/about/',
  worksFor: {
    '@type': 'Organization',
    name: '트립스팟',
    url: SITE,
  },
  description: '국내외 여행 정보를 한국관광공사·외교부·각국 관광청 공식 출처 중심으로 큐레이션합니다.',
  knowsAbout: ['국내 여행', '해외여행', '호텔 비교', '비자 정보', '여행 예산 계획'],
}

export default function About() {
  return (
    <Layout
      title="트립스팟 소개 — 운영자 · 편집 철학 · 출처 정책"
      description="트립스팟(tripspot)은 한국관광공사·외교부·각국 관광청 공식 출처 기반의 여행 정보 큐레이터 사이트입니다. 운영자 신원, 편집 철학, 이미지·수익 정책을 공개합니다."
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>
      <Breadcrumb items={[{ label: '소개' }]} />

      <h1 style={{ fontSize: 26, fontWeight: 900, marginBottom: 6 }}>트립스팟 소개</h1>
      <p style={{ fontSize: 13, color: '#64748B', marginBottom: 24 }}>운영자 · 편집 철학 · 출처 · 수익 정책</p>

      <div style={{ fontSize: 15, lineHeight: 1.9, color: '#334155' }}>

        {/* ── 운영자 신원 ── */}
        <section style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', borderRadius: 10, padding: '18px 20px', marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10, color: '#0369A1' }}>운영자 신원</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <tbody>
              {[
                ['사이트 이름', '트립스팟 (Tripspot)'],
                ['운영 주체', '트립스팟 에디터 (개인 운영)'],
                ['운영 시작', '2024년'],
                ['소재지', '대한민국'],
                ['문의 이메일', 'cocoboogiwoo@gmail.com'],
                ['편집 언어', '한국어 (Korean)'],
              ].map(([k, v]) => (
                <tr key={k}>
                  <td style={{ padding: '6px 10px', fontWeight: 700, color: '#0C4A6E', width: '30%', verticalAlign: 'top' }}>{k}</td>
                  <td style={{ padding: '6px 10px' }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ── 서비스 소개 ── */}
        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 0, marginBottom: 10 }}>트립스팟은 어떤 사이트인가요?</h2>
        <p style={{ marginBottom: 14 }}>
          <strong>트립스팟(Tripspot)</strong>은 국내·해외 여행을 준비하는 분들이 한국관광공사·외교부·각국 관광청·호텔스컴바인 등
          <strong> 공식 출처 자료를 손쉽게 비교·이해</strong>할 수 있도록 정리하는 여행 정보 큐레이터 사이트입니다.
        </p>
        <p style={{ marginBottom: 14 }}>
          국가 → 지역 → 스팟 3단계 허브 구조를 통해 어떤 여행자든 자신의 여행지·예산·일정에 맞는 정보를 빠르게 찾을 수 있도록 설계했습니다.
          여행지 정보, 호텔 가격 비교, 비자·안전 정보, 예산 계산기, 여행 가이드까지 한 곳에서 확인할 수 있습니다.
        </p>

        {/* ── 편집 철학 ── */}
        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 28, marginBottom: 10 }}>편집 철학</h2>
        <p style={{ marginBottom: 10 }}>트립스팟의 모든 콘텐츠는 세 가지 원칙 위에 만들어집니다.</p>
        <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <strong>출처 우선</strong> — 외교부 해외안전여행(0404.go.kr), 한국관광공사, 각국 관광청 공식 자료를 1차 출처로 합니다.
            확인되지 않은 정보는 게재하지 않으며, 출처와 접근 날짜를 글 하단에 명시합니다.
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong>중립 큐레이션</strong> — 특정 호텔·항공사·여행사를 단정적으로 추천하지 않습니다.
            가격·평점은 변동성이 있으므로 "약", "기준 시점" 등을 반드시 병기합니다.
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong>광고와 편집의 분리</strong> — 수익 구조(AdSense·호텔스컴바인·쿠팡 파트너스)가 콘텐츠 품질에 영향을 주지 않습니다.
            비자·안전 등 Level A 정보에는 어떠한 제휴 링크도 연결하지 않습니다.
          </li>
        </ul>

        {/* ── E-E-A-T ── */}
        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 28, marginBottom: 10 }}>콘텐츠 등급 (E-E-A-T 기준)</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, marginBottom: 14 }}>
          <thead>
            <tr style={{ background: '#F8FAFC', textAlign: 'left' }}>
              <th style={{ padding: '8px 10px', borderBottom: '1px solid #E2E8F0' }}>등급</th>
              <th style={{ padding: '8px 10px', borderBottom: '1px solid #E2E8F0' }}>콘텐츠 유형</th>
              <th style={{ padding: '8px 10px', borderBottom: '1px solid #E2E8F0' }}>검증 기준</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Level A', '비자·출입국·여행자보험·외교부 여행경보', '공식 출처 2개 이상 · 제휴 링크 없음'],
              ['Level B', '호텔·항공·교통·환율·면세', '메타 검색 1개 이상 · 가격 변동 명시'],
              ['Level C', '여행 후기·추천·문화·현지 음식', '자체 큐레이션 허용 · 출처 명시'],
            ].map(([grade, type, standard]) => (
              <tr key={grade}>
                <td style={{ padding: '8px 10px', borderBottom: '1px solid #F1F5F9', fontWeight: 700 }}>{grade}</td>
                <td style={{ padding: '8px 10px', borderBottom: '1px solid #F1F5F9' }}>{type}</td>
                <td style={{ padding: '8px 10px', borderBottom: '1px solid #F1F5F9', color: '#64748B' }}>{standard}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ── 이미지 정책 ── */}
        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 28, marginBottom: 10 }}>이미지 출처 정책</h2>
        <p style={{ marginBottom: 10 }}>
          본 사이트의 모든 이미지는 아래 5개 출처에서만 수집합니다. 무단 다운로드 이미지는 사용하지 않습니다.
        </p>
        <ol style={{ paddingLeft: 20, marginBottom: 14 }}>
          <li style={{ marginBottom: 6 }}><strong>한국관광공사 TourAPI</strong> — 공공누리 1유형 (국내 관광지·문화유산)</li>
          <li style={{ marginBottom: 6 }}><strong>Wikimedia Commons</strong> — CC BY / CC BY-SA / Public Domain (해외 도시·랜드마크)</li>
          <li style={{ marginBottom: 6 }}><strong>Unsplash / Pexels API</strong> — Unsplash License / CC0 (분위기·배경)</li>
          <li style={{ marginBottom: 6 }}><strong>호텔스컴바인 API hot-link</strong> — 호텔 객실·외관 (다운로드 금지, IMG src로만)</li>
          <li style={{ marginBottom: 6 }}><strong>자체 제작 OG 이미지</strong> — 포스트별 메인 이미지</li>
        </ol>
        <p style={{ marginBottom: 14 }}>
          모든 이미지는 출처·라이선스·작가명 메타데이터와 함께 저장되며,{' '}
          <a href="/image-credits/" style={{ color: '#0369A1' }}>이미지 출처 페이지</a>에서 일괄 확인할 수 있습니다.
          DMCA 또는 저작권 이의 신청은 <a href="/contact/" style={{ color: '#0369A1' }}>문의 페이지</a>로 보내주시면 24시간 이내 검토합니다.
        </p>

        {/* ── 수익 구조 ── */}
        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 28, marginBottom: 10 }}>운영 수익 구조</h2>
        <p style={{ marginBottom: 10 }}>
          트립스팟은 아래 세 가지 수단으로 운영비를 충당합니다. 수익 관계가 콘텐츠 순위·추천에 영향을 주지 않습니다.
        </p>
        <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
          <li style={{ marginBottom: 6 }}><strong>Google AdSense</strong> — 콘텐츠 페이지 광고 (클릭/노출 기반)</li>
          <li style={{ marginBottom: 6 }}>
            <strong>호텔스컴바인 어필리에이트</strong> — 호텔 상세 페이지에서 예약 연결 시 수수료 발생.
            비자·안전·Level A 페이지에는 미적용.
          </li>
          <li style={{ marginBottom: 6 }}>
            <strong>쿠팡 파트너스</strong> — 여행용품(캐리어·어댑터·보조배터리 등) 페이지에만 연결.
            이 링크를 통해 구매 시 수수료가 발생할 수 있습니다.
          </li>
        </ul>

        {/* ── 편집 정책 링크 ── */}
        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 28, marginBottom: 10 }}>편집 정책 / 오류 신고</h2>
        <p style={{ marginBottom: 6 }}>
          모든 포스트는 <a href="/editorial-policy/" style={{ color: '#0369A1' }}>편집 정책</a>에 따라 작성됩니다.
          정보 오류·변경된 공시 자료·이미지 라이선스 문제를 발견하면{' '}
          <a href="/contact/" style={{ color: '#0369A1' }}>문의 페이지</a>로 알려주세요.
          영업일 7일 이내 검토 후 수정 또는 삭제합니다.
        </p>

        <p style={{ marginTop: 28, fontSize: 13, color: '#94A3B8' }}>
          ※ 본 페이지의 정보는 사이트 운영 정책 변경 시 갱신됩니다. 최종 수정일: 2025년 5월.
        </p>
      </div>
    </Layout>
  )
}
