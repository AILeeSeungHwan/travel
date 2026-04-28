module.exports = {
  sections: [
    { type: 'intro', html: `여권지갑은 여행 중 여권·항공권·신용카드·동전을 한 곳에 보관하는 필수 아이템입니다. RFID 차단 기능이 있는 모델은 비접촉 카드(NFC) 해킹 방지 — 안전성 강화.` },

    { type: 'h2', id: 'features', text: '핵심 기능' },
    { type: 'body', html: `<ul>
      <li><strong>여권 슬롯</strong>: 단권/복수 여권</li>
      <li><strong>카드 슬롯</strong>: 신용·체크·항공 마일리지 5~10장</li>
      <li><strong>지폐 칸</strong>: 다국적 통화 분리</li>
      <li><strong>동전 칸</strong>: 별도 지퍼</li>
      <li><strong>항공권 보관</strong>: 인쇄 항공권·탑승권</li>
      <li><strong>RFID 차단</strong>: 비접촉 해킹 방지</li>
      <li><strong>펜 홀더</strong>: 입국 카드 작성</li>
    </ul>` },

    { type: 'h2', id: 'rfid', text: 'RFID 차단 — 왜 필요한가' },
    { type: 'body', html: `RFID(Radio-Frequency IDentification)는 비접촉 카드(NFC·MIFARE) 정보를 무선으로 읽는 기술. 일부 사기범이 휴대용 RFID 리더로 카드 정보 탈취 — RFID 차단 지갑은 카드 정보 무선 송수신 차단.<br/>한국 신용카드도 NFC 결제 가능 — 해외에서 RFID 차단 권장.` },

    { type: 'h2', id: 'material', text: '재질·디자인' },
    { type: 'body', html: `<ul>
      <li><strong>가죽</strong>: 고급·내구성. 신혼·기념일.</li>
      <li><strong>나일론</strong>: 가볍고 방수. 비치·우기.</li>
      <li><strong>패브릭</strong>: 가성비·다양한 색상.</li>
    </ul>` },

    { type: 'h2', id: 'recommended', text: '추천' },
    { type: 'body', html: `<ul>
      <li>RFID 차단 + 가죽 + 다국적 통화 분리</li>
      <li>여권 + 항공권 + 카드 + 동전 통합</li>
      <li>슬림 디자인 — 주머니 보관</li>
      <li>가족 여행 — 4인 패밀리 패키지</li>
    </ul>` },

    { type: 'productSlot', productKey: 'travel-passport-wallet' },

    { type: 'faq', items: [
      { q: 'RFID 차단 정말 필요?', a: '필수 X 권장 O. 해킹 위험 0.1% 미만이지만 지갑 추가 비용 5,000~10,000원 부담 적음.' },
      { q: '가족용?', a: '4인 가족 — 각 1개 또는 1개 통합형. 통합형은 분실 시 전 가족 영향.' },
    ]},

    { type: 'disclaimer' },
  ]
}
