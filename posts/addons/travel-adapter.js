module.exports = {
  sections: [
    { type: 'intro', html: `해외여행에서 어댑터는 필수입니다. 국가별 콘센트 타입(A/B/C/F/G 등)이 다르며, 한 어댑터로 여러 국가에 대응하려면 멀티 어댑터를 구매해야 합니다. 최근 USB-C PD 65W 멀티 어댑터로 노트북·휴대폰·태블릿 동시 충전이 가능합니다.` },

    { type: 'h2', id: 'types', text: '국가별 콘센트 타입' },
    { type: 'body', html: `<ul>
      <li><strong>한국</strong>: F타입 (220V·50Hz)</li>
      <li><strong>일본</strong>: A타입 (100V·50/60Hz)</li>
      <li><strong>중국·태국·필리핀</strong>: A·B·C·O 다양</li>
      <li><strong>베트남·인도네시아·말레이시아</strong>: C·F·G 혼용</li>
      <li><strong>유럽 (프랑스·독일·이탈리아)</strong>: C·F타입</li>
      <li><strong>영국·홍콩·싱가포르</strong>: G타입 (3핀)</li>
      <li><strong>미국·캐나다·대만</strong>: A·B타입 (110V·60Hz)</li>
      <li><strong>호주·뉴질랜드</strong>: I타입</li>
    </ul>` },

    { type: 'h2', id: 'voltage', text: '전압 — 110V vs 220V' },
    { type: 'body', html: `<ul>
      <li>한국 220V → 일본·미국 110V: 소형 가전(헤어드라이어) 작동 안 함. 변압기 별도.</li>
      <li>대부분 노트북·휴대폰 충전기는 100~240V 대응 — 어댑터만 OK.</li>
      <li>고데기·헤어드라이어 — 110V/220V 듀얼 모델 또는 현지 호텔 비치 사용.</li>
    </ul>` },

    { type: 'h2', id: 'recommended', text: '추천 멀티 어댑터' },
    { type: 'body', html: `<ul>
      <li><strong>USB-C PD 65W 멀티</strong>: 노트북·휴대폰 동시 — 출장·워케이션</li>
      <li><strong>4 USB 포트 + 1 콘센트</strong>: 가족 여행, 1개로 4인 충전</li>
      <li><strong>A·B·C·G 4-in-1</strong>: 가장 보편적 멀티 어댑터</li>
      <li><strong>접이식 콤팩트</strong>: 휴대성</li>
    </ul>` },

    { type: 'h2', id: 'caution', text: '주의' },
    { type: 'body', html: `<ul>
      <li>전압 불일치 시 화재 위험 — 110V 가전을 220V 콘센트에 직접 연결 X</li>
      <li>고전력 가전 (1,000W+) — 멀티 어댑터 X, 변압기 필요</li>
      <li>리튬 배터리 충전 — 호텔 무인 X, 사용 중 충전</li>
    </ul>` },

    { type: 'productSlot', productKey: 'travel-adapter' },

    { type: 'faq', items: [
      { q: '다목적 1개면 OK?', a: 'USB-C PD 65W + A·B·C·G 4-in-1 멀티 어댑터 1개로 대부분 국가 OK.' },
      { q: '변압기 필요?', a: '대부분 노트북·휴대폰은 100~240V 대응 — 변압기 X. 헤어드라이어는 듀얼 모델.' },
    ]},

    { type: 'disclaimer' },
  ]
}
