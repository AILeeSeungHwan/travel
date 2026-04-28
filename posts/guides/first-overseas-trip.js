module.exports = {
  sections: [
    { type: 'intro', html: `처음 해외여행을 준비하면 어디서부터 시작해야 할지 막막합니다. 여권·비자·환전·항공권·숙소·여행자보험·짐 싸기·입국심사·세관까지 수많은 단계가 있고, 한 가지를 빠뜨리면 출국이 막히거나 현지에서 곤란을 겪습니다.<br/><br/>본 가이드는 첫 해외여행자를 위한 출국 90일 전부터 도착·귀국까지 전 과정 체크리스트를 정리합니다. 일본·대만·베트남·태국 등 가까운 동아시아 국가 첫 여행 기준입니다.` },

    { type: 'h2', id: '90days', text: '출국 90~60일 전 — 큰 그림' },
    { type: 'body', html: `<ol>
      <li><strong>여권 확인</strong> — 잔여 6개월 이상. 만료 임박 시 외교부 여권과 갱신 (4~6주).</li>
      <li><strong>여행지 결정</strong> — 비자·여행경보·시즌 확인 (외교부 0404.go.kr).</li>
      <li><strong>예산 설정</strong> — 항공·호텔·식·교통·활동 합산. 여유 20% 추가.</li>
      <li><strong>항공권 예약</strong> — 60~120일 전 가격 가장 좋음. 정규/LCC 비교.</li>
    </ol>` },

    { type: 'h2', id: '30days', text: '출국 30~14일 전 — 디테일' },
    { type: 'body', html: `<ol>
      <li><strong>호텔 예약</strong> — 호텔스컴바인·아고다·부킹닷컴 비교. 환불 정책 확인.</li>
      <li><strong>비자 신청</strong> — 베트남 E-비자(3~5일), 미국 ESTA(72시간), 영국 ETA 등.</li>
      <li><strong>여행자보험 가입</strong> — 의료비·휴대품·항공지연 보장 (1주 1.5~5만 원).</li>
      <li><strong>현지 교통·활동 예약</strong> — 일본 디즈니·USJ, 베트남 호핑투어 등.</li>
    </ol>` },

    { type: 'h2', id: '7days', text: '출국 7~3일 전 — 막바지' },
    { type: 'body', html: `<ol>
      <li><strong>환전·트래블카드</strong> — 트래블월렛·하나 트래블로그 충전. 현금 USD 200~500 (긴급용).</li>
      <li><strong>여권 사본·비상연락처</strong> — 여권 1부 사본 + 가족 연락처 메모. 별도 보관.</li>
      <li><strong>전자기기·심카드</strong> — 어댑터(국가별) + 포켓와이파이/심카드/이심.</li>
      <li><strong>입국 신고서 사전 등록</strong> — Visit Japan Web, TDAC(태국), MDAC(말레이시아), SG Arrival Card 등.</li>
      <li><strong>외교부 동행이 등록</strong> — 0404.go.kr/dynamic/travel_register.mofa.</li>
    </ol>` },

    { type: 'h2', id: 'packing', text: '짐 — 캐리어 vs 기내 가방' },
    { type: 'body', html: `<strong>캐리어(위탁수하물)</strong>: 항공사별 23~32kg, 옷·세면용품·신발.<br/><strong>기내 가방(휴대수하물)</strong>: 7~10kg, 여권·항공권·지갑·휴대폰·노트북·충전기·약품.<br/><strong>액체</strong>: 100ml 이하 + 1L 투명 지퍼백 1개 (기내).<br/><strong>보조배터리</strong>: 100Wh 이하 — 위탁 X, 기내만.<br/><strong>리튬 배터리 가전</strong>: 위탁 X.` },

    { type: 'h2', id: 'airport', text: '공항 도착·출국' },
    { type: 'body', html: `<strong>출국 3시간 전 도착</strong> 권장 (성수기·골든위크 4시간):<br/><ol>
      <li>체크인 카운터 — 여권·항공권·짐 (위탁) 제출</li>
      <li>출국심사 — 자동 출입국심사대(SES) 가입자는 빠름</li>
      <li>면세점 쇼핑 (선택)</li>
      <li>탑승 게이트 — 출발 30분 전 도착</li>
    </ol>` },

    { type: 'h2', id: 'arrival', text: '현지 도착·입국' },
    { type: 'body', html: `<ol>
      <li>비행기 하차 → 입국심사 — 여권 + 입국 카드(또는 Visit Japan Web 등 QR)</li>
      <li>지문·얼굴 사진 등록 (16세+)</li>
      <li>심사관 질문 — 체류 목적·기간·숙소</li>
      <li>여권 입국 도장</li>
      <li>수하물 수령</li>
      <li>세관 — 면세 한도 초과 시 신고</li>
      <li>도착 로비 — 환전·심카드·교통(공항버스·지하철·택시)</li>
    </ol>총 1~2시간 소요. 피크 시즌 더 걸림.` },

    { type: 'h2', id: 'arrived', text: '현지 첫날' },
    { type: 'body', html: `<ul>
      <li>심카드/와이파이 활성화 — 통신·구글지도 작동 확인</li>
      <li>환전·트래블카드 결제 테스트</li>
      <li>호텔 체크인 — 여권 사본 제출, 시티택스(일부 국가)</li>
      <li>호텔 위치 + 비상연락처 메모</li>
      <li>가벼운 동선 — 호텔 인근 산책·식사</li>
    </ul>` },

    { type: 'h2', id: 'return', text: '귀국 절차' },
    { type: 'body', html: `<ol>
      <li>호텔 체크아웃 — 시티택스·미니바 정산</li>
      <li>공항 도착 — 출국 3시간 전</li>
      <li>면세 환급(Tax-Free) — 출국 세관 도장 → 환급 카운터</li>
      <li>체크인 → 출국심사 → 면세점</li>
      <li>한국 입국 — 자진신고 (USD 800 초과 시)</li>
    </ol>` },

    { type: 'h2', id: 'emergency', text: '비상 시' },
    { type: 'body', html: `<ul>
      <li><strong>여권 분실</strong>: 현지 경찰 신고서 → 한국 대사관·총영사관 임시여권</li>
      <li><strong>응급 의료</strong>: 여행자보험 SOS → 영사콜센터 +82-2-3210-0404</li>
      <li><strong>도난·체포</strong>: 영사콜센터 즉시 연락</li>
      <li><strong>대규모 재해</strong>: 동행이 등록 시 자동 안전 확인</li>
    </ul>` },

    { type: 'faq', items: [
      { q: '첫 해외여행 추천국?', a: '일본(2시간·무비자·시차 X)·대만(2.5시간·미식)·베트남(5시간·45일 무비자·한국인 운영 풍부).' },
      { q: '항공권 싸게 사는 시점?', a: '60~120일 전 평균 가장 저렴. 비수기(2월·6월·11월) 권장.' },
      { q: '여행자보험 꼭 필요?', a: '강력 권장. 의료비 부담 큰 국가(미국·일본·유럽). 1주 1.5~5만 원.' },
      { q: '짐 무게 초과?', a: '항공사 카운터에서 추가 요금. LCC는 비쌈(kg당 1~3만 원). 무게 측정 필수.' },
      { q: '입국심사 영어?', a: '주요 공항 영어 OK. 미리 답변 준비 — "관광/3박/호텔 OO".' },
    ]},

    { type: 'sources', items: [
      { label: '외교부 해외안전여행', url: 'https://www.0404.go.kr/', org: '외교부', accessedAt: '2026-04-25' },
      { label: '외교부 여권과', url: 'https://www.passport.go.kr/', org: '외교부', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
