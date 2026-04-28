module.exports = {
  sections: [
    { type: 'intro', html: `푸켓은 태국 최대 휴양섬으로 인천에서 6시간 30분 직항. 빠통(번화·나이트라이프)·까따(잔잔)·까론(가족)·라와이(현지) 비치, 피피섬·코랄섬·시밀란섬 호핑투어, 풀빌라·5성호텔 풍부 — 신혼·가족·다이빙 모두 인기.<br/><br/>11~4월 건기 베스트, 5~10월 우기에는 30~40% 가격 인하 — 비 잠깐만 와서 일정 큰 지장 없음.` },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: `<ul>
      <li>비행: 인천→푸켓 6시간 30분</li>
      <li>비자: 90일 무비자</li>
      <li>베스트: 11~4월 건기</li>
      <li>이동: 렌터카·스쿠터·Grab</li>
    </ul>` },

    { type: 'h2', id: 'beaches', text: '비치 권역별' },
    { type: 'body', html: `<ul>
      <li><strong>빠통(Patong)</strong> — 번화·방라로드 야간·쇼핑·식당. 첫 방문자.</li>
      <li><strong>까따(Kata)</strong> — 잔잔·서핑·중급 비치 클럽.</li>
      <li><strong>까론(Karon)</strong> — 가족·여유.</li>
      <li><strong>라와이(Rawai)</strong> — 현지 어부·해산물·요가.</li>
      <li><strong>마이카오(Mai Khao)</strong> — 공항 인근, JW 메리어트·앙사나.</li>
    </ul>` },

    { type: 'h2', id: 'islands', text: '호핑투어 — 피피·코랄·시밀란' },
    { type: 'body', html: `<strong>피피섬</strong> — 영화 비치 촬영지, 청청한 바다. 1일 1,500~3,000바트.<br/><strong>코랄섬</strong> — 단거리(30분), 가족 적합.<br/><strong>시밀란섬</strong> — 다이빙 1순위, 11~5월만 개방. 1일 또는 1박2일.` },

    { type: 'h2', id: 'oldtown', text: '푸켓 올드타운' },
    { type: 'body', html: '시노-포르투갈 양식 거리, 카페·갤러리·로컬 음식. SNS 사진 명소.' },

    { type: 'h2', id: 'food', text: '미식' },
    { type: 'body', html: `<ul>
      <li>해산물 — 라와이 어시장·반얀트리·반탈레</li>
      <li>매싸이팟타이 — 푸켓 명물</li>
      <li>팟타이·그린커리</li>
      <li>한식당 — 빠통·까따</li>
    </ul>` },

    { type: 'h2', id: 'hotels', text: '숙소' },
    { type: 'body', html: '<strong>5성</strong>: 아만푸리·트리시라·반얀트리·앙사나·JW 메리어트. <strong>풀빌라</strong>: 풍부 — 1박 USD 150~600. <strong>가성비</strong>: 빠통 4성 1박 USD 60~100.' },

    { type: 'h2', id: 'budget', text: '예산' },
    { type: 'body', html: '5박6일: 1인 100~200만 원<br/>가족 4인 풀빌라 1주일: 300~700만 원' },

    { type: 'faq', items: [
      { q: '베스트 시즌?', a: '11~4월 건기. 5~10월 우기 — 가격 인하·비치 일부 폐쇄·호핑투어 일부 운휴.' },
      { q: '아이와 함께?', a: '까론·까따 잔잔 비치, 코랄섬 호핑(피피보다 가까움), 푸켓 동물원·아쿠아리움.' },
      { q: '신혼?', a: '아만푸리·트리시라·반얀트리 풀빌라 1주일. 까따·라와이 일몰.' },
      { q: '시밀란섬 다이빙 자격?', a: '오픈워터 자격 권장. 펀다이빙 1일 USD 100~150. 비자격자는 스노쿨링.' },
    ]},

    { type: 'sources', items: [
      { label: '태국관광청 — 푸켓', url: 'https://www.tourismthailand.org/Destinations/Provinces/Phuket', org: 'TAT', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
