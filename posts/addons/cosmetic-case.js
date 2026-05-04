module.exports = {
  sections: [
    { type: 'intro', html: `여행용 화장품 케이스는 기내반입 액체 100ml 한도와 1L 투명 지퍼백 1개 규정에 맞춰 화장품을 옮겨 담는 필수 아이템입니다.` },

    { type: 'image', src: 'https://images.unsplash.com/photo-1575291930020-5dbada5097c7?auto=format&fit=crop&q=80&w=1200', alt: '해외여행 화장품 케이스 기내 100ml 한도 여행 필수품', caption: '여행용 화장품 케이스 완전 가이드', imageSource: 'Unsplash', imageLicense: 'Unsplash License', imageCredit: 'AR on Unsplash', imageSourceUrl: 'https://unsplash.com/@ar_bak?utm_source=tripspot&utm_medium=referral' },

    { type: 'warning', title: '기내 100ml 한도', html: '국제선 기내 반입 액체는 100ml 이하 용기 + 1L 투명 지퍼백 1개. 위탁수하물은 한도 X.' },

    { type: 'h2', id: 'case', text: '케이스 종류' },
    { type: 'body', html: `<ul>
      <li><strong>실리콘 보틀</strong>: 30·50·100ml. 누액 방지 펌프. 가장 인기.</li>
      <li><strong>플라스틱 PET 보틀</strong>: 가성비. 5~10개 세트 5,000원.</li>
      <li><strong>고압축 튜브</strong>: 크림·로션 — 자유롭게 짜기.</li>
      <li><strong>스프레이 보틀</strong>: 토너·미스트.</li>
      <li><strong>분말 케이스</strong>: 파운데이션·아이섀도우.</li>
      <li><strong>샘플 보틀</strong>: 30~50ml — 5박 충분.</li>
    </ul>` },

    { type: 'hotelsCombinedCTA', text: '여행지 호텔 최저가 비교 →', subText: '날짜를 선택하면 여러 예약 사이트의 요금을 한번에 비교할 수 있습니다.', href: '#' },

    { type: 'h2', id: 'liquid', text: '100ml 한도 — 정확한 적용' },
    { type: 'body', html: `<ul>
      <li>용기 표시 100ml 이하 — 내용물 양 무관.</li>
      <li>투명 지퍼백 1L 1개 — 1인.</li>
      <li>한도 초과 시 보안검색에서 폐기.</li>
      <li>위탁 수하물 — 한도 X (큰 용량은 위탁).</li>
    </ul>` },

    { type: 'h2', id: 'pack', text: '여행용 화장품 짐 싸기' },
    { type: 'body', html: `<ul>
      <li>스킨·로션·세럼 — 30·50ml로 옮기기</li>
      <li>썬크림 SPF 50+ — 50ml 이하</li>
      <li>샴푸·린스 — 50ml 또는 호텔 비치 사용</li>
      <li>틴트·립밤 — 미니어처 또는 본 제품</li>
      <li>마스크팩 — 시트팩 별도 챙기기 (액체 X)</li>
    </ul>` },

    { type: 'productSlot', productKey: 'cosmetic-case' },

    { type: 'faq', items: [
      { q: '실리콘 vs PET?', a: '실리콘 — 누액 방지·재사용. PET — 가성비·일회용.' },
      { q: '향수는?', a: '50~100ml 모델. 원본 가져가도 100ml 이하면 OK.' },
    ]},

    { type: 'disclaimer' },
  ]
}
