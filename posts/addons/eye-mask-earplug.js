module.exports = {
  sections: [
    { type: 'intro', html: `장거리 비행과 호텔 숙면을 위해 안대·귀마개는 필수입니다. 3D 입체 안대 + 소음 차단(SNR 30dB+) 귀마개로 비행 중 또는 호텔에서 깊은 수면 가능.` },

    { type: 'h2', id: 'mask', text: '안대 — 3D 입체 vs 일반' },
    { type: 'body', html: `<ul>
      <li><strong>일반 평면 안대</strong>: 5,000~10,000원. 눈 누름 — 마스카라 번짐 가능.</li>
      <li><strong>3D 입체 안대</strong>: 15,000~30,000원. 눈썹·속눈썹 자유. 압박 X.</li>
      <li><strong>실크 안대</strong>: 부드러움·럭셔리.</li>
      <li><strong>온열 안대 (홧팩)</strong>: 일회용 — 비행 중 1회 사용.</li>
      <li><strong>전동 마사지 안대</strong>: 충전식 — 장거리 비행에 인기.</li>
    </ul>` },

    { type: 'h2', id: 'earplug', text: '귀마개 — SNR 차이' },
    { type: 'body', html: `<ul>
      <li><strong>스폰지 (Disposable)</strong>: SNR 30dB. 1회용 — 일회당 100원.</li>
      <li><strong>실리콘</strong>: SNR 25dB. 재사용 — 5~10회.</li>
      <li><strong>맞춤 귀형 (Custom)</strong>: SNR 35dB. 청각사·음악가용. 10~30만 원.</li>
      <li><strong>전자 귀마개 (액티브 노이즈 캔슬)</strong>: 50,000~150,000원. 비행기 엔진 소음만 차단.</li>
    </ul>` },

    { type: 'h2', id: 'flight', text: '비행 수면 세트' },
    { type: 'body', html: `<ul>
      <li>안대 + 귀마개 + 목베개 — 3종 세트 1.5~3만 원</li>
      <li>대한항공·아시아나 비즈니스 — 무료 제공</li>
      <li>이코노미 — 자기 것 챙기기</li>
      <li>장거리(8시간+) — 멜라토닌 0.5~3mg 추가</li>
    </ul>` },

    { type: 'h2', id: 'hotel', text: '호텔 숙면' },
    { type: 'body', html: `<ul>
      <li>안대 — 도시 호텔 빛 차단</li>
      <li>귀마개 — 도시·번화가 호텔 소음</li>
      <li>호텔 베개·이불 호환 안 되면 — 미니 베개 동행</li>
    </ul>` },

    { type: 'productSlot', productKey: 'eye-mask-earplug' },

    { type: 'faq', items: [
      { q: '추천 세트?', a: '3D 안대 + 스폰지 귀마개 + 메모리폼 목베개 = 1.5~3만 원, 7시간+ 비행 권장.' },
      { q: '귀 통증?', a: '실리콘 귀마개 — 부드럽고 재사용 OK.' },
    ]},

    { type: 'disclaimer' },
  ]
}
