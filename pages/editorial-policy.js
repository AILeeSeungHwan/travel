import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

export default function EditorialPolicy() {
  return (
    <Layout title="편집 정책" description="트립스팟의 정보 출처 기준, 이미지 라이선스 정책, 검증 절차, 업데이트 주기, 광고/제휴 분리 원칙을 안내합니다.">
      <Breadcrumb items={[{ label:'편집 정책' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:14 }}>편집 정책</h1>
      <div style={{ fontSize:15, lineHeight:1.85, color:'#334155' }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>1. 정보 출처 기준</h2>
        <p>모든 포스트는 다음 공식 자료를 우선 참조합니다.</p>
        <ul style={{ paddingLeft:18, marginBottom:14 }}>
          <li>외교부 해외안전여행 (0404.go.kr) — 비자·여행경보·영사조력</li>
          <li>한국관광공사 (visitkorea.or.kr / TourAPI 4.0) — 국내 관광지 메타·이미지</li>
          <li>각국 관광청 공식 사이트 (JNTO, 베트남관광청 등)</li>
          <li>UNESCO 세계유산 (한국유네스코위원회)</li>
          <li>호텔스컴바인 — 호텔 위치·평점·가격대(클릭 시점 기준)</li>
          <li>한국은행 ECOS — 환율</li>
        </ul>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>2. 이미지 라이선스 정책 (가장 중요)</h2>
        <p>본 사이트의 모든 이미지는 다음 5개 출처에서만 수집·사용합니다. 무단 다운로드 이미지는 절대 사용하지 않습니다.</p>
        <ul style={{ paddingLeft:18, marginBottom:14 }}>
          <li><strong>한국관광공사 TourAPI</strong> (공공누리 1유형) — 국내 관광지·문화유산</li>
          <li><strong>Wikimedia Commons</strong> (CC BY / CC BY-SA / Public Domain) — 해외 도시·랜드마크</li>
          <li><strong>Unsplash / Pexels API</strong> — 분위기·배경 이미지</li>
          <li><strong>호텔스컴바인 API hot-link</strong> — 호텔 객실/외관 (다운로드 금지, IMG src로만)</li>
          <li><strong>자체 제작 OG 이미지</strong> — 포스트별 메인 이미지</li>
        </ul>
        <p>모든 이미지는 imageSource·imageLicense·imageCredit 메타데이터와 함께 저장됩니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>3. 정보 검증 절차</h2>
        <ul style={{ paddingLeft:18, marginBottom:14 }}>
          <li>비자·안전 정보(Level A)는 외교부·대사관 출처 2개 이상 확보 시에만 게재</li>
          <li>호텔 가격·평점은 호텔스컴바인 등 1개 이상 메타 검색 사이트 수치를 명시</li>
          <li>검증 미완료 정보는 verificationRequired 플래그로 명시</li>
          <li>이미지가 없는 스팟 포스트는 발행하지 않음</li>
        </ul>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>4. 업데이트 주기</h2>
        <p>월 1회 이상 기존 포스트의 비자·여행경보·환율·호텔 가격대를 점검하고 갱신합니다. 갱신 시 페이지 상단에 "업데이트" 일자를 표시합니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>5. 금지 표현</h2>
        <ul style={{ paddingLeft:18, marginBottom:14 }}>
          <li>"최저가 보장" — 호텔/항공 가격은 변동성</li>
          <li>"수수료 없음" — 일반화 금지(호텔스컴바인 자체 수수료는 없으나 일반화 X)</li>
          <li>"100% 안전" — 외교부 여행경보 단계와 모순될 수 있음</li>
          <li>특정 호텔·항공사·여행사 단정적 추천</li>
        </ul>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>6. 광고 / 제휴 분리</h2>
        <ul style={{ paddingLeft:18, marginBottom:14 }}>
          <li>Level A(비자·안전·법규) 콘텐츠에는 어떠한 제휴 링크도 연결하지 않음</li>
          <li>호텔 페이지의 호텔스컴바인 CTA 영역 위아래에는 AdSense 광고 미배치</li>
          <li>쿠팡 파트너스 링크는 여행용품(Addon) 영역에만 연결</li>
          <li>한 페이지 호텔스컴바인 CTA는 1~3개로 제한</li>
        </ul>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>7. 오류 신고 / 정정 요청</h2>
        <p>잘못된 정보·변경된 공시 자료·이미지 라이선스 문제를 발견하면 <a href="/contact/" style={{ color:'#0369A1' }}>문의 페이지</a>로 알려주세요. 영업일 기준 7일 이내 검토 후 수정 또는 삭제합니다.</p>
      </div>
    </Layout>
  )
}
