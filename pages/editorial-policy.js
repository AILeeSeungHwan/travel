import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

export default function EditorialPolicy() {
  return (
    <Layout
      title="편집 정책 — 트립스팟의 정보 출처·검증·광고 분리 기준"
      description="트립스팟의 정보 출처 기준, 이미지 라이선스 정책, 검증 절차, 업데이트 주기, 광고·제휴 분리 원칙, 오류 신고 절차를 안내합니다."
    >
      <Breadcrumb items={[{ label: '편집 정책' }]} />
      <h1 style={{ fontSize: 26, fontWeight: 900, marginBottom: 6 }}>편집 정책</h1>
      <p style={{ fontSize: 13, color: '#64748B', marginBottom: 28 }}>최종 수정일: 2025년 5월</p>

      <div style={{ fontSize: 15, lineHeight: 1.9, color: '#334155' }}>

        {/* ── 1. 정보 출처 기준 ── */}
        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 0, marginBottom: 10 }}>1. 정보 출처 기준</h2>
        <p style={{ marginBottom: 10 }}>
          트립스팟은 정확성과 신뢰성을 위해 아래 공식 출처를 우선합니다.
          개인 블로그·커뮤니티·SNS 글은 1차 출처로 사용하지 않습니다.
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, marginBottom: 16 }}>
          <thead>
            <tr style={{ background: '#F8FAFC', textAlign: 'left' }}>
              <th style={{ padding: '8px 10px', borderBottom: '1px solid #E2E8F0' }}>출처</th>
              <th style={{ padding: '8px 10px', borderBottom: '1px solid #E2E8F0' }}>사용 범위</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['외교부 해외안전여행 (0404.go.kr)', '비자·여행경보·영사조력·법규'],
              ['한국관광공사 / TourAPI 4.0', '국내 관광지 메타·이미지·설명'],
              ['각국 관광청 공식 사이트 (JNTO·베트남관광청 등)', '현지 여행지·교통·문화'],
              ['UNESCO 세계유산 위원회', '세계유산 등재 정보'],
              ['호텔스컴바인 (HotelsCombined)', '호텔 위치·평점·가격대 (클릭 시점 기준)'],
              ['한국은행 ECOS', '환율 데이터'],
              ['항공사·공항 공식 사이트', '항공 스케줄·수하물 규정'],
            ].map(([src, scope]) => (
              <tr key={src}>
                <td style={{ padding: '8px 10px', borderBottom: '1px solid #F1F5F9', fontWeight: 600, verticalAlign: 'top' }}>{src}</td>
                <td style={{ padding: '8px 10px', borderBottom: '1px solid #F1F5F9', color: '#64748B' }}>{scope}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ── 2. 이미지 라이선스 정책 ── */}
        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 28, marginBottom: 10 }}>2. 이미지 라이선스 정책</h2>
        <p style={{ marginBottom: 10 }}>
          본 사이트의 모든 이미지는 다음 5개 출처에서만 수집·사용합니다.
          무단 다운로드 이미지, 저작권 불명 이미지는 절대 사용하지 않습니다.
          이미지를 못 구한 스팟·호텔 포스트는 발행하지 않습니다.
        </p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          <li style={{ marginBottom: 6 }}><strong>한국관광공사 TourAPI</strong> — 공공누리 1유형 (출처 표기 후 자유 이용)</li>
          <li style={{ marginBottom: 6 }}><strong>Wikimedia Commons</strong> — CC BY / CC BY-SA / Public Domain (작가명·라이선스 표기)</li>
          <li style={{ marginBottom: 6 }}><strong>Unsplash / Pexels API</strong> — Unsplash License / CC0 (작가명 표기)</li>
          <li style={{ marginBottom: 6 }}><strong>호텔스컴바인 API hot-link</strong> — 호텔 객실·외관 전용 (다운로드 금지, &lt;img src&gt;로만 사용)</li>
          <li style={{ marginBottom: 6 }}><strong>자체 제작 OG 이미지</strong> — 포스트별 썸네일 (Sharp 라이브러리로 생성)</li>
        </ul>
        <p style={{ marginBottom: 16 }}>
          모든 이미지는 <code style={{ background:'#F1F5F9', padding:'1px 5px', borderRadius:4 }}>imageSource</code>·
          <code style={{ background:'#F1F5F9', padding:'1px 5px', borderRadius:4 }}>imageLicense</code>·
          <code style={{ background:'#F1F5F9', padding:'1px 5px', borderRadius:4 }}>imageCredit</code> 메타데이터와 함께 저장됩니다.
          전체 이미지 출처 목록은 <a href="/image-credits/" style={{ color:'#0369A1' }}>이미지 출처 페이지</a>에서 확인할 수 있습니다.
        </p>

        {/* ── 3. 콘텐츠 등급 및 검증 절차 ── */}
        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 28, marginBottom: 10 }}>3. 콘텐츠 등급 및 검증 절차</h2>
        <p style={{ marginBottom: 10 }}>
          정보의 민감도에 따라 세 가지 등급으로 운영하며, 등급별 검증 기준이 다릅니다.
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, marginBottom: 16 }}>
          <thead>
            <tr style={{ background: '#F8FAFC', textAlign: 'left' }}>
              <th style={{ padding: '8px 10px', borderBottom: '1px solid #E2E8F0' }}>등급</th>
              <th style={{ padding: '8px 10px', borderBottom: '1px solid #E2E8F0' }}>콘텐츠 유형</th>
              <th style={{ padding: '8px 10px', borderBottom: '1px solid #E2E8F0' }}>검증 기준</th>
              <th style={{ padding: '8px 10px', borderBottom: '1px solid #E2E8F0' }}>제휴 링크</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Level A', '비자·출입국·여행자보험·외교부 여행경보', '공식 출처 2개 이상 필수', '없음'],
              ['Level B', '호텔·항공·교통·환율·면세', '메타 검색 수치 명시 필수', '허용 (CTA 1~3개)'],
              ['Level C', '여행 후기·추천·문화·음식·현지 꿀팁', '자체 큐레이션 허용, 출처 명시', '허용'],
            ].map(([grade, type, standard, affiliate]) => (
              <tr key={grade}>
                <td style={{ padding: '8px 10px', borderBottom: '1px solid #F1F5F9', fontWeight: 700 }}>{grade}</td>
                <td style={{ padding: '8px 10px', borderBottom: '1px solid #F1F5F9' }}>{type}</td>
                <td style={{ padding: '8px 10px', borderBottom: '1px solid #F1F5F9', color: '#64748B' }}>{standard}</td>
                <td style={{ padding: '8px 10px', borderBottom: '1px solid #F1F5F9', color: '#64748B' }}>{affiliate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          <li style={{ marginBottom: 6 }}>호텔 가격·평점은 호텔스컴바인 등 메타 검색 사이트 수치를 명시합니다.</li>
          <li style={{ marginBottom: 6 }}>검증이 미완료된 정보는 <em>확인 중</em> 표시 후 확인 완료 시 갱신합니다.</li>
          <li style={{ marginBottom: 6 }}>이미지가 확보되지 않은 스팟·호텔 포스트는 발행하지 않습니다.</li>
          <li style={{ marginBottom: 6 }}>모든 외부 링크는 접근 날짜(accessedAt)를 글 하단에 기재합니다.</li>
        </ul>

        {/* ── 4. 업데이트 주기 ── */}
        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 28, marginBottom: 10 }}>4. 업데이트 주기</h2>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          <li style={{ marginBottom: 6 }}><strong>비자·여행경보(Level A)</strong> — 외교부 고시 변경 시 즉시 반영</li>
          <li style={{ marginBottom: 6 }}><strong>호텔 가격대·평점(Level B)</strong> — 분기 1회 이상 점검</li>
          <li style={{ marginBottom: 6 }}><strong>환율</strong> — 월 1회 이상 갱신 (한국은행 ECOS 기준)</li>
          <li style={{ marginBottom: 6 }}><strong>일반 여행 정보(Level C)</strong> — 연 1회 이상 점검</li>
        </ul>
        <p style={{ marginBottom: 16 }}>
          갱신된 포스트는 상단 <em>업데이트 날짜</em>를 수정하고 변경 내용 요약을 본문에 추가합니다.
        </p>

        {/* ── 5. 금지 표현 ── */}
        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 28, marginBottom: 10 }}>5. 금지 표현 기준</h2>
        <p style={{ marginBottom: 10 }}>아래 표현은 오해를 유발하거나 근거가 불충분하므로 모든 포스트에서 사용을 금지합니다.</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, marginBottom: 16 }}>
          <thead>
            <tr style={{ background: '#FEF2F2', textAlign: 'left' }}>
              <th style={{ padding: '8px 10px', borderBottom: '1px solid #FCA5A5' }}>금지 표현</th>
              <th style={{ padding: '8px 10px', borderBottom: '1px solid #FCA5A5' }}>이유</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['"최저가 보장"', '호텔·항공 가격은 시시각각 변동'],
              ['"수수료 없음"', '플랫폼마다 정책이 다르며 일반화 불가'],
              ['"100% 안전"', '외교부 여행경보와 모순 가능'],
              ['"무조건 추천"', '여행자마다 조건이 다름'],
              ['"1등 호텔 / 최고의 여행지"', '검증 불가한 순위 주장'],
              ['"확정 환율"', '실시간 환율은 참고치일 뿐'],
            ].map(([expr, reason]) => (
              <tr key={expr}>
                <td style={{ padding: '8px 10px', borderBottom: '1px solid #FEF2F2', fontWeight: 600, color: '#B91C1C' }}>{expr}</td>
                <td style={{ padding: '8px 10px', borderBottom: '1px solid #FEF2F2', color: '#64748B' }}>{reason}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ── 6. 광고·제휴 분리 원칙 ── */}
        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 28, marginBottom: 10 }}>6. 광고 · 제휴 분리 원칙</h2>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          <li style={{ marginBottom: 6 }}>Level A(비자·안전·법규) 콘텐츠에는 어떠한 제휴 링크도 연결하지 않습니다.</li>
          <li style={{ marginBottom: 6 }}>호텔 페이지 호텔스컴바인 CTA 영역 위아래에는 AdSense 광고를 배치하지 않습니다(전환 방해 방지).</li>
          <li style={{ marginBottom: 6 }}>쿠팡 파트너스 링크는 여행용품(Addon) 페이지에만 연결합니다.</li>
          <li style={{ marginBottom: 6 }}>한 페이지의 호텔스컴바인 CTA는 최대 3개로 제한합니다.</li>
          <li style={{ marginBottom: 6 }}>제휴 링크는 본문에 직접 노출하지 않고 어드민에서 일괄 관리합니다.</li>
          <li style={{ marginBottom: 6 }}>광고·제휴 수익이 콘텐츠 추천 순서·평점·호텔 선정에 영향을 주지 않습니다.</li>
        </ul>

        {/* ── 7. AI 보조 작성 고지 ── */}
        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 28, marginBottom: 10 }}>7. AI 보조 작성 고지</h2>
        <p style={{ marginBottom: 14 }}>
          트립스팟의 일부 콘텐츠는 AI 작성 보조 도구를 활용해 초안을 생성하고, 편집자가 검토·수정·출처 확인을 거쳐 발행합니다.
          최종 발행 책임은 트립스팟 에디터에게 있으며, AI가 생성한 정보라도 공식 출처 검증 없이는 게재하지 않습니다.
        </p>

        {/* ── 8. 오류 신고 ── */}
        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 28, marginBottom: 10 }}>8. 오류 신고 · 정정 요청</h2>
        <p style={{ marginBottom: 6 }}>
          잘못된 정보·변경된 공시 자료·이미지 라이선스 문제를 발견하면{' '}
          <a href="/contact/" style={{ color: '#0369A1' }}>문의 페이지</a>로 알려주세요.
        </p>
        <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
          <li style={{ marginBottom: 4 }}>일반 오류·가격 변경 — 영업일 기준 7일 이내 검토 후 수정</li>
          <li style={{ marginBottom: 4 }}>이미지 DMCA 신고 — 영업일 기준 2일 이내 검토 후 해당 이미지 즉시 비공개</li>
          <li style={{ marginBottom: 4 }}>비자·안전 오류 (Level A) — 접수 즉시 검토, 24시간 이내 조치</li>
        </ul>

        <p style={{ marginTop: 32, fontSize: 13, color: '#94A3B8' }}>
          ※ 본 편집 정책은 운영 방침 변경 시 갱신됩니다. 이전 버전은 문의 페이지로 요청 시 제공합니다.
        </p>
      </div>
    </Layout>
  )
}
