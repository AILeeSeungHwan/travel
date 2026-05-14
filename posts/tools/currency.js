module.exports = {
  sections: [
    { type: 'intro', html: `<p>처음 해외여행을 준비하면서 환율 계산기로 검색해보면 결과가 사이트마다 미묘하게 다른 걸 발견하게 됩니다. 어떤 곳은 매매기준율, 어떤 곳은 현찰 살 때, 또 다른 곳은 송금 보낼 때 환율을 보여주는데 같은 1달러라도 차이가 30원 이상 벌어지는 경우가 많습니다. 트립스팟 환율 계산기는 이 혼란을 정리하기 위해 한국은행이 운영하는 공식 통계 데이터베이스(ECOS, Economic Statistics System) API를 그대로 끌어와 일별 매매기준율을 기준값으로 제공합니다.</p>
<p>매매기준율은 외환은행 간 거래에서 형성되는 도매 가격으로, 우리가 실제 환전·카드 결제 때 적용받는 소매 가격이 아닙니다. 하지만 모든 환전 수수료의 기준점이 되기 때문에 "오늘 1달러는 시장에서 얼마인가"를 묻는다면 이 값이 정답에 가장 가깝습니다. 트립스팟은 매일 오전 한국은행 ECOS에서 직전 영업일 종가를 캐시한 뒤, KRW를 기준 통화로 두고 9개 인기 여행지 통화와의 환율을 계산해 보여줍니다.</p>
<p>이 도구는 단순히 숫자만 보여주는 데 그치지 않고, 환전 수수료가 추가되는 구조와 카드 결제·현금 환전·해외 ATM 출금별 실효 환율 차이를 함께 설명합니다. 일본 여행에서 100엔이 920원으로 표시되더라도, 명동 사설 환전소에서는 940원, 공항 환전소에서는 990원, 시중은행 영업점에서는 950원 안팎이 됩니다. 같은 통화·같은 날·같은 금액인데 마지막에 정산되는 금액은 천차만별이라는 뜻입니다.</p>
<p>이 페이지에서는 환율 계산기의 정확한 사용법, 자주 헷갈리는 환율 종류 차이, 통화별 계산 예시, 실전 절약 팁, 자주 발생하는 실수까지 한 번에 정리했습니다. 여행 출발 2주 전부터 출국 당일까지 두고두고 펼쳐볼 수 있도록 구성했으니, 필요한 섹션만 골라 읽어도 좋습니다.</p>` },

    { type: 'h2', id: 'why-needed', text: '환율 계산기가 왜 필요한가' },
    { type: 'body', html: `<p>여행 예산을 짤 때 "1박에 100달러짜리 호텔"이라는 정보만으로는 실제 한국 지갑에서 빠져나갈 금액을 가늠하기 어렵습니다. 환율은 매일 움직이고, 카드사 수수료·해외 결제 수수료·DCC(자국통화결제) 수수료까지 더해지면 동일 가격이 한국 카드에 청구될 때 95,000원이 될 수도, 152,000원이 될 수도 있습니다. 환율 계산기는 이 시작점, 즉 "오늘의 매매기준율"을 정확히 알려주는 도구입니다.</p>
<p>특히 동남아시아처럼 환율이 큰 단위로 표시되는 통화권(베트남 동, 인도네시아 루피아)에서는 0의 개수를 헷갈리기 쉽습니다. 베트남 쌀국수 한 그릇이 50,000 VND이라고 적혀 있을 때 이게 5만원인지 5천원인지 즉시 답할 수 있어야 음식점 계산서를 부담 없이 받을 수 있습니다. 계산기에 50,000 VND을 넣으면 약 2,700원 안팎으로 환산돼 나오니, 머릿속 단가표를 빠르게 갱신하는 데 도움이 됩니다.</p>
<p>또한 환율은 여행 시점을 정할 때 의외로 큰 변수입니다. 2024~2025년 사이 엔화가 100엔당 870원까지 떨어졌을 때 일본 여행 수요가 폭발했고, 같은 호텔이 한국인 입장에서는 30% 저렴해진 효과를 봤습니다. 환율 계산기로 출국 한 달 전부터 매일 환율을 체크하다 보면 자기만의 "이 가격이면 가도 좋다" 라인이 잡히게 됩니다.</p>` },

    { type: 'h2', id: 'ecos-api', text: '한국은행 ECOS API란 무엇인가' },
    { type: 'body', html: `<p>ECOS(Economic Statistics System)는 한국은행이 운영하는 경제통계시스템입니다. 환율뿐 아니라 기준금리, 통화량, 소비자물가지수, 국제수지 등 한국 경제 핵심 지표를 무료 API로 제공합니다. 환율 데이터는 매 영업일 오후 4시 30분 무렵 그날의 매매기준율·현찰사실때·현찰파실때·전신환매도·전신환매입율이 업데이트됩니다.</p>
<p>트립스팟은 ECOS API에서 일별 매매기준율(통계표 코드 731Y001)을 호출해 자체 서버에 캐시한 뒤, 사용자가 계산기를 호출할 때마다 캐시된 값으로 응답합니다. 즉, 같은 날 환율 변동이 일어나더라도 화면에 표시되는 기준값은 직전 영업일 종가 1회분이므로, 분 단위 트레이딩 용도로는 쓰지 마시고 여행 예산 추정·환전 기준 잡기 용도로만 활용해 주세요.</p>
<p>주말·공휴일에는 ECOS도 데이터를 업데이트하지 않습니다. 토요일·일요일에 계산기를 열면 직전 금요일 종가가 나옵니다. 명절 연휴 사이라면 며칠 전 데이터일 수도 있다는 점을 감안하세요.</p>` },

    { type: 'h2', id: 'how-to-use', text: '사용법 — 3단계 흐름' },
    { type: 'body', html: `<ol>
<li><strong>출발 통화 선택</strong> — 기본값은 KRW(원). 한국에서 출발하는 여행자는 그대로 두면 됩니다.</li>
<li><strong>도착 통화 선택</strong> — USD(미국 달러)·JPY(일본 엔)·EUR(유로)·CNY(중국 위안)·THB(태국 바트)·VND(베트남 동)·IDR(인도네시아 루피아)·SGD(싱가포르 달러)·HKD(홍콩 달러) 9개 통화 중 1개 선택.</li>
<li><strong>금액 입력 후 결과 확인</strong> — 입력란에 KRW 금액 또는 외화 금액을 넣으면 양방향 환산값이 즉시 표시됩니다. 결과 카드에는 매매기준율·캐시 기준 시각·환전 수수료 가정값(시중은행 평균)이 함께 표시됩니다.</li>
</ol>
<p>입력값은 자동으로 콤마 처리되며, 1조 원 단위까지 정상 계산됩니다. 음수·문자열·특수문자는 입력되지 않도록 마스킹되어 있습니다. 결과 카드 아래 "원화 환산표"를 펼치면 1·10·100·1,000·10,000 단위로 일괄 변환된 표가 나와 메뉴판·가격표 비교에 그대로 쓸 수 있습니다.</p>` },

    { type: 'h2', id: 'examples', text: '통화별 계산 예시 (2026-04-25 기준)' },
    { type: 'body', html: `<table style="width:100%;border-collapse:collapse;font-size:14px">
<thead><tr style="background:#F1F5F9">
<th style="padding:8px 10px;border:1px solid #CBD5E1">통화</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1">1단위 → 원</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1">10,000원 → 외화</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1">실생활 감각</th>
</tr></thead>
<tbody>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">USD (미국)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">1,378원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 7.26 달러</td><td style="padding:8px 10px;border:1px solid #CBD5E1">스타벅스 톨 라떼 ≒ 6달러</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">JPY (일본, 100엔)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">923원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 1,083 엔</td><td style="padding:8px 10px;border:1px solid #CBD5E1">편의점 도시락 ≒ 600엔</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">EUR (유럽)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">1,498원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 6.68 유로</td><td style="padding:8px 10px;border:1px solid #CBD5E1">박물관 입장료 ≒ 15유로</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">CNY (중국)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">189원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 52.9 위안</td><td style="padding:8px 10px;border:1px solid #CBD5E1">훠궈 1인 ≒ 80위안</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">THB (태국)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">40원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 250 바트</td><td style="padding:8px 10px;border:1px solid #CBD5E1">팟타이 1접시 ≒ 80바트</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">VND (베트남, 1,000동)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">54원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 185,000 동</td><td style="padding:8px 10px;border:1px solid #CBD5E1">쌀국수 ≒ 50,000동</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">IDR (인도네시아, 10,000루피아)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">875원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 114,300 루피아</td><td style="padding:8px 10px;border:1px solid #CBD5E1">나시고렝 ≒ 35,000루피아</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">SGD (싱가포르)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">1,020원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 9.80 싱가포르 달러</td><td style="padding:8px 10px;border:1px solid #CBD5E1">호커센터 한 끼 ≒ 6SGD</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">HKD (홍콩)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">177원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 56.5 홍콩 달러</td><td style="padding:8px 10px;border:1px solid #CBD5E1">딤섬 1인 ≒ 120HKD</td></tr>
</tbody></table>
<p>위 값은 2026년 4월 25일 한국은행 ECOS 매매기준율 종가를 반올림한 예시입니다. 실제 계산기에는 매일 다른 값이 들어오며, 환전·결제 시 적용 환율은 이 기준에 1~2% 안팎의 수수료가 가산된다고 보면 됩니다.</p>` },

    { type: 'h2', id: 'tip-card-vs-cash', text: '활용 팁 1 — 카드 결제 vs 현금 환전 어느 쪽이 유리한가' },
    { type: 'body', html: `<p>처음 방문했을 때 일본 환전소에서 100엔당 950원으로 환전했는데, 같은 날 신용카드로 긁은 영수증을 보니 100엔당 930원 안팎으로 청구돼 있어서 "현금이 손해였나" 싶었던 적이 있습니다. 일반적으로 해외 신용카드 결제는 비자/마스터의 국제 환율 + 1% 수수료 + 카드사 해외이용 수수료(0.18~0.25%)가 더해지므로 매매기준율 대비 1.2~1.5% 비싸지는데, 사설 환전소 현찰 환율은 매매기준율 대비 1.7~2.0% 더 비싼 경우가 많습니다.</p>
<p>다만 카드는 가맹점이 DCC(자국통화결제, 한국 결제 시 KRW로 청구)를 권유하는 함정이 있습니다. DCC를 수락하면 가맹점 환율이 적용돼 3~7% 더 비싸지므로, 결제 단말에서 "JPY로 결제할까요 KRW로 결제할까요" 묻거나 영수증에 두 통화가 같이 찍히면 반드시 현지 통화 결제를 선택해야 합니다.</p>` },

    { type: 'h2', id: 'tip-timing', text: '활용 팁 2 — 환전 시점 잡기' },
    { type: 'body', html: `<p>현지인들이 실제로 쓰는 환율 절약 전략을 보면, 환율 알림 앱(토스·카카오뱅크·NH Smart 뱅킹)에서 "내가 원하는 환율" 알림을 걸어두고 한 달 평균선 아래로 떨어지면 30~50% 분할 환전하는 방식이 많습니다. 한 번에 다 환전하면 변동성에 노출되고, 너무 잘게 쪼개면 수수료가 누적되므로 2~3회로 나누는 정도가 무난합니다.</p>
<p>인터넷 환전(시중은행 모바일 앱)은 사설 환전소보다 우대율이 좋아 90%까지 적용해 주는 경우가 많고, 공항 영업점 또는 지정 지점에서 수령합니다. 인천공항 환전소에서 직접 환전하면 우대율이 50% 이하로 떨어지는 경우가 흔하니 출국 전날까지는 모바일 앱 환전을 마무리하세요.</p>` },

    { type: 'h2', id: 'tip-multi-currency', text: '활용 팁 3 — 다중 통화 여행 (스톱오버·복수국 일정)' },
    { type: 'body', html: `<p>방콕 경유로 발리에 가는 일정처럼 한 여행에서 두세 개 통화를 써야 할 때는, 각 통화를 어디서·얼마나 쓸지 먼저 계산기로 시뮬레이션해 보세요. 환전을 너무 많이 해서 남은 외화를 돌아와 다시 원화로 바꾸면 매도·매수 차이로 5% 이상 손실이 발생합니다. 트립스팟 계산기에 두 통화 결과를 따로 띄워놓고, 공항 식음료·교통비처럼 카드로 결제 가능한 항목은 현금에서 빼는 식으로 환전 총액을 줄여보세요.</p>
<p>최근에는 다중 통화 충전식 트래블카드(트래블월렛·하나 트래블로그·토스뱅크 외화통장)가 환전 수수료 없이 매매기준율로 충전·결제를 지원해서, 환전소 방문 횟수를 거의 0으로 줄일 수 있습니다. 다만 ATM 출금 수수료는 별도이며, 충전 한도·해외 결제 가능 가맹점·소득공제 가능 여부는 카드사별로 다릅니다.</p>` },

    { type: 'h2', id: 'fee-structure', text: '환전 수수료 구조 한눈에 보기' },
    { type: 'body', html: `<table style="width:100%;border-collapse:collapse;font-size:14px">
<thead><tr style="background:#F1F5F9">
<th style="padding:8px 10px;border:1px solid #CBD5E1">방법</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1">기준율 대비 추가 비용</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1">장점</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1">단점</th>
</tr></thead>
<tbody>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">트래블카드 충전</td><td style="padding:8px 10px;border:1px solid #CBD5E1">0% (매매기준율)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">수수료 거의 없음, 모바일 충전</td><td style="padding:8px 10px;border:1px solid #CBD5E1">ATM 인출은 수수료 별도, 가맹점 제한</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">모바일 환전(90% 우대)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">+0.2% 안팎</td><td style="padding:8px 10px;border:1px solid #CBD5E1">현금 직접 수령</td><td style="padding:8px 10px;border:1px solid #CBD5E1">분실 위험, 사용 후 잔액 재환전 손실</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">해외 신용카드 결제</td><td style="padding:8px 10px;border:1px solid #CBD5E1">+1.2~1.5%</td><td style="padding:8px 10px;border:1px solid #CBD5E1">편의성, 포인트·마일</td><td style="padding:8px 10px;border:1px solid #CBD5E1">DCC 함정, 카드사 수수료 추가</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">사설 환전소</td><td style="padding:8px 10px;border:1px solid #CBD5E1">+1.5~2.5%</td><td style="padding:8px 10px;border:1px solid #CBD5E1">현장 접근성, 즉시 수령</td><td style="padding:8px 10px;border:1px solid #CBD5E1">우대율 들쭉날쭉, 위조지폐 리스크</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">공항 환전소</td><td style="padding:8px 10px;border:1px solid #CBD5E1">+3~5%</td><td style="padding:8px 10px;border:1px solid #CBD5E1">출국 직전 마지막 수단</td><td style="padding:8px 10px;border:1px solid #CBD5E1">가장 비쌈, 가능하면 회피</td></tr>
</tbody></table>` },

    { type: 'h2', id: 'cautions', text: '주의사항' },
    { type: 'warning', title: '환율은 참고용이며 실제 거래 환율과 다릅니다', html: `<ul>
<li>이 계산기의 환율은 한국은행 ECOS 직전 영업일 매매기준율로, 실제 환전·카드 결제 환율과는 1~3% 차이가 발생합니다.</li>
<li>주말·공휴일에는 환율 데이터가 업데이트되지 않으며, 직전 영업일 종가가 표시됩니다.</li>
<li>외환 트레이딩·실시간 거래 목적으로는 적합하지 않습니다. 분 단위 시세는 증권사 HTS·MTS를 이용하세요.</li>
<li>현지 환전 시 위조지폐 적발, 분실·도난 위험이 있으므로 한 번에 모든 여행 예산을 현금으로 환전하지 마세요.</li>
<li>DCC(자국통화결제)는 가맹점 환율이 적용돼 매우 불리합니다. 영수증의 통화 단위를 반드시 확인하세요.</li>
</ul>` },

    { type: 'h2', id: 'common-mistakes', text: '자주 묻는 실수' },
    { type: 'body', html: `<ul>
<li><strong>"현찰 살 때" 환율과 매매기준율을 혼동</strong> — 매매기준율은 도매가, 현찰 살 때는 소매가로 매매기준율 + 1.75% 안팎입니다.</li>
<li><strong>0의 개수 착각 (VND·IDR)</strong> — 베트남 50,000동을 50만원으로 오해하거나, 인도네시아 100,000루피아를 10만원으로 착각하는 사례가 흔합니다.</li>
<li><strong>출발 직전 환전</strong> — 출국 당일 공항 환전소에서 우대율 30% 이하로 환전해 5% 이상 손실 보는 경우가 많습니다.</li>
<li><strong>남는 외화를 그대로 보관</strong> — 다음 여행을 6개월 이내 가지 않을 거라면 즉시 재환전하는 편이 환율 변동 리스크를 줄입니다.</li>
<li><strong>가맹점 DCC 권유 수락</strong> — 단말기에 "Pay in KRW?" 라고 뜨면 무조건 No, 현지 통화 결제 선택.</li>
<li><strong>여러 통화를 한 카드로 무계획 결제</strong> — 카드사별로 통화·국가별 수수료 차이가 있으므로 출발 전 카드 약관을 한번 확인하세요.</li>
</ul>` },

    { type: 'h2', id: 'limits', text: '도구의 한계와 면책' },
    { type: 'body', html: `<p>트립스팟 환율 계산기는 한국은행 ECOS 일별 매매기준율을 기준점으로 제공할 뿐, 외환 거래나 송금 시 실제 적용되는 환율을 보장하지 않습니다. 환전·결제 시점에 따라 실제 비용은 계산기 표시값과 1~5% 이상 차이가 날 수 있으며, 카드사·은행·환전소마다 자체 환율과 수수료 체계가 다릅니다. 큰 금액 송금·해외 자산 거래·수출입 계약 등 정확한 환율이 필요한 경우에는 거래 은행에 직접 문의하세요.</p>` },

    { type: 'callout', html: `<strong>편집자 한마디</strong> — 환율은 "오늘 얼마인가"보다 "내 여행 예산 안에 들어오는가"가 더 중요합니다. 출발 한 달 전부터 계산기를 일주일에 한두 번씩 펼쳐보면서 평균값을 머릿속에 넣어두면, 환전 타이밍·카드 결제 여부·현지 가격 흥정까지 모두 한층 여유롭게 다룰 수 있습니다.` },

    { type: 'faq', items: [
      { q: '환율은 얼마나 자주 업데이트되나요?', a: '한국은행 ECOS API에서 매 영업일 오후 4시 30분 이후 종가가 갱신됩니다. 트립스팟 계산기는 그 데이터를 일 1회 캐시해 제공하며, 주말·공휴일에는 직전 영업일 종가가 그대로 표시됩니다.' },
      { q: '계산기 환율과 은행 환전 환율이 다른 이유가 뭔가요?', a: '계산기는 도매 거래 기준인 매매기준율을 보여주고, 실제 환전·결제 시에는 매매기준율 + 수수료(현찰 살 때 1.75%, 카드 결제 1.2~1.5% 등)가 더해지기 때문입니다.' },
      { q: '실시간 환율을 보고 싶은데 다른 방법이 있나요?', a: '분 단위 실시간 환율은 증권사 HTS·MTS, 블룸버그·로이터, 일부 은행 모바일 앱의 실시간 환율 차트를 이용하세요. 트립스팟은 여행 예산용 일별 환율만 제공합니다.' },
      { q: '베트남 동·인도네시아 루피아처럼 단위가 큰 통화는 어떻게 입력하나요?', a: '계산기는 1단위 환율을 그대로 보여주며, 원하는 금액(예: 50,000 VND)을 입력란에 그대로 넣으면 됩니다. 자동으로 콤마 처리되니 0의 개수만 정확히 입력하세요.' },
      { q: '환전과 카드 결제 중 어느 쪽이 무조건 싸나요?', a: '일반적으로 트래블카드 충전(매매기준율 0% 수수료) > 모바일 환전(90% 우대) > 카드 결제 > 사설 환전소 > 공항 환전소 순으로 유리하지만, 여행 기간·결제 빈도·국가별 가맹점 환경에 따라 달라집니다.' },
      { q: 'DCC(자국통화결제)가 뭔가요? 왜 거절해야 하나요?', a: 'DCC는 해외 가맹점이 현지 통화 대신 한국 원화로 결제 금액을 보여주는 옵션으로, 가맹점이 자체 환율을 적용해 3~7% 더 비싸게 청구됩니다. 단말기에 KRW 결제 여부를 물으면 반드시 거절하고 현지 통화로 결제하세요.' }
    ] },

    { type: 'sources', items: [
      { label: '한국은행 ECOS 통계검색시스템', url: 'https://ecos.bok.or.kr/', org: '한국은행', accessedAt: '2026-05-14' },
      { label: '외환은행 고시환율 안내 — 매매기준율·현찰·전신환의 차이', url: 'https://www.kebhana.com/cont/mall/mall09/mall0901/index.jsp', org: '하나은행', accessedAt: '2026-05-14' },
      { label: '해외에서 카드 사용 시 유의사항(DCC 안내)', url: 'https://www.fss.or.kr/', org: '금융감독원', accessedAt: '2026-05-14' }
    ] },

    { type: 'disclaimer' }
  ]
}