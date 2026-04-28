module.exports = {
  sections: [
    { type: 'intro', html: `하노이는 베트남 수도이자 천년의 역사 도시입니다. 인천에서 5시간 직항. 호안끼엠 호수·구시가지·문묘·호치민 묘소 등 1,000년 역사 유적이 도보 거리에 모여 있고, 차로 3~4시간 거리에 <strong>하롱베이</strong>(UNESCO·1박2일 크루즈)와 사파(소수민족·트레킹)가 있어 1주일 일정의 거점이 됩니다.<br/><br/>북부의 시원한 날씨(10~3월)와 풍부한 음식 문화, 합리적 가격대로 가성비 1주일 여행에 적합.` },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: `<ul>
      <li>비행: 인천→하노이(HAN) 5시간</li>
      <li>베스트: 10~4월 시원함</li>
      <li>이동: Grab·시클로·도보</li>
    </ul>` },

    { type: 'h2', id: 'oldquarter', text: '구시가지 (Old Quarter)·호안끼엠' },
    { type: 'body', html: '36개 거리 — 거리마다 다른 업종(과거 길드 잔재). 호안끼엠 호수 — 옥산사·홍교(빨간 다리). 야간 마켓(주말).' },

    { type: 'h2', id: 'literature', text: '문묘·호치민 묘소' },
    { type: 'body', html: '<strong>문묘</strong>(Temple of Literature) — 1070년 건립, 공자 사당, 베트남 최초 대학. <strong>호치민 묘소</strong> — 호치민 주석 안치, 매주 월·금 휴관. 옷차림 보수적.' },

    { type: 'h2', id: 'halong', text: '하롱베이 — UNESCO 크루즈' },
    { type: 'body', html: '하노이에서 차로 3시간 30분. 1,600개 석회암 섬. 1박2일 크루즈 USD 100~250 — 일출·카약·티칭 동굴. <strong>가족·신혼 인기</strong>. 9~10월·12~3월 베스트.' },

    { type: 'h2', id: 'sapa', text: '사파 — 소수민족·계단식 논' },
    { type: 'body', html: '하노이에서 야간기차·버스 6~8시간. 흐몽·자오·따이족 마을, 판시판산(베트남 최고봉, 케이블카), 계단식 논. 9~10월 황금 추수, 1~2월 안개.' },

    { type: 'h2', id: 'food', text: '미식 — 북부의 정수' },
    { type: 'body', html: `<ul>
      <li>분짜 — 하노이 명물, 숯불 돼지고기 + 면 + 채소</li>
      <li>퍼 — 하노이는 본고장</li>
      <li>차까(생선튀김 비빔국수)</li>
      <li>반미·고이꾸온</li>
      <li>에그커피 — 까페 장(원조)</li>
      <li>비아 호이 — 길거리 생맥주</li>
    </ul>` },

    { type: 'h2', id: 'hotels', text: '숙소' },
    { type: 'body', html: '<strong>5성</strong>: 소피텔 메트로폴 레전드·메트로폴 헤리티지(역사 호텔). <strong>4성</strong>: 멜리아·풀만·아쿠아센트럴. <strong>부티크</strong>: 구시가지 한옥 같은 부티크 1박 USD 50~100.' },

    { type: 'h2', id: 'budget', text: '예산' },
    { type: 'body', html: '5박6일 하노이+하롱: 1인 90~180만 원<br/>1주일 + 사파 추가: 1인 120~220만 원' },

    { type: 'faq', items: [
      { q: '추천 일정?', a: '5박6일 — 1·2일 시내, 3·4일 하롱베이 1박2일, 5·6일 시내 복귀+사파 또는 닌빈.' },
      { q: '하롱베이 1박 vs 당일?', a: '1박2일 강력 추천 — 일출·동굴·카약 모두 즐김.' },
      { q: '여름 가도?', a: '5~9월 더위·습도 — 비추천. 10~4월 권장.' },
      { q: '아이와 함께?', a: '하롱베이 크루즈는 아이 OK(연령 제한 확인). 사파는 7세 이상 권장.' },
    ]},

    { type: 'sources', items: [
      { label: '베트남관광청', url: 'https://vietnam.travel/', org: 'Vietnam Tourism', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
