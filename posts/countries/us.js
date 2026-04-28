module.exports = {
  sections: [
    { type: 'intro', html: `미국은 인천에서 11~14시간 직항으로 도착하는 광활한 대륙 국가입니다. <strong>ESTA 사전승인</strong>으로 90일 무비자 입국. 하와이·뉴욕·로스앤젤레스·샌프란시스코·라스베이거스·플로리다·시카고 — 도시·자연·테마파크 모든 색채를 갖췄습니다.<br/><br/>한국인 신혼여행·가족여행에서 하와이·라스베이거스가 인기, 직장인 출장에서 뉴욕·LA·샌프란시스코, 가족 테마파크에서 올랜도(디즈니·유니버설)·LA(디즈니·유니버설) 인기.` },

    { type: 'risk', title: 'ESTA 필수·체류 조건 (Level A)', html: '한국 일반 여권은 <strong>ESTA 사전승인 필수</strong>(USD 21, esta.cbp.dhs.gov). 90일 단기 체류 한정 무비자. 입국 시 항공권·숙소 증빙·체류 목적 명확 답변 필요. 일부 지역 외교부 여행유의 — 도시별 안전 차이 큼.' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: `<ul>
      <li>비자: ESTA 사전승인 (90일 무비자)</li>
      <li>통화: 미국달러(USD) — 1USD ≈ 1,350~1,420원</li>
      <li>시차: 동부 EST(UTC-5), 서부 PST(UTC-8) — 한국보다 14~17시간 늦음</li>
      <li>비행: 인천→LA 11시간, 뉴욕 14시간, 호놀룰루 9시간</li>
      <li>베스트: 5~10월 (지역별 상이)</li>
      <li>전압: 110V·60Hz, A·B타입</li>
      <li>팁 문화: 식당 18~22%, 호텔 USD 1~2/박, 우버 15%</li>
    </ul>` },

    { type: 'h2', id: 'regions', text: '핵심 지역' },
    { type: 'body', html: `<ul>
      <li><strong>하와이 (호놀룰루·마우이)</strong>: 와이키키, 다이아몬드헤드, 진주만, 신혼·가족</li>
      <li><strong>뉴욕</strong>: 타임스퀘어·센트럴파크·자유의여신상·브로드웨이 뮤지컬</li>
      <li><strong>로스앤젤레스</strong>: 할리우드·산타모니카·디즈니·유니버설</li>
      <li><strong>샌프란시스코</strong>: 금문교·알카트라즈·요세미티 당일</li>
      <li><strong>라스베이거스</strong>: 카지노·쇼·그랜드캐년 1일 투어</li>
      <li><strong>올랜도</strong>: 디즈니월드·유니버설·케네디우주센터</li>
      <li><strong>시애틀</strong>: 스타벅스 1호점·스페이스니들·아마존·MS</li>
      <li><strong>그랜드캐년·요세미티·옐로스톤</strong>: 미국 자연 3대 국립공원</li>
    </ul>` },

    { type: 'h2', id: 'practical', text: '실무 팁' },
    { type: 'body', html: `<ul>
      <li><strong>팁 문화</strong>: 식당 청구서의 18~22% 추가. 호텔 짐꾼·룸서비스 USD 1~2.</li>
      <li><strong>택시·우버·리프트</strong>: 우버/리프트 보편, 가격 명확.</li>
      <li><strong>렌터카</strong>: LA·하와이·국립공원 필수. 국제운전면허·신용카드(보증금) 필수.</li>
      <li><strong>의료비</strong>: 매우 비쌈 — 응급실 1회 USD 1,000~5,000. 여행자보험 USD 100,000+ 보장 권장.</li>
      <li><strong>총기 안전</strong>: 일부 도시 야간 외출 자제, 호텔/숙소 주변 확인.</li>
    </ul>` },

    { type: 'h2', id: 'budget', text: '예산' },
    { type: 'body', html: `5박6일 하와이 신혼: 1인 300~600만 원<br/>1주일 LA+라스베이거스: 1인 400~800만 원<br/>10박 동·서부 일주: 1인 600~1,200만 원<br/>가족 4인 디즈니 1주: 700~1,500만 원` },

    { type: 'faq', items: [
      { q: 'ESTA 신청 절차?', a: 'esta.cbp.dhs.gov, USD 21, 카드 결제. 24~72시간 내 결과. 출국 최소 72시간 전 신청.' },
      { q: '하와이 신혼 베스트?', a: '오아후(와이키키) + 마우이 7박 동선. 12~3월 고래시즌 인기.' },
      { q: '여행자보험은?', a: '의료 USD 100,000+ 보장 필수. 1주 약 5~10만 원.' },
      { q: '항공권 싸게?', a: '비수기(2~3월·10~11월), 4~6개월 전 예약. LCC 옵션 X — 정규 항공.' },
      { q: '아이와 함께 추천?', a: '올랜도 디즈니월드 + 케네디우주센터 8박, 또는 LA 디즈니랜드 + 유니버설 + 산타모니카 7박.' },
    ]},

    { type: 'sources', items: [
      { label: 'ESTA 공식 (CBP)', url: 'https://esta.cbp.dhs.gov/', org: 'U.S. Customs and Border Protection', accessedAt: '2026-04-25' },
      { label: '미국관광청', url: 'https://www.visittheusa.kr/', org: 'Brand USA', accessedAt: '2026-04-25' },
      { label: '외교부 해외안전여행 — 미국', url: 'https://www.0404.go.kr/', org: '외교부', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
