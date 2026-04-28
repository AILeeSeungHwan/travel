module.exports = {
  sections: [
    { type: 'intro', html: `여행 일정 빌더는 스팟·호텔을 추가하면 GPS 기반 동선·예상 소요시간·이동 수단을 자동 계산합니다. 효율적 일정 설계로 여행 시간을 30~50% 절약할 수 있습니다.` },

    { type: 'info', title: '계산기 위젯', html: '스팟·호텔 추가 → 동선 자동 최적화 + 1일 일정표 출력. (위젯 후속)' },

    { type: 'h2', id: 'principles', text: '동선 설계 원칙' },
    { type: 'body', html: `<ul>
      <li><strong>1일 = 3~4개 스팟</strong>: 무리 없는 분량</li>
      <li><strong>지역별 묶기</strong>: 같은 권역 스팟 1일에</li>
      <li><strong>오전·오후·저녁 분배</strong>: 박물관 오전, 산책 오후, 야경·식당 저녁</li>
      <li><strong>1일 1메인 명소</strong>: 핵심 명소 + 주변 부속</li>
      <li><strong>식사 시간 1시간 30분 확보</strong>: 미식 여행 핵심</li>
      <li><strong>이동 시간 누적 X</strong>: 1일 이동 4시간 이내</li>
    </ul>` },

    { type: 'h2', id: 'sample-tokyo', text: '샘플 — 도쿄 1일 (효율 동선)' },
    { type: 'body', html: `<strong>오전 (9~12시)</strong>: 신주쿠 — 도쿄 도청 전망대(무료) → 신주쿠교엔 산책<br/><strong>점심 (12~13시 30분)</strong>: 신주쿠 — 라멘 잇푸도<br/><strong>오후 (14~17시)</strong>: 시부야 → 하라주쿠 → 메이지신궁 (도보·메트로)<br/><strong>저녁 (18~20시)</strong>: 시부야 — 츠텐 라멘 또는 야키니쿠<br/><strong>야간 (20~22시)</strong>: 시부야 스카이 야경` },

    { type: 'h2', id: 'sample-bangkok', text: '샘플 — 방콕 1일' },
    { type: 'body', html: `<strong>오전</strong>: 왕궁(8~10시 입장) → 왓포 → 점심<br/><strong>오후</strong>: 짜오프라야 강 보트 → 왓아룬<br/><strong>저녁</strong>: 차이나타운 야시장 → 디너 크루즈 (선택)` },

    { type: 'h2', id: 'tools', text: '추천 일정 도구' },
    { type: 'body', html: `<ul>
      <li>Google Maps 저장 — 스팟 ★ 표시 후 동선 그리기</li>
      <li>네이버 여행 — 한국인 후기 多</li>
      <li>Wanderlog — 일정 빌더 + 호텔·항공 통합</li>
      <li>TripIt — 항공·호텔 자동 추출</li>
      <li>마이리얼트립 — 한국어 가이드 일정</li>
    </ul>` },

    { type: 'h2', id: 'tips', text: '동선 짜기 팁' },
    { type: 'body', html: `<ul>
      <li>호텔 위치 = 거점 (역·공항 인접)</li>
      <li>입장 시간·휴관일 사전 확인 (월요일 휴관 多)</li>
      <li>인기 명소 사전 예약 (콜로세움·바티칸·USJ·디즈니)</li>
      <li>식당 사전 예약 (미슐랭·인기)</li>
      <li>1일 1박물관 — 너무 많으면 피로</li>
      <li>휴식일 1일 (1주 일정)</li>
    </ul>` },

    { type: 'faq', items: [
      { q: '계산기 정확도?', a: 'GPS 기반·평균 이동 시간. 실제는 교통·날씨로 ±20% 차이.' },
      { q: '한국인 일정?', a: '마이리얼트립·트립닷컴·네이버 여행에 한국어 일정 多.' },
      { q: '아이와 일정?', a: '1일 2~3개 스팟 (성인 절반). 점심·낮잠 시간 확보.' },
    ]},

    { type: 'sources', items: [
      { label: 'Google Maps', url: 'https://www.google.com/maps', org: 'Google', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
