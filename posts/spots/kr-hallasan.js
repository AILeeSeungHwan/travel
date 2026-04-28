module.exports = {
  sections: [
    { type: 'intro', html: `한라산(漢拏山)은 제주의 상징이자 한국 최남단 최고봉(1,947m). UNESCO 세계자연유산. 5개 등반 코스가 있으며, 백록담 정상까지 도전할 수 있는 코스는 성판악·관음사 2개. 일일 인원 제한·사전 예약 필수.` },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: `<ul>
      <li>해발: 1,947m (남한 1위)</li>
      <li>좌표: 33.36, 126.53</li>
      <li>주소: 제주특별자치도 제주시·서귀포시</li>
      <li>입장료: 무료 (주차료 별도)</li>
      <li>베스트 시즌: 4~10월 (우천·강풍 시 통제)</li>
      <li>소요 시간: 8~10시간 (성판악 왕복)</li>
    </ul>` },

    { type: 'h2', id: 'courses', text: '5개 등반 코스' },
    { type: 'body', html: `<ul>
      <li><strong>성판악 (백록담 등반)</strong>: 9.6km, 8~10시간. 가장 긴 코스, 정상까지. 사전 예약.</li>
      <li><strong>관음사 (백록담 등반)</strong>: 8.7km, 8~10시간. 더 가파름, 경치 1순위.</li>
      <li><strong>영실</strong>: 5.8km, 4~5시간. 윗세오름까지 (정상 X). 가성비.</li>
      <li><strong>어리목</strong>: 6.8km, 5~6시간. 윗세오름까지.</li>
      <li><strong>돈내코</strong>: 9.1km, 7~8시간. 한가로움.</li>
    </ul>` },

    { type: 'h2', id: 'reservation', text: '백록담 등반 사전 예약' },
    { type: 'body', html: `백록담 정상까지(성판악·관음사) 가려면 <strong>한라산국립공원 사전예약</strong>(visitjeju.net 또는 한라산국립공원 사이트) 필수. 일일 인원 제한 (성판악 1,000명·관음사 500명). 7~14일 전 예약 권장.` },

    { type: 'h2', id: 'tips', text: '등반 팁' },
    { type: 'body', html: `<ul>
      <li>새벽 5시 출발 — 일출 전 하산 권장</li>
      <li>등산화·스틱·우비 필수</li>
      <li>물 2L+·간식·초콜릿</li>
      <li>핫팩 (10~3월)</li>
      <li>우천·강풍 시 통제 — 출발 전 한라산국립공원 안내 확인</li>
      <li>휴대폰 통화 일부 음영지역</li>
    </ul>` },

    { type: 'warning', title: '주의 사항', html: '한라산은 변동성 큰 기상 — 갑작스런 안개·강풍·낙뢰 위험. 통제 시 즉시 하산. 단독 등반 자제.' },

    { type: 'h2', id: 'access', text: '가는 방법' },
    { type: 'body', html: `<strong>성판악 입구</strong>: 제주시 → 1131번 도로 → 차로 30분. 주차장 만차 多.<br/><strong>영실</strong>: 1139번 도로 → 차로 40분. 기본 등반 코스.<br/><strong>대중교통</strong>: 제주시·서귀포시에서 시외버스 + 셔틀.` },

    { type: 'sources', items: [
      { label: '한라산국립공원', url: 'https://www.jeju.go.kr/hallasan/index.htm', org: '제주도청', accessedAt: '2026-04-25' },
      { label: 'VISITJEJU', url: 'https://www.visitjeju.net/', org: '제주관광공사', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
