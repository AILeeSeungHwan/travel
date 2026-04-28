module.exports = {
  sections: [
    { type: 'intro', html: `우도(牛島)는 제주 동쪽 작은 섬으로 자전거·전기차로 한 바퀴 도는 1일 코스. 산호해변·검멀레해변·우도봉의 풍경과 땅콩 명물(아이스크림·마카롱)이 인기.` },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: `<ul>
      <li>면적: 6.18 km²</li>
      <li>좌표: 33.51, 126.96</li>
      <li>인구: 약 1,800명</li>
      <li>접근: 성산항·종달항 → 페리 15분</li>
      <li>페리 왕복: 약 10,500원 (2026 기준)</li>
      <li>소요 시간: 4~6시간</li>
    </ul>` },

    { type: 'h2', id: 'transport', text: '섬 내 이동' },
    { type: 'body', html: `<ul>
      <li><strong>자전거</strong>: 1일 1.5~2만 원. 한 바퀴 2시간.</li>
      <li><strong>전기차 (4륜)</strong>: 1일 5~10만 원. 가족·여유.</li>
      <li><strong>전기 ATV (3륜)</strong>: 4~6만 원.</li>
      <li><strong>마을버스</strong>: 한 바퀴 1,500원. 1시간.</li>
      <li><strong>도보 일부</strong>: 우도봉·검멀레해변 도보 10~30분.</li>
    </ul>` },

    { type: 'h2', id: 'spots', text: '핵심 스팟' },
    { type: 'body', html: `<ul>
      <li>산호해변 (홍조단괴해빈) — 분홍빛 모래·UNESCO</li>
      <li>검멀레해변 — 검은 모래·동굴</li>
      <li>우도봉 (132m) — 정상 등산 30분·전망</li>
      <li>천진항 등대</li>
      <li>훈데르트바서 카페 — 컬러풀 건축</li>
      <li>비양도 — 우도 안의 작은 섬</li>
    </ul>` },

    { type: 'h2', id: 'food', text: '땅콩 명물' },
    { type: 'body', html: `<ul>
      <li>땅콩 아이스크림 — 우도 명물</li>
      <li>땅콩 마카롱·라떼</li>
      <li>전복죽·해녀 식당</li>
      <li>회·해산물</li>
    </ul>` },

    { type: 'h2', id: 'access', text: '페리' },
    { type: 'body', html: `<strong>성산항</strong>: 매일 8시~17시, 30분 간격. 자전거 동반 가능.<br/><strong>종달항</strong>: 8시 30분~16시, 1시간 간격. 자동차 동반 가능 (여름 성수기 제한).<br/>차량 동반은 종달항 이용. 운전면허·차량 등록증 지참.` },

    { type: 'h2', id: 'tips', text: '팁' },
    { type: 'body', html: `<ul>
      <li>오전 출발 추천 (오후 인파)</li>
      <li>여름 햇볕 강함 — 모자·SPF 50+</li>
      <li>겨울 강풍·페리 결항 가능 — 사전 확인</li>
      <li>자전거 부담 시 전기차 + 도보 조합</li>
    </ul>` },

    { type: 'sources', items: [
      { label: 'VISITJEJU', url: 'https://www.visitjeju.net/', org: '제주관광공사', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
