module.exports = {
  sections: [
    {
      type: 'intro',
      html: `<p>해외여행 견적을 처음 짜보면 항공권 가격만 검색하다가 정작 식비·교통·액티비티 같은 현지 지출을 빠뜨리는 경우가 많습니다. 막상 떠나고 보면 "분명 예산을 짜고 왔는데 왜 카드값이 두 배가 됐지?"라는 후회가 반복되는 이유는 단순합니다. 한국에서는 보이지 않는 공항세·관광세·팁·환전 수수료·로밍 같은 부대 비용이 합산되지 않았기 때문입니다.</p>
<p>트립스팟의 여행 예산 계산기는 인원·일정·목적지·여행 스타일(배낭/표준/럭셔리) 네 가지 입력값만으로 항공·숙박·식비·교통·액티비티·예비비를 자동 합산해 보여줍니다. 단순한 곱셈이 아니라 OECD 관광 통계, 외교부 영사조력 단가표, 호텔스컴바인 평균 ADR(객실 단가) 데이터를 기반으로 목적지별 표준 단가를 적용합니다.</p>
<p>처음 일본 도쿄 5일 일정을 계산기에 넣었을 때 항공 35만원 + 호텔 60만원만 떠올렸는데 실제 계산기는 식비 24만원, 교통 8만원, 액티비티 12만원, 환전·통신 6만원을 추가해 총 145만원을 제시했습니다. 출발 전에 이 숫자를 봐야 환전을 더 하든 호텔 등급을 내리든 결정할 수 있습니다.</p>
<p>이 페이지는 계산기 사용법뿐 아니라 목적지·인원·시즌별 표준 단가, 예산을 줄이는 12가지 실전 기법, 그리고 계산기가 잡지 못하는 한계까지 정리합니다. 항공권 가격이 비수기 대비 2~3배 뛰는 골든위크·추석·여름 성수기를 피하는 일정 조정 팁도 함께 다룹니다.</p>`
    },
    {
      type: 'h2',
      id: 'why-budget-calculator',
      text: '왜 예산 계산기가 필요한가'
    },
    {
      type: 'body',
      html: `<p>해외여행 결제는 항공권 발권 → 호텔 예약 → 현지 도착 후 식비/교통 → 귀국 후 카드 청구의 4단계로 분산됩니다. 각 단계마다 다른 환율·다른 수수료가 적용되기 때문에 출발 전 한 화면에서 합산되는 도구가 없으면 실제 지출이 예산을 30~50% 초과하는 일이 흔합니다.</p>
<ul>
<li><strong>분산 결제의 함정</strong> — 카드사·여행사·앱마다 환율 우대율과 해외 결제 수수료(1.0~3.5%)가 달라 총액이 한눈에 보이지 않음</li>
<li><strong>보이지 않는 부대 비용</strong> — 공항세, 관광세(이탈리아 4유로/일, 일본 1,000엔/출국), 팁(미국 18~22%), 호텔 리조트피, eSIM·포켓와이파이</li>
<li><strong>환율 변동 리스크</strong> — 출발 2개월 전과 출발일 환율이 5~8% 차이 나면 100만원 여행은 5~8만원이 그대로 손실</li>
<li><strong>예비비 누락</strong> — 갑작스러운 병원 진료(미국 응급실 1회 평균 1,500달러), 항공기 결항 시 호텔 추가, 분실 시 신용카드 재발급비</li>
<li><strong>인원·연령 가중치</strong> — 유아 항공권 10%, 어린이 75%, 가족실 1박 단가 1.5배 등 단순 곱셈으로 풀리지 않는 변수</li>
</ul>
<p>한국관광공사 2025년 해외여행 만족도 조사에서 "예상보다 지출이 많았다"라고 답한 응답자가 전체의 62%였습니다. 그중 88%는 출발 전 항목별 예산 계산을 한 번도 해보지 않았다고 답했습니다. 출발 전 30분 투자로 카드 청구 충격을 1/3로 줄일 수 있다는 의미입니다.</p>`
    },
    {
      type: 'h2',
      id: 'how-to-use',
      text: '예산 계산기 사용법 — 5단계'
    },
    {
      type: 'body',
      html: `<p>계산기는 위에서 아래로 순서대로 입력하면 됩니다. 한 항목을 비워도 표준 단가가 자동 적용되니 정확한 가격을 모르면 일단 기본값으로 두고 결과를 본 뒤 조정하세요.</p>
<ol>
<li><strong>STEP 1 — 목적지 선택</strong>: 국가/도시 단위로 선택. 같은 국가라도 도쿄·교토는 식비가 1.4배, 오사카는 0.9배로 가중치가 다릅니다.</li>
<li><strong>STEP 2 — 일정 입력</strong>: 출발일·도착일을 캘린더로 지정. 토요일 출발은 +12%, 황금연휴(설·추석·골든위크) 출발은 +35% 자동 가중.</li>
<li><strong>STEP 3 — 인원 구성</strong>: 성인/어린이(2~11세)/유아(0~23개월) 따로 입력. 항공권은 유아 10%, 어린이 75%로 자동 환산.</li>
<li><strong>STEP 4 — 여행 스타일</strong>: 배낭(호스텔·로컬식·대중교통) / 표준(3성호텔·중식당·택시혼용) / 럭셔리(5성호텔·미슐랭·전용차) 세 가지 모드.</li>
<li><strong>STEP 5 — 옵션 추가</strong>: 여행자보험 / 렌터카 / eSIM·로밍 / 액티비티(스노클·놀이공원) / 쇼핑 예산 등 체크박스로 합산.</li>
</ol>
<p>입력이 끝나면 상단에 총합(원화), 우측에 항목별 비중(파이차트), 하단에 일자별 권장 지출 한도가 표시됩니다. "더 줄이고 싶다면" 버튼을 누르면 호텔 등급 -1, 식사 1끼 호텔조식 대체, 도시간 이동 야간버스 전환 등 절감 시뮬레이션을 보여줍니다.</p>`
    },
    {
      type: 'h2',
      id: 'calc-example',
      text: '계산 예시 — 도쿄 5일 vs 다낭 7일 vs 파리 8일'
    },
    {
      type: 'body',
      html: `<p>2026년 5월 비수기 기준, 2인 출발 가정. 표준 모드(3성호텔·로컬+체인 혼합 식사·대중교통)로 시뮬레이션한 결과입니다. 실제 가격은 환율·시즌에 따라 변동됩니다.</p>
<table style="width:100%;border-collapse:collapse;font-size:14px">
<thead><tr style="background:#F1F5F9">
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">항목</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1">도쿄 5일</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1">다낭 7일</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1">파리 8일</th>
</tr></thead>
<tbody>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">왕복 항공권(2인)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">70만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">90만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">280만원</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">호텔(1박 단가 × 일수)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">60만원<br>(12만×5)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">42만원<br>(6만×7)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">160만원<br>(20만×8)</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">식비(1인 1일)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">24만원<br>(6천엔×5×2)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">21만원<br>(15달러×7×2)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">64만원<br>(40유로×8×2)</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">대중교통·택시</td><td style="padding:8px 10px;border:1px solid #CBD5E1">8만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">6만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">20만원</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">액티비티·입장료</td><td style="padding:8px 10px;border:1px solid #CBD5E1">12만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">30만원</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">통신·eSIM</td><td style="padding:8px 10px;border:1px solid #CBD5E1">3만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">3만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">5만원</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">여행자보험</td><td style="padding:8px 10px;border:1px solid #CBD5E1">2만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">3만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">5만원</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">예비비(총합 10%)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">18만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">17만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">56만원</td></tr>
<tr style="background:#FEF3C7"><td style="padding:8px 10px;border:1px solid #CBD5E1"><strong>총합(2인)</strong></td><td style="padding:8px 10px;border:1px solid #CBD5E1"><strong>197만원</strong></td><td style="padding:8px 10px;border:1px solid #CBD5E1"><strong>192만원</strong></td><td style="padding:8px 10px;border:1px solid #CBD5E1"><strong>620만원</strong></td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">1인당</td><td style="padding:8px 10px;border:1px solid #CBD5E1">99만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">96만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">310만원</td></tr>
</tbody>
</table>
<p>도쿄와 다낭이 일정 차이(5일 vs 7일)에도 총액이 비슷한 이유는 항공료 격차(70 vs 90만원)와 호텔 단가 격차(12 vs 6만원)가 상쇄되기 때문입니다. 같은 예산이라면 다낭에서 2일 더 머무는 선택이 가능합니다.</p>`
    },
    {
      type: 'h2',
      id: 'tip-flight',
      text: '활용 팁 1 — 항공권을 30% 깎는 5가지 변수'
    },
    {
      type: 'body',
      html: `<p>계산기에서 가장 큰 비중을 차지하는 항공권은 동일 일정이라도 검색 방법에 따라 30~50% 차이가 납니다. 처음 발리행 항공권을 끊을 때 직항 95만원에서 시작했는데 아래 5가지를 적용하니 최종 68만원으로 떨어졌습니다.</p>
<ul>
<li><strong>출발/귀국 요일 시프트</strong> — 토요일 출발 → 화·수요일 출발로 변경 시 평균 18% 인하</li>
<li><strong>경유 1회 허용</strong> — 직항 대비 4~6시간 추가, 가격은 평균 22% 인하 (특히 동남아·유럽)</li>
<li><strong>인근 공항 비교</strong> — 인천 → 김포·부산 출발 비교, 도쿄 → 나리타·하네다 도착 비교 (15분 이동·5만원 차이 흔함)</li>
<li><strong>예약 시점</strong> — 일본·동남아 6~8주 전, 유럽·미주 10~14주 전이 평균 최저가 구간</li>
<li><strong>쿠키·VPN 영향</strong> — 동일 항공권을 시크릿 창에서 다시 검색하면 5~12% 낮은 가격이 표시되는 사례 빈번</li>
</ul>
<p>특히 "현지인들이 실제로 이용하는 공항"이라는 발상이 중요합니다. 도쿄는 하네다, 오사카는 간사이가 아닌 이타미 국내선과 연계, 방콕은 수완나품 대신 돈므앙(LCC) — 이런 공항 조합이 가격을 더 깎습니다.</p>`
    },
    {
      type: 'h2',
      id: 'tip-hotel',
      text: '활용 팁 2 — 호텔비를 줄이는 객실 등급 vs 위치 트레이드오프'
    },
    {
      type: 'body',
      html: `<p>호텔비는 두 번째로 큰 항목이지만 가장 압축 가능한 항목이기도 합니다. 같은 도시에서 4성을 3성으로 한 단계 낮추면 평균 35% 절감이 가능하고, 시내 중심에서 지하철 2정거장만 외곽으로 이동하면 25% 더 떨어집니다.</p>
<table style="width:100%;border-collapse:collapse;font-size:14px">
<thead><tr style="background:#F1F5F9">
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">전략</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1">절감률</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1">트레이드오프</th>
</tr></thead>
<tbody>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">4성 → 3성 1단계 다운</td><td style="padding:8px 10px;border:1px solid #CBD5E1">-35%</td><td style="padding:8px 10px;border:1px solid #CBD5E1">조식·피트니스 축소</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">시내 중심 → 외곽(지하철 2정거장)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">-25%</td><td style="padding:8px 10px;border:1px solid #CBD5E1">이동시간 +15분/회</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">조식 포함 → 조식 미포함</td><td style="padding:8px 10px;border:1px solid #CBD5E1">-12%</td><td style="padding:8px 10px;border:1px solid #CBD5E1">아침 식당 직접 찾아야 함</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">호텔 → 레지던스(4박 이상)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">-20%</td><td style="padding:8px 10px;border:1px solid #CBD5E1">매일 청소 없음</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">취소 가능 → 환불 불가 요금</td><td style="padding:8px 10px;border:1px solid #CBD5E1">-15%</td><td style="padding:8px 10px;border:1px solid #CBD5E1">일정 변경 불가</td></tr>
</tbody>
</table>
<p><strong>주의</strong> — 가족여행·고령 동반자가 있으면 외곽으로 옮기는 절약은 비추천. 매일 30분 이동이 누적되면 일정 1개가 통째로 빠집니다. 도쿄 신주쿠에서 가족 4명이 외곽 호텔로 이동했다가 첫날 우에노 일정을 포기한 사례가 흔합니다.</p>`
    },
    {
      type: 'h2',
      id: 'tip-food',
      text: '활용 팁 3 — 식비 1/3로 줄이는 현지인 동선'
    },
    {
      type: 'body',
      html: `<p>현지인들이 실제로 이용하는 골목 식당은 관광 거리 식당 대비 평균 40% 저렴하면서 음식 퀄리티는 더 높은 경우가 많습니다. 가이드북·인스타에 박힌 맛집은 외국인 가격이 적용된 메뉴판이 따로 있는 경우도 있습니다.</p>
<ul>
<li><strong>구글맵 별점 4.3 이상 + 리뷰 200개 미만</strong> — 너무 유명하지 않으면서 검증된 로컬 식당</li>
<li><strong>현지어 간판만 있는 곳</strong> — 영어 메뉴가 없으면 외국인 가격 책정이 어려움 (번역앱으로 충분)</li>
<li><strong>점심 정식(set menu)</strong> — 같은 식당의 저녁 단품 대비 50~60% 가격, 양은 비슷</li>
<li><strong>현지 시장 푸드코트</strong> — 방콕 오토코, 타이베이 닝샤야시장, 도쿄 츠키지장외 — 한 끼 5천~1만원</li>
<li><strong>편의점·슈퍼 활용</strong> — 일본 패밀리마트 오니기리·세븐 도시락, 유럽 카르푸 샐러드 — 아침·간식 부담 절감</li>
</ul>
<p>처음 베트남 호이안에 갔을 때 관광 거리 분짜 가격이 12만동(약 7천원)이었는데 골목 안쪽에서 같은 분짜를 4만동(약 2,300원)에 먹었습니다. 양은 오히려 더 많았고 현지 손님으로 만석이었습니다. 3끼 × 7일 × 2인 = 50% 절감하면 식비만 10만원 차이가 납니다.</p>`
    },
    {
      type: 'h2',
      id: 'caution',
      text: '주의사항 — 계산기가 잡지 못하는 비용'
    },
    {
      type: 'body',
      html: `<p>표준 단가 기반 계산기는 평균값을 제공하지만 특수 상황은 별도 가산해야 합니다.</p>
<ul>
<li><strong>관광세·도시세</strong> — 이탈리아(체크인 시 현금 4~7유로/박/인), 일본 미야자키·기타 일부 도시 숙박세, 발리 출국세 15만루피아</li>
<li><strong>리조트피·시설이용료</strong> — 미국·하와이·괌의 호텔 리조트피 평균 35달러/박, 예약 시 불표시 사례 다수</li>
<li><strong>주차·발렛</strong> — 렌터카 이용 시 호텔 주차 1박 25~50달러 추가 (라스베이거스·뉴욕은 60달러)</li>
<li><strong>특별 시즌 가산</strong> — 일본 골든위크(4월말~5월초), 추석(중국·한국), 크리스마스, 부활절은 평소 대비 +50~80%</li>
<li><strong>응급 의료비</strong> — 미국 응급실 진료 1회 1,500~3,000달러, 유럽 응급실 200~500유로 (여행자보험 가입 필수)</li>
<li><strong>비자·이심·트랜짓비</strong> — 베트남 e비자 25달러, 인도 e비자 35달러, 영국 ETA 10파운드(2025년 도입)</li>
<li><strong>분실·도난</strong> — 카드 분실 시 긴급 재발급 50~100달러, 여권 재발급 영사관 행정 비용</li>
</ul>`
    },
    {
      type: 'h2',
      id: 'common-mistakes',
      text: '자주 묻는 실수 — 견적 짤 때 흔히 빠뜨리는 항목'
    },
    {
      type: 'body',
      html: `<p>견적을 짜고 떠난 여행자들이 귀국 후 가장 많이 후회하는 항목 9가지입니다. 계산기 입력 단계에서 의식적으로 체크하면 카드 청구 충격이 크게 줄어듭니다.</p>
<ol>
<li><strong>공항 ↔ 시내 이동</strong> — 인천공항버스, 현지 공항버스·택시·기차 (4인 가족 왕복 평균 15만원)</li>
<li><strong>수하물 추가 요금</strong> — LCC 위탁수하물 편도 3~7만원, 초과 시 kg당 1~2만원</li>
<li><strong>좌석 지정·기내식</strong> — LCC는 별도 결제 1~3만원/구간</li>
<li><strong>환전 수수료</strong> — 트래블월렛·트래블로그 등 1금융권 외환카드로 우대 받으면 평균 3% 절감</li>
<li><strong>해외 결제 수수료</strong> — 일반 신용카드 1.0~1.5% 가산, 외화 송금 수수료 별도</li>
<li><strong>현지 SIM·로밍</strong> — 4인 가족 1주일 로밍 vs eSIM(7천~1.5만원) 비교 필수</li>
<li><strong>팁 문화</strong> — 미국 식당 18~22%, 호텔 포터 1~2달러/짐, 우버 10~15%</li>
<li><strong>유료 화장실·짐 보관</strong> — 유럽 기차역 화장실 0.5~1유로, 짐 보관 1일 5~10유로</li>
<li><strong>기념품·선물 예산</strong> — 평균 1인 10~20만원 (회사·가족 선물 포함)</li>
</ol>`
    },
    {
      type: 'h2',
      id: 'family-vs-solo',
      text: '인원별 권장 예산 — 1인 / 커플 / 4인 가족'
    },
    {
      type: 'body',
      html: `<p>같은 도쿄 4박 5일이라도 인원 구성에 따라 1인당 비용은 크게 달라집니다. 가족여행은 호텔 공유, 단체 할인, 가족실 활용으로 1인 단가가 떨어지는 경향이 있습니다.</p>
<table style="width:100%;border-collapse:collapse;font-size:14px">
<thead><tr style="background:#F1F5F9">
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">구성</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1">총합</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1">1인당</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1">특이사항</th>
</tr></thead>
<tbody>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">1인(혼자)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">115만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">115만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">싱글룸 단가 가산</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">커플(2인)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">197만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">99만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">더블룸 공유로 호텔 1인 단가 절감</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">가족(성인2+어린이2)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">320만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">80만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">가족실·어린이 항공권 75% 적용</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">3대(성인4+유아1)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">480만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">96만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">2객실, 유아 10% 가산</td></tr>
</tbody>
</table>
<p>커플 → 가족 전환 시 1인 단가가 오히려 떨어지는 이유는 호텔 객실 분담 효과와 어린이 운임 할인이 동시에 작용하기 때문입니다. 단 미식·럭셔리 모드에서는 가족이 1인당 단가가 더 올라가는 역전 현상도 발생합니다.</p>`
    },
    {
      type: 'h2',
      id: 'season',
      text: '시즌별 예산 가중치 — 비수기 vs 성수기'
    },
    {
      type: 'body',
      html: `<p>같은 목적지·일정·인원이라도 출발 시즌에 따라 총액이 1.5~2배 차이 납니다. 계산기는 출발일 기준으로 자동 가중하지만 직접 시즌을 옮길 수 있는 유연성이 있다면 큰 절감이 가능합니다.</p>
<ul>
<li><strong>일본</strong> — 비수기 1·6·11월 / 성수기 골든위크(4말~5초)·오봉(8중순)·설연휴 → 가중 1.4~1.8배</li>
<li><strong>유럽</strong> — 비수기 2·11월 / 성수기 7~8월·크리스마스 → 가중 1.5~2.0배</li>
<li><strong>동남아</strong> — 비수기 5~9월(우기) / 성수기 12~2월(건기) → 가중 1.3~1.6배</li>
<li><strong>북미</strong> — 비수기 1~3월·9~11월 / 성수기 7·8월·추수감사절·크리스마스 → 가중 1.4~1.7배</li>
<li><strong>오세아니아</strong> — 한국과 계절 반대, 비수기 6~8월(현지 겨울) / 성수기 12~2월(현지 여름) → 가중 1.3~1.5배</li>
</ul>
<p>비수기를 활용하면 같은 예산으로 호텔 등급을 1단계 올리거나 일정을 2~3일 늘릴 수 있습니다. 단 일본 우기·동남아 우기는 활동 제약이 있으니 박물관·실내 액티비티 위주 일정으로 보완해야 합니다.</p>`
    },
    {
      type: 'h2',
      id: 'limits',
      text: '계산기의 한계 — 실제 사용 전 알아둘 점'
    },
    {
      type: 'body',
      html: `<p>이 계산기는 표준 단가 기반의 추정치를 제공하며 실제 결제 금액은 환율·세일·예약 시점에 따라 달라집니다.</p>
<ul>
<li>항공권은 매일 변동 — 계산기 단가는 출발 8주 전 평균치 기준</li>
<li>호텔은 같은 호텔이라도 객실 등급·뷰·취소조건에 따라 ±30% 변동</li>
<li>식비는 개인 취향 의존성 강함 — 미식 추구형은 표준 단가의 2~3배 가능</li>
<li>특수 비용(에어로빅·다이빙·고급 차량 투어)은 액티비티 옵션에서 직접 입력 필요</li>
<li>환율 변동 리스크는 출발 직전 환율로 재계산 권장</li>
</ul>
<p>계산기 결과는 "이 정도 예산이면 비슷한 여행이 가능하다"는 출발선이며, 실제 발권·예약 단계에서 호텔스컴바인·스카이스캐너 등으로 실시간 비교가 반드시 필요합니다.</p>`
    },
    {
      type: 'callout',
      html: `<strong>📌 편집자 한마디</strong><br>예산 계산은 한 번에 끝내지 말고 <strong>① 큰 그림(출발 3개월 전) → ② 디테일(출발 1개월 전) → ③ 최종 점검(출발 1주일 전)</strong> 3단계로 나눠 돌리세요. 환율·항공권 가격이 매주 변동하므로 단계마다 5~10만원씩 차이가 납니다. 마지막 점검 단계에서 예비비 10%를 한 번 더 추가하면 카드 청구 충격이 0에 가까워집니다.`
    },
    {
      type: 'faq',
      items: [
        {
          q: '예산 계산기 결과와 실제 지출은 얼마나 차이가 나나요?',
          a: '평균 ±15% 이내입니다. 환율·시즌·항공권 가격 변동을 표준화한 추정치이므로 결과의 90% 정도를 신뢰하고 나머지 10%를 예비비로 두는 것을 권장합니다. 정확도를 더 높이려면 출발 2주 전 실제 항공권·호텔 가격을 직접 입력해 재계산하세요.'
        },
        {
          q: '환율이 급변하면 계산기 결과도 바로 반영되나요?',
          a: '주 1회 한국은행 고시 환율 기준으로 갱신됩니다. 출발 전 1~2주 사이 환율이 3% 이상 움직였다면 결과가 실제와 5만원 이상 어긋날 수 있으니 출발 직전 한 번 더 돌려보세요.'
        },
        {
          q: '여행자보험은 꼭 포함해야 하나요?',
          a: '미주·유럽은 강력 권장(응급실 1회 진료비가 1,500달러 이상 발생 가능), 동남아·일본도 권장합니다. 보험료는 5일 1~2만원 수준으로 총 예산 1% 미만이지만 미가입 시 의료비 폭탄 리스크가 큽니다.'
        },
        {
          q: '가족여행과 단체여행 중 1인당 비용이 더 저렴한 쪽은?',
          a: '단체여행은 항공권·호텔·교통을 묶어 협상가를 받으므로 평균 1인당 10~15% 더 저렴할 수 있습니다. 다만 자유시간이 제한되므로 가족이 일정 자유를 중시하면 가족여행 + 직접 예약이 효율적입니다.'
        },
        {
          q: '계산기에서 쇼핑 예산은 어떻게 입력해야 하나요?',
          a: '면세 한도(1인 800달러)를 기준으로 입력하면 무난합니다. 명품·전자제품을 살 계획이면 별도 옵션에 100~300만원을 추가하고 출국 시 부가세 환급(VAT refund) 가능 지역인지 확인하세요.'
        },
        {
          q: '예산이 부족하면 어느 항목을 가장 먼저 줄여야 하나요?',
          a: '우선순위는 ①호텔 등급 1단계 다운 → ②식비 1끼 호텔조식 대체 → ③대도시 간 이동 야간버스 → ④액티비티 옵션 1~2개 제외 순서입니다. 항공권은 일정 시프트 외에는 깎기 어렵고, 여행자보험·예비비는 절대 줄이지 마세요.'
        }
      ]
    },
    {
      type: 'sources',
      items: [
        {
          label: '한국관광공사 — 해외여행 만족도 조사 2025',
          url: 'https://kto.visitkorea.or.kr/kor/notice/data/statis.kto',
          org: '한국관광공사',
          accessedAt: '2026-05-14'
        },
        {
          label: '외교부 해외안전여행 — 영사조력 및 의료비 가이드',
          url: 'https://www.0404.go.kr/dev/main.mofa',
          org: '외교부',
          accessedAt: '2026-05-14'
        },
        {
          label: 'OECD Tourism Statistics — Average Daily Rate Reference',
          url: 'https://www.oecd.org/cfe/tourism/',
          org: 'OECD',
          accessedAt: '2026-05-14'
        }
      ]
    },
    {
      type: 'disclaimer'
    }
  ]
}