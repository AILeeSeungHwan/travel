module.exports = {
  sections: [
    { type: 'intro', html: `해외여행 계획에서 비행시간과 시차는 일정·체력·아이 동반 결정에 직접 영향을 줍니다. 인천·김포·부산 출발 주요 목적지 비행시간을 정리합니다.` },

    { type: 'image', src: 'https://images.unsplash.com/photo-1620451978644-841acb416d6f?auto=format&fit=crop&q=80&w=1200', alt: '인천 출발 해외여행 비행시간 시차 계산', caption: '주요 목적지 비행시간·시차 가이드', imageSource: 'Unsplash', imageLicense: 'Unsplash License', imageCredit: 'Keisuke Kuribara on Unsplash', imageSourceUrl: 'https://unsplash.com/@ksukkuri?utm_source=travel.ambitstock&utm_medium=referral' },

    { type: 'info', title: '계산기 위젯', html: '출발지·도착지 입력 → 직항 비행시간 + 한국 시간 기준 시차 자동 계산. (위젯 후속 추가 예정)' },

    { type: 'h2', id: 'asia', text: '동아시아·동남아 (1~7시간)' },
    { type: 'body', html: `<ul>
      <li>후쿠오카 1시간 (시차 0)</li>
      <li>도쿄·오사카 2~2.5시간 (0)</li>
      <li>타이페이 2.5시간 (-1)</li>
      <li>홍콩 3.5시간 (-1)</li>
      <li>괌 4시간 (+1)</li>
      <li>세부 4.5시간 (-1)</li>
      <li>다낭·하노이·호치민 5~5.5시간 (-2)</li>
      <li>방콕·푸켓 6~6.5시간 (-2)</li>
      <li>치앙마이 6시간 (-2)</li>
      <li>싱가포르·쿠알라룸푸르 6~6.5시간 (-1)</li>
      <li>발리 7시간 30분 (0)</li>
    </ul>` },

    { type: 'hotelsCombinedCTA', text: '여행지 호텔 최저가 비교 →', subText: '날짜를 선택하면 여러 예약 사이트의 요금을 한번에 비교할 수 있습니다.', href: '#' },

    { type: 'h2', id: 'europe', text: '유럽·중동 (10~13시간)' },
    { type: 'body', html: `<ul>
      <li>모스크바 9시간 (-6, 서머 -5)</li>
      <li>이스탄불 11시간 (-6)</li>
      <li>런던 12시간 (-9, 서머 -8)</li>
      <li>파리 12시간 (-8, 서머 -7)</li>
      <li>로마 12.5시간 (-8, 서머 -7)</li>
      <li>프랑크푸르트 12시간 (-8, 서머 -7)</li>
      <li>두바이 9.5시간 (-5)</li>
    </ul>` },

    { type: 'h2', id: 'americas', text: '아메리카 (9~14시간)' },
    { type: 'body', html: `<ul>
      <li>호놀룰루 (하와이) 9시간 (-19, 서머 -19)</li>
      <li>로스앤젤레스 11시간 (-17, 서머 -16)</li>
      <li>샌프란시스코 11시간 (-17)</li>
      <li>시애틀 11시간 (-17)</li>
      <li>밴쿠버 11시간 (-17)</li>
      <li>뉴욕 14시간 (-14, 서머 -13)</li>
      <li>토론토 14시간 (-14)</li>
      <li>멕시코시티 14시간 (-15)</li>
    </ul>` },

    { type: 'h2', id: 'oceania', text: '오세아니아 (10~12시간)' },
    { type: 'body', html: `<ul>
      <li>괌 4시간 (+1)</li>
      <li>사이판 4.5시간 (+1)</li>
      <li>시드니 10시간 (+1, 서머 +2)</li>
      <li>오클랜드 (뉴질랜드) 11시간 (+3, 서머 +4)</li>
    </ul>` },

    { type: 'h2', id: 'jetlag', text: '시차 적응 팁' },
    { type: 'body', html: `<ul>
      <li><strong>4~6시간 시차</strong>: 1~2일 적응. 도착 즉시 현지 시간 기준 활동.</li>
      <li><strong>7~9시간 시차 (유럽)</strong>: 3~4일 적응. 야간편 + 멜라토닌 0.5~3mg.</li>
      <li><strong>12시간+ 시차 (미국 동부)</strong>: 5~7일 적응. 도착 후 햇볕·운동.</li>
      <li><strong>아이 시차</strong>: 어린이는 적응 더 느림. 야간편 + 평소 수면 시간 유지.</li>
    </ul>` },

    { type: 'h2', id: 'limit', text: '한계' },
    { type: 'body', html: '직항 기준 평균 시간. 경유·바람·노선에 따라 ±1~2시간 차이. 실제 비행시간은 항공사 공식 또는 Skyscanner·구글 항공편에서 확인.' },

    { type: 'faq', items: [
      { q: '시차 가장 적은 해외?', a: '일본·괌·오키나와·태국·발리(0~2시간) — 시차 적응 부담 적음.' },
      { q: '시차 큰 곳?', a: '뉴욕(-14h)·LA(-17h)·하와이(-19h) — 일정 첫날·둘째날 컨디션 영향.' },
      { q: '아이와 야간편?', a: '5세+ 권장. 야간편이 시차 적응에 도움.' },
    ]},

    { type: 'sources', items: [
      { label: 'Skyscanner', url: 'https://www.skyscanner.co.kr/', org: 'Skyscanner', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
