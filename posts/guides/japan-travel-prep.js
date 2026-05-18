module.exports = {
  sections: [
    {
      type: 'intro',
      html: `<p>많은 분이 일본 여행 하면 "비행 두 시간이면 도착하니 준비할 게 별로 없다"고 생각하지만, 실제로는 정반대입니다. 일본은 교통 체계가 워낙 촘촘하고 결제·예약 방식이 한국과 달라서, 준비 없이 도착하면 첫날 역 개찰구 앞에서 30분을 허비하기 쉽습니다.</p><p>특히 신칸센·지하철·버스가 각각 다른 패스로 묶여 있고, IC카드와 모바일 결제, 현금 문화가 한 도시 안에서 뒤섞여 있습니다. 환전 시점을 잘못 잡으면 같은 금액으로도 며칠치 식비가 차이 나고, 핵심 앱 한두 개를 미리 깔지 않으면 길 찾기에서만 매일 1시간씩 새어 나갑니다.</p><p>처음 도쿄에 갔을 때 저는 공항에서 스이카(Suica)를 충전하는 줄을 못 찾아 헤맸고, 결국 첫 끼를 편의점 삼각김밥으로 때웠던 기억이 있습니다. 그때 이 글에 정리한 순서를 알았다면 그 시간과 비용을 통째로 아꼈을 겁니다.</p><p>이 글에서는 일본 여행을 떠나기 전 반드시 끝내야 할 준비를 출국 3주 전부터 시간 순으로 정리합니다. 교통패스 선택 기준, IC카드 스이카 발급·충전, 환전 타이밍, 필수 앱 세팅, 그리고 한국인이 자주 하는 실수까지 단계별로 다룹니다.</p>`
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1709455905432-b73f6ae077a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MzcyMjZ8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMHNoaW5rYW5zZW4lMjB0cmFpbiUyMHRyYXZlbHxlbnwxfDB8fHwxNzc5MDU1NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&w=1200',
      alt: '산을 배경으로 달리는 일본 신칸센 열차',
      caption: '신칸센은 일본 도시 간 이동의 핵심이지만, 패스 선택에 따라 비용이 크게 갈립니다',
      imageSource: 'Unsplash',
      imageLicense: 'Unsplash License',
      imageCredit: 'Jiachen Lin on Unsplash',
      imageSourceUrl: 'https://unsplash.com/@jiachenlin?utm_source=travel.ambitstock&utm_medium=referral'
    },
    {
      type: 'h2',
      id: 'why-prep-matters',
      text: '왜 일본 여행은 준비가 절반인가요?'
    },
    {
      type: 'body',
      html: `<p>일본은 "가까운 나라"라는 인식 때문에 준비가 가장 가벼운 동시에 가장 자주 망치는 여행지입니다. 핵심은 세 가지 시스템이 한국과 다르다는 점입니다.</p><ul><li><strong>교통</strong>: JR·사철·지하철·버스 운영사가 모두 달라 패스가 분리돼 있습니다. "하나의 패스로 다 된다"는 건 일본에서는 사실이 아닙니다.</li><li><strong>결제</strong>: 대도시 관광지는 카드가 잘 되지만, 골목 식당·소도시·신사 입장료·코인로커는 여전히 현금 또는 IC카드 전용인 곳이 많습니다.</li><li><strong>예약</strong>: 인기 식당, 지브리·디즈니·USJ, 일부 신칸센 지정석은 사전 온라인 예약이 사실상 필수이며 현장 발권이 막혀 있는 경우가 늘고 있습니다.</li></ul><p>현지에서 만난 한 가이드는 "한국인 여행자는 도착 후 1~2시간을 교통카드와 길 찾기에 쓰는데, 그 시간만 줄여도 하루 일정이 한 곳 더 들어간다"고 했습니다. 준비의 목적은 거창한 게 아니라 바로 이 낭비 시간을 0으로 만드는 것입니다.</p>`
    },
    {
      type: 'h2',
      id: 'prep-timeline',
      text: '출국 전 준비, 이 순서대로 하세요'
    },
    {
      type: 'body',
      html: `<p>준비는 "한 번에 몰아서"보다 시점을 나눠 진행하는 편이 비용·스트레스 모두 유리합니다. 아래는 3주 전부터의 표준 순서입니다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">시점</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">할 일</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">이유</th></tr></thead><tbody><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">출발 3주 전</td><td style="padding:8px 10px;border:1px solid #CBD5E1">여권 잔여기간 6개월 확인, 항공·숙소 확정</td><td style="padding:8px 10px;border:1px solid #CBD5E1">잔여기간 부족 시 재발급에 2주 이상 소요</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">출발 2주 전</td><td style="padding:8px 10px;border:1px solid #CBD5E1">교통패스 필요 여부 판단·예약, 인기 식당/테마파크 예약</td><td style="padding:8px 10px;border:1px solid #CBD5E1">JR패스·USJ 등은 조기 마감·가격 변동</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">출발 1주 전</td><td style="padding:8px 10px;border:1px solid #CBD5E1">환율 모니터링·분할 환전, 해외 데이터(eSIM/로밍) 선택</td><td style="padding:8px 10px;border:1px solid #CBD5E1">환율은 단기 변동성이 커 분할이 안전</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">출발 2~3일 전</td><td style="padding:8px 10px;border:1px solid #CBD5E1">필수 앱 설치·로그인, 모바일 스이카 등록</td><td style="padding:8px 10px;border:1px solid #CBD5E1">현지 도착 후 설치하면 인증·결제가 번거로움</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">전날</td><td style="padding:8px 10px;border:1px solid #CBD5E1">Visit Japan Web 사전 등록, 짐 무게 점검</td><td style="padding:8px 10px;border:1px solid #CBD5E1">입국 심사·세관 신고 QR을 미리 생성</td></tr></tbody></table><p>입국 절차의 경우 일본 정부가 운영하는 Visit Japan Web에서 입국 심사·세관 신고를 사전 등록하면 공항에서 QR 제시만으로 통과할 수 있어 시간이 크게 줄어듭니다.</p>`
    },
    {
      type: 'h2',
      id: 'transport-pass-choice',
      text: 'JR패스 vs IC카드, 뭐가 더 나을까요?'
    },
    {
      type: 'body',
      html: `<p>일본 교통 준비에서 가장 많은 분이 헷갈리는 지점입니다. 결론부터 말하면 <strong>이동 거리가 길면 JR패스, 한 도시 위주면 IC카드</strong>가 기본 공식입니다.</p><ul><li><strong>전국형 JR패스</strong>: 도쿄–오사카–교토처럼 도시 간 신칸센 장거리 이동이 잦을 때 유리합니다. 2023년 이후 가격이 크게 인상돼, 왕복+α 정도로는 본전을 못 뽑는 경우가 늘었으니 실제 노선을 계산해 보고 결정해야 합니다.</li><li><strong>지역 한정 패스</strong>: 간사이(오사카·교토·나라), 후쿠오카 등 한 권역만 도는 일정이면 지역 패스가 전국 패스보다 훨씬 저렴합니다.</li><li><strong>IC카드(스이카·파스모·이코카)</strong>: 도쿄·오사카 한 도시 안에서 지하철·버스·편의점 결제만 한다면 패스 없이 IC카드 충전식이 가장 단순하고 경제적입니다.</li></ul><p>처음에는 "이왕이면 전국 패스 끊으면 마음 편하지" 싶었는데, 도쿄에서 4박 하고 근교만 다녀온 일정이었던 저에게는 오히려 손해였습니다. 노선을 종이에 적어 운임을 합산해 보니 IC카드 충전이 절반 가까이 쌌습니다. 패스는 "안심"이 아니라 "계산"으로 결정하는 것이 맞습니다.</p>`
    },
    {
      type: 'h3',
      id: 'suica-howto',
      text: 'IC카드 스이카, 발급과 충전'
    },
    {
      type: 'body',
      html: `<p>스이카(Suica)는 일본 수도권을 중심으로 전국 대부분 교통·편의점에서 통용되는 선불 IC카드입니다. 발급 방법은 세 가지입니다.</p><ul><li><strong>모바일 스이카(추천)</strong>: 아이폰은 지갑(Wallet) 앱, 안드로이드는 별도 앱에서 카드 발급 후 신용카드로 충전합니다. 실물 카드 수령 줄을 설 필요가 없어 도착 즉시 개찰구를 통과할 수 있습니다.</li><li><strong>공항·역 발매기</strong>: 하네다·나리타·간사이 공항 도착 로비나 주요 역 발매기에서 현금으로 발급·충전합니다. 한국어 메뉴를 지원하는 기기가 많습니다.</li><li><strong>웰컴 스이카 등 단기용</strong>: 보증금 없이 며칠만 쓰는 여행자용 카드도 있으나 환불 조건이 다르니 사용 기간을 보고 선택합니다.</li></ul><p>충전은 역 발매기·편의점·모바일 앱에서 가능합니다. 한 가지 팁은, 도착 첫날 공항에서 한 번에 너무 많이 충전하지 말고 일정 절반쯤 쓸 금액만 넣는 것입니다. 잔액 환불은 절차가 번거롭고 수수료가 붙는 경우가 있어, 남기지 않는 편이 깔끔합니다.</p>`
    },
    {
      type: 'h2',
      id: 'budget-table',
      text: '일본 여행 예산, 현실적으로 얼마 드나요?'
    },
    {
      type: 'body',
      html: `<p>아래는 도쿄 3박 4일 기준의 1인 예산 예시입니다. 환율과 시즌에 따라 변동되며, 항공권은 별도입니다. 환율은 변동성이 크므로 출발 직전 한국은행·은행 고시환율을 기준으로 재확인하세요.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">항목</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">알뜰형</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">표준형</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">여유형</th></tr></thead><tbody><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">숙박(3박)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 18만 원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 36만 원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 75만 원 이상</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">식비(4일)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 12만 원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 20만 원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 35만 원</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">교통(IC카드)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 4만 원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 6만 원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 9만 원</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">입장·체험</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 3만 원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 8만 원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 18만 원</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">데이터(eSIM)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 1만 원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 2만 원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 3만 원</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1"><strong>합계(항공 제외)</strong></td><td style="padding:8px 10px;border:1px solid #CBD5E1"><strong>약 38만 원</strong></td><td style="padding:8px 10px;border:1px solid #CBD5E1"><strong>약 72만 원</strong></td><td style="padding:8px 10px;border:1px solid #CBD5E1"><strong>약 140만 원</strong></td></tr></tbody></table><p>가장 변동이 큰 항목은 숙박과 환율입니다. 같은 호텔이라도 평일·주말, 성수기 여부에 따라 두 배 차이가 나니, 일정이 유연하다면 평일을 끼우는 것만으로도 알뜰형에 가까워집니다.</p>`
    },
    {
      type: 'h3',
      id: 'exchange-timing',
      text: '환전, 언제 어떻게 해야 손해를 줄이나요?'
    },
    {
      type: 'body',
      html: `<p>엔화 환율은 단기 변동성이 크므로 "한 번에 전액"보다 <strong>분할 환전</strong>이 안전합니다. 출발 2~3주 전부터 며칠 간격으로 나눠 사면 특정 시점 고점에 전액을 사는 위험을 줄일 수 있습니다.</p><ul><li><strong>주거래은행 환율우대</strong>: 모바일 앱 환전 시 우대율이 높은 편이며, 공항 수령도 가능합니다.</li><li><strong>현금 vs 카드</strong>: 골목 식당·신사·코인로커용 소액 현금은 필수, 나머지는 해외결제 수수료가 낮은 카드를 병행하면 환전액을 줄일 수 있습니다.</li><li><strong>공항 환전소</strong>: 우대율이 가장 낮은 편이라 비상용 소액만 권장합니다.</li></ul><p>환율 비교 시에는 한국은행 경제통계시스템(ECOS) 또는 거래 은행의 당일 고시환율을 기준점으로 잡으세요. 포털 환율은 참고용이며 실제 적용 환율과 차이가 납니다.</p>`
    },
    {
      type: 'h2',
      id: 'essential-apps',
      text: '현지에서 매일 쓰는 필수 앱 세팅'
    },
    {
      type: 'body',
      html: `<p>앱은 반드시 <strong>출국 전 한국에서 설치·로그인</strong>까지 끝내야 합니다. 현지에서 가입하면 인증 문자·결제 등록이 막혀 시간을 버립니다.</p><ul><li><strong>구글 지도</strong>: 일본 대중교통 길찾기가 매우 정확합니다. 환승 플랫폼·요금·소요 시간까지 표시되니 사실상 1순위입니다.</li><li><strong>네이버 지도/대중교통 앱 병행</strong>: 한국어 검색이 익숙하다면 보조로 함께 켜두면 비교가 됩니다.</li><li><strong>번역 앱</strong>: 카메라 번역으로 메뉴판·표지판을 즉시 읽을 수 있어 골목 식당 진입 장벽이 사라집니다.</li><li><strong>지갑(Wallet)/모바일 스이카</strong>: IC카드를 폰에 등록해 두면 개찰구를 폰 터치로 통과합니다.</li><li><strong>Visit Japan Web</strong>: 입국 심사·세관 QR을 출발 전 생성해 둡니다.</li></ul><p>현지인 친구가 알려준 작은 팁이 하나 있는데, 구글 지도에서 출발·도착을 찍은 뒤 "출발 시각"을 실제 탈 시간으로 맞춰 검색하면 운행 종료된 노선을 잘못 타는 실수를 막을 수 있다는 것이었습니다. 막차 시간이 한국보다 이른 노선이 많아 특히 유용합니다.</p>`
    },
    {
      type: 'gallery',
      images: [
        { url: 'https://images.unsplash.com/photo-1618153231956-df23dcb21c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MzcyMjZ8MHwxfHNlYXJjaHwyfHxqYXBhbiUyMHNoaW5rYW5zZW4lMjB0cmFpbiUyMHRyYXZlbHxlbnwxfDB8fHwxNzc5MDU1NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&w=1200', caption: '플랫폼에 정차한 신칸센 — 지정석은 사전 예약이 안전합니다' },
        { url: 'https://images.unsplash.com/photo-1577153611784-75404efe929e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MzcyMjZ8MHwxfHNlYXJjaHwzfHxqYXBhbiUyMHNoaW5rYW5zZW4lMjB0cmFpbiUyMHRyYXZlbHxlbnwxfDB8fHwxNzc5MDU1NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&w=1200', caption: '낮 시간의 일본 기차역 — 막차 시간을 항상 미리 확인하세요' }
      ],
      imageSource: 'Unsplash',
      imageLicense: 'Unsplash License',
      imageCredit: 'Photographers on Unsplash',
      imageSourceUrl: 'https://unsplash.com/?utm_source=travel.ambitstock&utm_medium=referral'
    },
    {
      type: 'h2',
      id: 'common-mistakes',
      text: '한국인이 일본 여행에서 자주 하는 실수'
    },
    {
      type: 'body',
      html: `<ul><li><strong>전국 JR패스 무조건 구매</strong>: 한 도시 위주 일정인데 비싼 전국 패스를 끊어 손해 보는 경우가 가장 흔합니다. 노선 운임을 합산해 비교한 뒤 결정하세요.</li><li><strong>현금 0원 입국</strong>: 카드만 믿고 갔다가 소도시·신사·코인로커에서 막힙니다. 소액 현금은 반드시 준비합니다.</li><li><strong>IC카드 과충전</strong>: 잔액 환불이 번거로워 결국 못 쓰고 옵니다. 절반씩 나눠 충전하세요.</li><li><strong>막차 시간 무시</strong>: 한국보다 이른 노선이 많아 자정 전에 끊깁니다. 야간 일정은 막차를 먼저 확인합니다.</li><li><strong>인기 식당·테마파크 무예약</strong>: 현장 발권이 막힌 곳이 늘었습니다. 가고 싶은 곳은 2주 전 예약을 권합니다.</li><li><strong>Visit Japan Web 미등록</strong>: 입국장에서 줄을 더 서게 됩니다. 전날 QR을 만들어 두세요.</li></ul>`
    },
    {
      type: 'h2',
      id: 'final-checklist',
      text: '출국 전 마지막 체크리스트'
    },
    {
      type: 'body',
      html: `<ul><li>여권 잔여기간 6개월 이상 확인</li><li>항공·숙소 예약 확정 및 바우처 캡처 저장</li><li>교통패스 vs IC카드 운임 비교 후 결정</li><li>모바일 스이카 등록 또는 공항 발급 동선 확인</li><li>분할 환전 완료(소액 현금 + 해외결제 카드)</li><li>구글 지도·번역·Visit Japan Web 설치·로그인</li><li>해외 데이터(eSIM/로밍) 개통 예약</li><li>여행자보험 가입 및 외교부 여행경보 확인</li></ul>`
    },
    {
      type: 'faq',
      items: [
        { q: 'JR패스는 무조건 사는 게 이득인가요?', a: '아닙니다. 2023년 이후 가격이 크게 올라 도시 간 장거리 이동이 잦지 않으면 IC카드 충전이 더 저렴한 경우가 많습니다. 실제 탈 노선의 운임을 합산해 비교한 뒤 결정하는 것이 안전합니다.' },
        { q: '일본은 카드만 있으면 현금이 필요 없나요?', a: '대도시 관광지는 카드 사용이 늘었지만, 골목 식당·소도시·신사 입장료·코인로커는 여전히 현금 또는 IC카드 전용인 곳이 많습니다. 소액 현금은 준비하는 편이 좋습니다.' },
        { q: '스이카는 한국에서 미리 만들 수 있나요?', a: '아이폰 지갑 앱이나 안드로이드 전용 앱을 통해 출국 전 모바일 스이카를 발급·충전할 수 있습니다. 실물 카드 수령 줄을 설 필요가 없어 도착 즉시 개찰구를 통과할 수 있습니다.' },
        { q: '환전은 언제 하는 게 가장 유리한가요?', a: '엔화 환율은 단기 변동성이 커 정확한 최적 시점을 예측하기 어렵습니다. 출발 2~3주 전부터 며칠 간격으로 나눠 사는 분할 환전이 고점 일괄 매수 위험을 줄이는 현실적인 방법입니다.' },
        { q: 'Visit Japan Web은 꼭 해야 하나요?', a: '의무는 아니지만 입국 심사·세관 신고 QR을 사전 생성해 두면 공항 대기 시간이 크게 줄어듭니다. 출발 전날 등록을 권장합니다.' }
      ]
    },
    {
      type: 'callout',
      html: `<p><strong>편집자 한마디</strong> — 일본 여행은 "준비할 게 없는 나라"가 아니라 "준비가 티 나는 나라"입니다. 처음 갔을 때 저는 공항에서 헤매며 첫 끼를 편의점으로 때웠지만, 두 번째부터는 이 순서대로 준비해 도착 30분 만에 첫 식당에 앉을 수 있었습니다. 거창한 정보보다 출국 전 한 시간의 세팅이 현지에서의 하루를 통째로 바꿉니다.</p>`
    },
    {
      type: 'warning',
      title: '주의',
      html: `<p>비자·입국 규정과 여행경보는 수시로 바뀝니다. 출발 전 반드시 외교부 해외안전여행(0404.go.kr)에서 최신 입국 요건과 여행경보 단계를 확인하고, 여행자보험 가입을 권장합니다. 본 글의 가격·환율·패스 정보는 작성 시점 기준이며 실제와 다를 수 있습니다.</p>`
    },
    {
      type: 'sources',
      items: [
        { label: '해외안전여행 — 일본 안전정보·입국 요건', url: 'https://www.0404.go.kr', org: '외교부', accessedAt: '2026-05-17' },
        { label: 'Visit Japan Web — 입국 절차 사전 등록', url: 'https://www.vjw.digital.go.jp', org: '일본 디지털청', accessedAt: '2026-05-17' },
        { label: '경제통계시스템 ECOS — 원/엔 환율', url: 'https://ecos.bok.or.kr', org: '한국은행', accessedAt: '2026-05-17' },
        { label: '일본 여행 기본정보', url: 'https://www.welcometojapan.or.kr', org: '일본정부관광국(JNTO)', accessedAt: '2026-05-17' }
      ]
    },
    {
      type: 'disclaimer'
    }
  ]
}