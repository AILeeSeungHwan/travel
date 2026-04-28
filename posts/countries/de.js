module.exports = {
  sections: [
    { type: 'intro', html: `독일은 인천에서 12시간 직항으로 도착하는 유럽의 중심입니다. 쉥겐 90일 무비자, 베를린·뮌헨·프랑크푸르트·드레스덴·로맨틱가도까지 — 역사·맥주·자동차·크리스마스 마켓의 본고장.<br/><br/>10월말 옥토버페스트(뮌헨), 12월 크리스마스 마켓(뉘른베르크·드레스덴) 시즌이 인기. 5~9월 일반 여행, 12월 크리스마스 시즌.` },

    { type: 'info', title: '독일 비자', html: '쉥겐 90일 무비자, ETIAS 시행 예정.' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: `<ul>
      <li>비자: 쉥겐 90일 무비자</li>
      <li>통화: 유로(EUR)</li>
      <li>시차: CET(UTC+1)</li>
      <li>비행: 인천→프랑크푸르트 12시간</li>
      <li>베스트: 5~9월, 12월 크리스마스 마켓</li>
      <li>전압: 230V, F타입</li>
    </ul>` },

    { type: 'h2', id: 'regions', text: '핵심 지역' },
    { type: 'body', html: `<ul>
      <li><strong>베를린</strong>: 브란덴부르크 문·베를린 장벽·박물관섬</li>
      <li><strong>뮌헨</strong>: 옥토버페스트(9월말~10월초)·BMW 박물관·노이슈반슈타인 성</li>
      <li><strong>프랑크푸르트</strong>: 금융·교통 거점</li>
      <li><strong>드레스덴</strong>: 바로크 문화, 12월 크리스마스 마켓 1순위</li>
      <li><strong>뉘른베르크</strong>: 12월 마켓 본고장</li>
      <li><strong>로맨틱가도</strong>: 뷔르츠부르크→퓌센, 동화 마을</li>
    </ul>` },

    { type: 'h2', id: 'food', text: '미식' },
    { type: 'body', html: '슈니첼·소시지·슈바인학세(돼지족)·프레첼·맥주(필스너·헤페바이젠). 옥토버페스트 1L 잔 EUR 13~15.' },

    { type: 'h2', id: 'budget', text: '예산' },
    { type: 'body', html: '7박8일: 1인 280~550만 원' },

    { type: 'faq', items: [
      { q: '옥토버페스트 일정?', a: '9월말~10월초 16일간. 호텔·항공 6개월 전 예약 필수.' },
      { q: '크리스마스 마켓 일정?', a: '11월말~12월 24일. 드레스덴·뉘른베르크·로텐부르크·하이델베르크 BEST.' },
      { q: '교통?', a: 'ICE 고속열차, 도이체반(DB) 앱. 베를린↔뮌헨 4시간.' },
    ]},

    { type: 'sources', items: [
      { label: '독일관광청', url: 'https://www.germany.travel/kr/ko/home.html', org: 'GNTB', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
