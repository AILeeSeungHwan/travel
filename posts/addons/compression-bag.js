module.exports = {
  sections: [
    { type: 'intro', html: `압축팩은 캐리어 공간을 30~50% 절약하는 필수 아이템입니다. 옷·이불·수건 부피를 절반으로 압축. 진공 펌프식·롤링식·지퍼식 3가지 타입.` },

    { type: 'h2', id: 'types', text: '타입별' },
    { type: 'body', html: `<ul>
      <li><strong>진공 펌프식</strong>: 압축률 70%+. 펌프 또는 진공청소기 사용. 부피 가장 적음.</li>
      <li><strong>롤링식</strong>: 손으로 굴려 공기 빼기. 펌프 X. 압축률 40~50%.</li>
      <li><strong>지퍼식</strong>: 무릎으로 누르며 지퍼 잠금. 가장 간편.</li>
    </ul>여행 중 사용은 롤링·지퍼식이 편리. 진공 펌프식은 출국 전 한국에서 사용.` },

    { type: 'h2', id: 'size', text: '사이즈' },
    { type: 'body', html: `<ul>
      <li>소형 (30×40cm): 속옷·양말</li>
      <li>중형 (40×50cm): 티셔츠·바지</li>
      <li>대형 (50×70cm): 자켓·이불</li>
      <li>여행 세트: 소·중·대 1개씩 = 5~10벌 압축</li>
    </ul>` },

    { type: 'h2', id: 'tips', text: '활용 팁' },
    { type: 'body', html: `<ul>
      <li>출국 전 한국에서 진공 압축 — 캐리어 가득 채우기</li>
      <li>여행 후 빈 압축팩 = 면세 쇼핑 공간</li>
      <li>사용한 옷·새 옷 분리 (분류용)</li>
      <li>아이 옷 — 일일 단위 압축 (실수 X)</li>
      <li>여행자보험 가방 분실 시 압축팩 단위 청구</li>
    </ul>` },

    { type: 'productSlot', productKey: 'compression-bag' },

    { type: 'faq', items: [
      { q: '진공 vs 롤링?', a: '진공 — 한국 출발 시. 롤링 — 여행 중 재사용. 둘 다 보유 권장.' },
      { q: '재사용 가능?', a: '대부분 50~100회 재사용. 지퍼·구멍 손상 시 폐기.' },
    ]},

    { type: 'disclaimer' },
  ]
}
