module.exports = {
  sections: [
    {
      type: 'intro',
      html: `<p>여행을 계획할 때 가장 먼저 부딪히는 벽은 "어디로 갈까"입니다. 항공권 가격, 환율, 비행시간, 비자, 계절, 동반자 구성, 음식 취향까지 변수가 너무 많아서, 인스타그램 피드 몇 장 보다가 결국 결정을 미루고 마는 일이 흔합니다. 처음 부모님 모시고 동남아 패키지를 알아보던 때, 푸켓·다낭·세부·코타키나발루를 두고 일주일을 망설였던 기억이 있습니다. 결정의 기준이 없으니 정보가 늘수록 더 헷갈렸습니다.</p>
<p>여행지 추천 도구는 이 막막함을 줄이기 위해 만들어졌습니다. 예산(1인 기준 100만 원·300만 원·500만 원 이상), 기간(1박 2일·3박 5일·5박 7일·10박 이상), 테마(가족·신혼·미식·비치·문화·쇼핑·워케이션), 동반자 구성(혼자·친구·연인·가족·아이 동반·부모님 동반) — 이 네 가지 축만 입력하면 후보 국가 3~5곳을 자동으로 좁혀 줍니다.</p>
<p>이 문서는 도구를 효과적으로 활용하는 법과 함께, 각 입력값이 추천 로직에 어떻게 반영되는지를 풀어 설명합니다. 단순히 "어디 가면 좋아요?"라는 막연한 질문 대신, "300만 원·4박 6일·가족(아이 7세)·비치 테마"라는 구체적 조건으로 바꿔 던지면 결과가 완전히 달라집니다. 도구는 그 변환을 도와주는 보조 장치일 뿐, 마지막 결정은 여행자의 몫입니다.</p>
<p>아래에서는 추천 로직의 원리, 예산·기간·테마별 적합 후보, 실제 사용 예시, 자주 묻는 실수까지 한 번에 정리합니다. 한 번 익혀 두면 다음 여행, 그다음 여행에서 후보 압축 시간을 크게 줄일 수 있습니다.</p>`
    },
    { type: 'h2', id: 'why-needed', text: '여행지 추천 도구가 왜 필요한가' },
    {
      type: 'body',
      html: `<p>여행지 선택은 본질적으로 다변수 최적화 문제입니다. "예쁜 곳"이 아니라 "예산·시간·동반자·계절 모두 만족하는 곳"을 찾아야 하기 때문입니다. 변수 하나만 바뀌어도 정답이 완전히 달라집니다. 예산이 200만 원이면 동남아가 현실적이지만, 500만 원이면 유럽 일부 도시도 충분히 가능해집니다. 일정이 3박 5일이면 가까운 일본·동남아, 7박 이상이면 유럽·미주가 비행시간 대비 합리적입니다.</p>
<ul>
<li><strong>정보 과부하 해소</strong> — 블로그·유튜브 후기를 100개 봐도 내 조건에 맞지 않으면 결정에 도움이 안 됩니다. 도구는 조건 필터 역할을 합니다.</li>
<li><strong>비교 기준 통일</strong> — 후보 3~5개를 같은 기준(예산·이동시간·치안·언어 난이도)으로 나란히 볼 수 있습니다.</li>
<li><strong>현실 점검</strong> — "신혼 + 100만 원 + 5박" 같은 조합이 현실적인지 도구가 빠르게 알려 줍니다. 무리한 조합이면 우선순위 재조정이 필요합니다.</li>
<li><strong>의사결정 속도</strong> — 일주일 고민할 일을 30분으로 줄여 줍니다. 결정 자체보다 결정 후 준비에 시간을 쓰는 편이 결과적으로 만족도가 높습니다.</li>
</ul>
<p>현지인들이 실제로 추천하는 동선과 한국 여행자가 선호하는 동선이 다를 때도 많습니다. 도구는 한국 출발 기준의 항공·환율·비자 정보를 우선 반영하기 때문에, 한국인 관점에서 효율적인 후보를 제시합니다.</p>`
    },
    { type: 'h2', id: 'how-to-use', text: '사용법 — 4단계 입력' },
    {
      type: 'body',
      html: `<ol>
<li><strong>예산 입력</strong> — 1인 기준 총예산을 항공·숙박·식비·현지비 모두 포함해 잡습니다. 가족 단위면 인당 환산이 필수입니다.</li>
<li><strong>기간 입력</strong> — 출발일·귀국일을 정하지 못했더라도 "3박 5일 정도"처럼 대략의 길이로 충분합니다.</li>
<li><strong>테마 선택</strong> — 가장 중요한 테마 1~2개만 고릅니다. 욕심을 내서 4~5개 동시 선택하면 후보가 사라지거나 어정쩡한 결과가 나옵니다.</li>
<li><strong>동반자 구성</strong> — 혼자·친구·연인·신혼·가족(아이 연령)·부모님 동반 중 선택. 동반자에 따라 적합지가 크게 달라집니다.</li>
</ol>
<p>네 가지를 입력하면 후보 국가 3~5개와 각 국가의 추천 지역, 예상 비용대, 주의사항이 한 번에 표시됩니다. 결과는 어디까지나 출발점이며, 그중 마음에 드는 한두 곳을 골라 호텔·항공권 가격을 본격 비교하면 됩니다.</p>`
    },
    { type: 'h2', id: 'calc-example', text: '계산 예시 — 입력에 따라 결과가 어떻게 바뀌나' },
    {
      type: 'body',
      html: `<p>같은 사람이 변수를 하나씩 바꿔 입력했을 때 추천이 어떻게 달라지는지를 보여 주는 표입니다. 입력값의 작은 차이가 결과에 큰 차이를 만든다는 점을 확인할 수 있습니다.</p>
<table style="width:100%;border-collapse:collapse;font-size:14px">
<thead>
<tr>
<th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">예산(1인)</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">기간</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">테마</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">동반자</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">추천 후보</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px 10px;border:1px solid #CBD5E1">100만 원</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">3박 5일</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">비치</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">친구</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">베트남 다낭, 필리핀 보라카이, 태국 끄라비</td>
</tr>
<tr>
<td style="padding:8px 10px;border:1px solid #CBD5E1">200만 원</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">4박 6일</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">미식·도시</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">연인</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">일본 후쿠오카, 대만 타이베이, 홍콩</td>
</tr>
<tr>
<td style="padding:8px 10px;border:1px solid #CBD5E1">300만 원</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">5박 7일</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">가족·비치</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">가족(아이 7세)</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">괌, 사이판, 코타키나발루, 푸켓</td>
</tr>
<tr>
<td style="padding:8px 10px;border:1px solid #CBD5E1">400만 원</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">5박 7일</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">신혼·럭셔리</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">신혼</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">몰디브(저가 리조트), 발리, 푸켓 풀빌라</td>
</tr>
<tr>
<td style="padding:8px 10px;border:1px solid #CBD5E1">500만 원</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">7박 9일</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">문화·도시</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">혼자</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">일본 도쿄·교토, 대만 일주, 베트남 일주</td>
</tr>
<tr>
<td style="padding:8px 10px;border:1px solid #CBD5E1">600만 원+</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">10박 이상</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">문화·미식</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">연인·신혼</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">이탈리아, 스페인, 프랑스 일부 구간</td>
</tr>
</tbody>
</table>
<p>처음 가족 여행 계획을 세울 때, 같은 300만 원으로 "유럽 가능할까요?" 물었다가 비행시간·시차·아이 동반 부담을 따져 보니 결국 동남아 비치로 결정한 적이 있습니다. 도구의 역할은 바로 이 현실 조정을 빠르게 해 주는 데 있습니다.</p>`
    },
    { type: 'h2', id: 'tip-budget', text: '활용 팁 1 — 예산은 항공권 비수기를 기준으로' },
    {
      type: 'body',
      html: `<p>같은 목적지라도 출발 시즌에 따라 항공권이 2~3배 차이 납니다. 예산 입력 시 성수기(7~8월·12월 말·설·추석) 가격이 아니라 비수기(5월·6월·10월·11월) 가격으로 잡으면 후보 범위가 훨씬 넓어집니다. 입력 단계에서 "성수기 출발" 옵션을 체크하면 예산 보정이 자동으로 들어가니, 한 번 더 시도해 보길 권합니다.</p>
<ul>
<li>일본 단거리: 비수기 25만 원, 성수기 50~70만 원</li>
<li>동남아 비치: 비수기 35만 원, 성수기 70~100만 원</li>
<li>유럽: 비수기 80만 원, 성수기 150~200만 원</li>
</ul>
<p>여유가 있다면 시즌 이동만으로도 같은 예산에서 한 단계 높은 후보를 잡을 수 있습니다.</p>`
    },
    { type: 'h2', id: 'tip-theme', text: '활용 팁 2 — 테마는 1~2개로 좁히기' },
    {
      type: 'body',
      html: `<p>"가족 + 미식 + 비치 + 쇼핑 + 문화" 다섯 개를 동시에 만족하는 여행지는 사실상 없습니다. 욕심을 부리면 결국 평범한 후보가 남거나, 결과가 비어 버립니다. 가장 중요한 테마 1개, 보조 테마 1개로 끊는 편이 결과 품질이 좋습니다.</p>
<p>현지인들이 실제로 사랑하는 골목 미식과 관광객용 미식이 다르다는 점도 기억해 두면 좋습니다. 미식 테마를 선택했다면 후보지 발표 후, 그 도시의 "현지인 시장"·"전통 골목" 키워드로 추가 검색해 보세요.</p>`
    },
    { type: 'h2', id: 'tip-companion', text: '활용 팁 3 — 동반자 구성은 가장 보수적인 사람 기준' },
    {
      type: 'body',
      html: `<p>아이 동반이면 아이 기준, 부모님 동반이면 부모님 기준으로 잡아야 실패가 적습니다. 가장 보수적인 동반자에 맞춰야 모두가 만족합니다.</p>
<ul>
<li><strong>아이 7세 이하</strong> — 비행시간 5시간 이내, 시차 2시간 이내가 안전(괌·사이판·일본·동남아).</li>
<li><strong>부모님 동반</strong> — 도보 이동 최소화, 영어 의존도 낮은 곳, 한국 음식 접근성(일본·대만 우선).</li>
<li><strong>신혼</strong> — 풀빌라·올인클루시브 옵션이 풍부한 곳(발리·푸켓·몰디브).</li>
<li><strong>혼자</strong> — 치안·대중교통·영어 통용도가 핵심(일본·대만·싱가포르).</li>
</ul>`
    },
    { type: 'h2', id: 'cautions', text: '주의사항 — 도구를 맹신하면 안 되는 이유' },
    {
      type: 'warning',
      title: '도구의 한계',
      html: `<p>본 도구는 입력 데이터 기반의 후보 압축 도구이며, 실시간 환율·항공권·정세를 모두 반영하지는 못합니다. 후보가 좁혀진 뒤에는 반드시 외교부 여행경보(<strong>0331.go.kr</strong>), 항공권 실시간 가격, 현지 입국 규정을 다시 확인해야 합니다. 도구 결과는 "탐색의 출발점"이지 "확정 답"이 아닙니다.</p>`
    },
    {
      type: 'body',
      html: `<ul>
<li>여행경보 단계 변경(2단계 이상이면 재고)</li>
<li>현지 비자 정책 변경(무비자 ↔ E-Visa 전환 시점)</li>
<li>환율 급변(현지 통화 가치 20% 이상 변동 시 예산 재검토)</li>
<li>계절 재해(우기·태풍·한파) 시기 회피</li>
</ul>`
    },
    { type: 'h2', id: 'common-mistakes', text: '자주 묻는 실수 — 사용자가 가장 많이 빠지는 함정' },
    {
      type: 'body',
      html: `<ol>
<li><strong>총예산을 1인 환산하지 않음</strong> — 가족 4인이 총 400만 원이면 1인 100만 원입니다. 후보가 동남아로 좁혀집니다.</li>
<li><strong>비행시간 무시</strong> — 유럽 왕복은 비행만 24시간 가깝습니다. 5박 7일이면 현지 체류가 3박 5일 수준으로 줄어듭니다.</li>
<li><strong>성수기 기준 예산</strong> — 7~8월·연말 출발이라면 표시된 평균보다 1.5~2배 예산이 필요합니다.</li>
<li><strong>비자 미확인</strong> — 인도·러시아·일부 중동은 사전 비자 필수입니다. 후보 확정 전에 비자 정책 확인.</li>
<li><strong>아이 동반인데 시차 큰 곳</strong> — 유럽·미주는 시차 7~9시간으로, 7세 이하 아이는 컨디션 회복에만 2~3일이 듭니다.</li>
</ol>
<p>처음 방문했을 때 예상보다 숙박비가 높아서 당황했는데, 도구가 제시한 평균값은 호텔 외 게스트하우스·에어비앤비를 섞은 평균이었습니다. 최종 비용은 본인 숙박 취향에 따라 30% 정도 상하로 움직인다고 보면 안전합니다.</p>`
    },
    { type: 'h2', id: 'companion-guide', text: '동반자별 추천 패턴' },
    {
      type: 'body',
      html: `<table style="width:100%;border-collapse:collapse;font-size:14px">
<thead>
<tr>
<th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">동반자</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">선호 거리</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">우선 조건</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">추천 국가</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px 10px;border:1px solid #CBD5E1">혼자</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">중·장거리 모두</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">치안·대중교통</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">일본·대만·싱가포르</td>
</tr>
<tr>
<td style="padding:8px 10px;border:1px solid #CBD5E1">친구</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">단·중거리</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">야경·미식·가성비</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">베트남·태국·일본</td>
</tr>
<tr>
<td style="padding:8px 10px;border:1px solid #CBD5E1">연인·신혼</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">중·장거리</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">풀빌라·뷰·분위기</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">발리·푸켓·몰디브·이탈리아</td>
</tr>
<tr>
<td style="padding:8px 10px;border:1px solid #CBD5E1">가족(아이)</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">단거리</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">시차·키즈시설</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">괌·사이판·코타키나발루·오키나와</td>
</tr>
<tr>
<td style="padding:8px 10px;border:1px solid #CBD5E1">부모님</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">단·중거리</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">한식·도보 최소화</td>
<td style="padding:8px 10px;border:1px solid #CBD5E1">일본 온천·대만·다낭</td>
</tr>
</tbody>
</table>`
    },
    { type: 'h2', id: 'season-tip', text: '계절·우기·성수기 — 출발 시기 보정' },
    {
      type: 'body',
      html: `<ul>
<li><strong>동남아</strong> — 5~10월 우기, 11~4월 건기. 비치는 건기 출발 권장.</li>
<li><strong>일본</strong> — 6월 장마, 7~8월 폭염·태풍, 1월 한겨울. 4~5월·10~11월이 황금기.</li>
<li><strong>유럽</strong> — 4~6월·9~10월이 합리적. 7~8월은 인파·가격 최고치.</li>
<li><strong>호주·뉴질랜드</strong> — 남반구라 한국 겨울이 현지 여름. 12~2월에 비치 가능.</li>
</ul>
<p>현지인들이 실제로 즐기는 축제·시즌(일본의 단풍·벚꽃, 태국의 송끄란, 베트남의 떳)에 맞추면 가격은 비싸지지만 여행 경험은 한층 풍부해집니다. 도구의 후보가 좁혀진 다음에는 그 후보 국가의 캘린더 이벤트를 한 번 더 확인해 보길 권합니다.</p>`
    },
    { type: 'h2', id: 'after-recommendation', text: '추천 결과 받은 뒤 — 다음 단계 체크리스트' },
    {
      type: 'info',
      title: '후보 3곳을 받은 뒤 해야 할 일',
      html: `<ol>
<li>각 후보 항공권 실시간 가격 비교(스카이스캐너·구글 플라이트)</li>
<li>각 후보 숙박 가격(호텔스컴바인) — 1박 평균 확인</li>
<li>비자·입국 규정 재확인(외교부 영사콜센터 자료)</li>
<li>현지 환율 트렌드(최근 6개월) 점검</li>
<li>여행자 보험 견적(YMYL A 등급, 필수)</li>
<li>날씨(과거 5년 같은 시기 평균 기온·강수량)</li>
</ol>
<p>여기까지 끝내면 후보 3곳 중 한 곳이 자연스럽게 1순위로 떠오릅니다. 그때 항공권을 먼저 잡고, 숙박은 1~2일 더 비교해도 늦지 않습니다.</p>`
    },
    {
      type: 'callout',
      html: `<p><strong>편집자 한마디</strong> — 도구는 마법이 아닙니다. 입력값이 부실하면 결과도 부실합니다. 예산은 1인 환산, 기간은 비행시간 포함, 테마는 1~2개, 동반자는 가장 보수적인 사람 기준. 이 네 가지만 지켜도 추천 품질은 두 배가 됩니다. 한 번 결과를 받은 뒤 마음에 안 들면 변수를 하나씩만 바꿔 보세요. "기간을 5박 7일에서 4박 6일로 줄였더니 후보가 동남아에서 일본으로 옮겨졌다" 같은 변화의 폭을 보는 것 자체가 학습이 됩니다.</p>`
    },
    {
      type: 'faq',
      items: [
        { q: '예산에 항공권을 포함해야 하나요?', a: '예. 1인 총예산은 항공권 + 숙박 + 식비 + 현지 교통 + 액티비티를 모두 포함합니다. 항공권만 따로 빼면 후보 압축이 부정확해집니다.' },
        { q: '테마를 여러 개 동시에 선택해도 되나요?', a: '기술적으로는 가능하지만, 3개 이상이면 모두를 만족하는 후보가 사라지거나 평범한 결과만 남습니다. 가장 중요한 테마 1개, 보조 1개로 끊는 편을 권장합니다.' },
        { q: '추천 결과가 마음에 안 들면 어떻게 하나요?', a: '입력 변수 하나만 바꿔 다시 시도해 보세요. 예산을 50만 원 늘리거나, 기간을 1박 줄이거나, 테마를 비치에서 도시로 바꾸면 후보가 완전히 달라집니다.' },
        { q: '도구 결과가 항상 정확한가요?', a: '아니요. 후보 압축의 출발점일 뿐이며, 실시간 항공권·환율·정세는 별도로 확인해야 합니다. 특히 외교부 여행경보 2단계 이상 지역은 재검토가 필요합니다.' },
        { q: '아이 동반 가족인데 유럽이 추천에 나왔어요. 가도 될까요?', a: '7세 이상 아이라면 가능합니다. 다만 비행 14시간 + 시차 7~9시간을 견딜 수 있는지, 일정에 회복일 2일을 포함했는지 점검해야 합니다. 6세 이하라면 단거리 동남아·일본을 권장합니다.' },
        { q: '성수기 출발인데 예산이 평균값과 다른 이유는?', a: '도구의 평균 비용은 비수기 기준입니다. 7~8월·12월 말·설·추석 출발이면 항공권만 1.5~2배 오르므로 총예산을 30~50% 상향해 다시 입력하면 현실적인 후보가 나옵니다.' }
      ]
    },
    {
      type: 'sources',
      items: [
        { label: '외교부 해외안전여행 — 국가별 여행경보·안전정보', url: 'https://www.0404.go.kr', org: '대한민국 외교부', accessedAt: '2026-05-14' },
        { label: '한국관광공사 — 해외여행 통계·국가별 정보', url: 'https://kto.visitkorea.or.kr', org: '한국관광공사', accessedAt: '2026-05-14' },
        { label: '인천국제공항공사 — 항공노선·취항 정보', url: 'https://www.airport.kr', org: '인천국제공항공사', accessedAt: '2026-05-14' }
      ]
    },
    { type: 'disclaimer' }
  ]
}