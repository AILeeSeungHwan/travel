module.exports = {
  sections: [
    {
      type: 'intro',
      html: `<p>여행 일정을 짤 때 가장 먼저 부딪히는 벽이 비행시간과 시차다. 인천에서 도쿄까지 2시간 30분이라는 정보 하나만 알아도 호텔 체크인 시간을 가늠할 수 있고, 발리에 도착해서 한국 시간으로 새벽 3시라는 사실을 미리 알면 첫날 일정을 무리하게 잡지 않는다. 처음 해외여행을 준비했을 때 비행기 표만 끊으면 끝나는 줄 알았는데, 도착 시각이 한국 기준 새벽이라 호텔에 짐만 맡기고 오전 내내 좀비처럼 돌아다닌 기억이 있다.</p>
<p>비행시간은 단순히 출발과 도착 사이의 차이가 아니다. 시차가 더해지면 '도착 현지 시각'이 묘하게 어긋나고, 거기에 공항에서 시내까지의 이동, 입국 심사 대기, 호텔 체크인 시간까지 겹치면 실제 활동 가능 시각이 예상보다 3~5시간 짧아진다. 이 페이지는 인천을 기준으로 한 주요 여행지의 직항 비행시간과 한국 시간 대비 시차를 한 번에 비교할 수 있도록 정리한 도구다.</p>
<p>표에 적힌 비행시간은 평균 운항 시간이다. 항공사·기종·항로·계절풍에 따라 ±30분 정도 편차가 있고, 동남아 노선처럼 같은 거리라도 갈 때와 올 때가 1시간 가까이 차이 나는 경우도 흔하다. 시차는 한국 표준시(KST, UTC+9)를 기준으로 했고, 서머타임(DST)을 적용하는 국가는 별도로 표시했다.</p>
<p>현지인들이 실제로 추천하는 항공권 검색 방식은 '비행시간 + 도착 현지 시각'을 함께 보는 것이다. 같은 도쿄행이라도 오후 1시 도착편과 밤 10시 도착편은 첫날 일정이 완전히 달라진다. 이 계산기와 함께 도착 시각을 한국 기준·현지 기준으로 동시 확인하는 습관을 들이면, 여행 첫날을 망치는 일이 확연히 줄어든다.</p>`
    },

    { type: 'h2', id: 'why-need', text: '왜 비행시간·시차 계산이 필요한가' },
    {
      type: 'body',
      html: `<p>비행시간과 시차를 미리 계산해두지 않으면 일정·예산·체력 세 가지가 동시에 흔들린다. 도착 시각이 현지 자정을 넘기면 공항 리무진이 끊기고, 시차가 큰 지역에서는 첫날 일정을 잡아놓고도 졸음을 견디지 못해 호텔로 돌아간다.</p>
<ul>
<li><strong>호텔 체크인·체크아웃 시각</strong> — 대부분 체크인 15시, 체크아웃 11시. 새벽 도착이면 얼리 체크인 추가 요금이 발생한다.</li>
<li><strong>공항 교통편</strong> — 인천 리무진은 약 23시까지, 도쿄 나리타 익스프레스는 22시 30분경 종료. 도착 시각에 따라 야간 택시·환승 호텔이 필요하다.</li>
<li><strong>시차 적응 일정</strong> — 시차 5시간 이상 지역은 첫 1~2일을 가벼운 일정으로 비워야 컨디션이 유지된다.</li>
<li><strong>예약 시각 동기화</strong> — 현지 투어·식당 예약은 현지 시각 기준이지만, 카카오톡·이메일로 받는 확정 알림은 한국 시각으로 와서 혼란을 부른다.</li>
<li><strong>비즈니스·중요 연락</strong> — 시차 12시간 이상 지역(미동부·중남미)은 한국 업무 시간과 거의 정반대이므로 출발 전 인수인계가 필수다.</li>
</ul>
<p>처음 발리에 갔을 때 한국 시각 새벽 2시에 도착했는데, 현지는 밤 11시였다. 호텔 체크인은 정상적으로 가능했지만 다음 날 새벽부터 잠이 깨버려 오후 내내 졸음과 싸웠다. 이런 실수를 줄이는 가장 단순한 방법이 출발 전 비행시간과 시차를 같이 메모해두는 것이다.</p>`
    },

    { type: 'h2', id: 'how-to-use', text: '계산기 사용법' },
    {
      type: 'body',
      html: `<p>이 페이지의 계산기는 인천(ICN)을 출발지로 고정하고, 도착 도시·국가를 선택해 직항 평균 비행시간과 한국 시간 기준 시차를 즉시 보여준다. 사용 흐름은 다음과 같다.</p>
<ol>
<li><strong>도착지 선택</strong> — 동아시아·동남아·유럽·중동·아메리카·오세아니아 카테고리에서 도시 선택.</li>
<li><strong>비행시간 확인</strong> — 평균 직항 운항 시간. 경유편은 별도 산정 필요.</li>
<li><strong>시차 확인</strong> — KST 기준 ±시간. '-'는 한국보다 늦음, '+'는 빠름.</li>
<li><strong>도착 시각 추정</strong> — 출발 시각(한국 기준) + 비행시간 − 시차 = 도착 현지 시각.</li>
<li><strong>역계산</strong> — 현지 도착 희망 시각이 정해져 있으면, 그 시각에서 시차·비행시간을 역산해 인천 출발편을 고른다.</li>
</ol>
<p>예시: 인천 13:00 출발, 다낭행 직항 4시간 30분, 시차 −2시간. 도착 현지 시각 = 13:00 + 4:30 − 2:00 = 15:30. 호텔 체크인(15:00) 직후 도착이라 시간 낭비가 적다.</p>`
    },

    { type: 'h2', id: 'east-asia', text: '동아시아·동남아 (1~7시간)' },
    {
      type: 'body',
      html: `<table style="width:100%;border-collapse:collapse;font-size:14px">
<thead><tr style="background:#F0F9FF">
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">도착지</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">평균 비행시간</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">시차(KST 기준)</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">DST</th>
</tr></thead>
<tbody>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">도쿄(NRT/HND)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">2시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">0</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">오사카(KIX)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">2시간</td><td style="padding:8px 10px;border:1px solid #CBD5E1">0</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">후쿠오카(FUK)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">1시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">0</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">상하이(PVG)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">2시간</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−1</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">홍콩(HKG)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">3시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−1</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">대만 타이베이(TPE)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">2시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−1</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">방콕(BKK)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">5시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−2</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">다낭(DAD)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">4시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−2</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">호치민(SGN)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">5시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−2</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">싱가포르(SIN)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">6시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−1</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">발리(DPS)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">7시간</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−1</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">세부·마닐라(MNL)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">4시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−1</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
</tbody>
</table>
<p>동아시아·동남아는 시차가 2시간 이내라 적응 부담이 거의 없다. 주말 1박 2일·1박 3일 일정도 무리 없이 소화 가능하다.</p>`
    },

    { type: 'h2', id: 'europe-middle-east', text: '유럽·중동 (10~13시간)' },
    {
      type: 'body',
      html: `<table style="width:100%;border-collapse:collapse;font-size:14px">
<thead><tr style="background:#F0F9FF">
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">도착지</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">평균 비행시간</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">시차(KST 기준)</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">DST</th>
</tr></thead>
<tbody>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">파리(CDG)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">12시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−8(여름 −7)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">3~10월</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">런던(LHR)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">13시간</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−9(여름 −8)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">3~10월</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">프랑크푸르트(FRA)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">12시간</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−8(여름 −7)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">3~10월</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">로마(FCO)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">12시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−8(여름 −7)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">3~10월</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">바르셀로나(BCN)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">13시간</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−8(여름 −7)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">3~10월</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">이스탄불(IST)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">11시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−6</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">두바이(DXB)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">9시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−5</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">도하(DOH)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10시간</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−6</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
</tbody>
</table>
<p>유럽 노선은 한국 출발이 보통 낮 12시~오후 1시, 도착이 현지 저녁 6~8시인 편이 많다. 첫날 호텔 체크인 후 가볍게 저녁만 먹고 잠드는 일정이 시차 적응에 가장 무난하다. 여름 서머타임 기간(3월 마지막 일요일~10월 마지막 일요일)에는 시차가 1시간 줄어든다.</p>`
    },

    { type: 'h2', id: 'americas', text: '아메리카 (9~14시간)' },
    {
      type: 'body',
      html: `<table style="width:100%;border-collapse:collapse;font-size:14px">
<thead><tr style="background:#F0F9FF">
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">도착지</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">평균 비행시간</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">시차(KST 기준)</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">DST</th>
</tr></thead>
<tbody>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">로스앤젤레스(LAX)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">11시간</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−17(여름 −16)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">3~11월</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">샌프란시스코(SFO)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">11시간</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−17(여름 −16)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">3~11월</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">시애틀(SEA)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−17(여름 −16)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">3~11월</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">뉴욕(JFK)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">14시간</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−14(여름 −13)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">3~11월</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">시카고(ORD)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">13시간</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−15(여름 −14)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">3~11월</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">밴쿠버(YVR)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10시간</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−17(여름 −16)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">3~11월</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">토론토(YYZ)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">13시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−14(여름 −13)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">3~11월</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">멕시코시티(MEX)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">14시간(경유 多)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−15</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음(2023~)</td></tr>
</tbody>
</table>
<p>미주 노선은 동쪽으로 갈수록 갈 때 빠르고 올 때 느리다. 인천 → 뉴욕 14시간, 뉴욕 → 인천 15~16시간이 일반적이다. 편서풍 영향으로 동행이 1~2시간 빠르고, 서행은 그만큼 늦어진다.</p>`
    },

    { type: 'h2', id: 'oceania', text: '오세아니아 (10~12시간)' },
    {
      type: 'body',
      html: `<table style="width:100%;border-collapse:collapse;font-size:14px">
<thead><tr style="background:#F0F9FF">
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">도착지</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">평균 비행시간</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">시차(KST 기준)</th>
<th style="padding:8px 10px;border:1px solid #CBD5E1;text-align:left">DST</th>
</tr></thead>
<tbody>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">시드니(SYD)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">+1(여름 +2)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10~4월</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">멜버른(MEL)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">11시간</td><td style="padding:8px 10px;border:1px solid #CBD5E1">+1(여름 +2)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10~4월</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">브리즈번(BNE)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10시간</td><td style="padding:8px 10px;border:1px solid #CBD5E1">+1</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">오클랜드(AKL)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">11시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">+3(여름 +4)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">9~4월</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">괌(GUM)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">4시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">+1</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">사이판(SPN)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">4시간 30분</td><td style="padding:8px 10px;border:1px solid #CBD5E1">+1</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
<tr><td style="padding:8px 10px;border:1px solid #CBD5E1">호놀룰루(HNL)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">9시간</td><td style="padding:8px 10px;border:1px solid #CBD5E1">−19</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음</td></tr>
</tbody>
</table>
<p>호주는 한국보다 1~2시간 빠르고, 시드니·멜버른은 남반구라 계절이 정반대다. 12월~2월이 여름, 6월~8월이 겨울이라는 점을 잊지 말고 옷차림을 챙기자.</p>`
    },

    { type: 'h2', id: 'time-difference-rules', text: '시차 적응 기본 규칙' },
    {
      type: 'body',
      html: `<p>의학계 통설은 '하루에 1시간씩' 적응한다는 것이다. 시차 5시간이면 5일, 12시간이면 약 1주일이 걸린다. 단기 여행에서는 적응을 포기하고 한국 시각 기준으로 컨디션을 관리하는 편이 차라리 낫다.</p>
<ul>
<li><strong>서쪽으로 가는 여행(유럽·미국)</strong> — 시계를 늦추는 방향. 도착 후 평소보다 늦게 자면 적응이 빠르다.</li>
<li><strong>동쪽으로 가는 여행(미주 서부에서 한국 복귀)</strong> — 시계를 앞당기는 방향. 더 어렵다고 알려져 있다.</li>
<li><strong>출발 3~4일 전 미리 조정</strong> — 취침·기상 시간을 30분~1시간씩 앞당기거나 늦춘다.</li>
<li><strong>기내 수면</strong> — 도착 현지가 낮이면 비행기에서 자둔다. 도착이 밤이면 깨어 있는다.</li>
<li><strong>도착 후 햇빛 노출</strong> — 오전 햇빛 30분 이상 받으면 멜라토닌 분비가 빨리 정상화된다.</li>
</ul>
<p>처음 유럽에 갔을 때 도착 당일 잠을 참고 밤 11시까지 버텼더니, 다음 날 아침 정상 컨디션이었다. 반대로 도착 직후 낮잠을 4시간 자버린 동행은 새벽 3시에 깨서 일주일 내내 시차에 시달렸다.</p>`
    },

    { type: 'h2', id: 'tips', text: '활용 팁 3가지' },
    {
      type: 'h3', id: 'tip-arrival-time', text: '① 도착 시각을 우선 기준으로 항공편 선택'
    },
    {
      type: 'body',
      html: `<p>같은 가격이면 도착 시각이 오후 2~6시인 편을 고르자. 호텔 체크인이 자연스럽고, 시차 적응에도 유리하다. 새벽 도착편은 가격이 싸지만 공항 노숙·얼리 체크인 추가 요금을 감안하면 실익이 적다.</p>`
    },
    {
      type: 'h3', id: 'tip-stopover', text: '② 경유편 비행시간 = 운항시간 + 경유 대기'
    },
    {
      type: 'body',
      html: `<p>도하·이스탄불·홍콩 경유 유럽편은 광고에 적힌 비행시간이 운항만 따진 수치인 경우가 많다. 실제 총 이동 시간은 경유 대기 3~5시간을 더해야 한다. 항공권 검색 시 '총 여행 시간' 컬럼을 꼭 확인하자.</p>`
    },
    {
      type: 'h3', id: 'tip-meeting-time', text: '③ 현지인·동행자 미팅 시각은 양쪽 시간 병기'
    },
    {
      type: 'body',
      html: `<p>현지 가이드와 약속을 잡을 때 '한국 시각 / 현지 시각' 둘 다 적어두면 헷갈리지 않는다. 카카오톡으로 '5월 20일 13:00 (현지) / 5월 20일 14:00 (KST)'처럼 표기.</p>`
    },

    { type: 'h2', id: 'caution', text: '주의사항' },
    {
      type: 'warning',
      title: '⚠️ 비행시간 계산 시 주의할 점',
      html: `<ul>
<li>이 표는 <strong>평균 직항 운항시간</strong>이다. 항공사·기종·계절풍에 따라 ±30분 편차.</li>
<li>경유편은 운항시간 + 경유 대기를 합산해야 한다. 일부 경유는 6시간 이상.</li>
<li>서머타임 적용 국가는 3월·11월 전후로 시차가 1시간 변동한다. 출발 직전 재확인 필요.</li>
<li>국제선은 일자 변경선(IDL) 통과 시 날짜가 달라진다. 미국 → 한국은 도착일이 출발 다음다음 날이 되는 경우도 있다.</li>
<li>공항 코드 혼동 주의: 도쿄(NRT/HND), 뉴욕(JFK/EWR/LGA), LA(LAX) — 같은 도시라도 공항에 따라 이동 시간이 1~2시간 차이.</li>
</ul>`
    },

    { type: 'h2', id: 'common-mistakes', text: '자주 묻는 실수' },
    {
      type: 'body',
      html: `<ol>
<li><strong>출국일 = 도착일로 오해</strong> — 인천 23:00 출발 미주편은 한국 시간 기준 다음 날 새벽 도착이지만, 현지 시각으로는 같은 날 오전. 호텔 예약을 출국일로 잡으면 하루 비는 일이 발생.</li>
<li><strong>왕복 비행시간 동일 가정</strong> — 갈 때와 올 때 비행시간이 1~2시간 다른 노선이 많다(편서풍 영향).</li>
<li><strong>서머타임 무시</strong> — 유럽 여행 중 3월·10월 서머타임 전환 주간은 시차 1시간 바뀐다. 항공편·열차 예약 시각 재확인.</li>
<li><strong>경유 시간 0분 가정</strong> — 환승편 광고에 '8시간'이라고만 적혀 있어도 실제는 경유 4시간 포함 12시간일 수 있다.</li>
<li><strong>도착 현지 시각으로 한국 알람 설정</strong> — 스마트폰 알람이 현지 시각으로 자동 변경되는지 확인. 비행기 모드 해제 시 위치 기반으로 자동 변경되지만, 수동 변경 설정이면 어긋난다.</li>
</ol>`
    },

    { type: 'h2', id: 'pre-departure-checklist', text: '출발 전 체크리스트' },
    {
      type: 'body',
      html: `<ul>
<li>☐ 출발·도착 공항 코드 정확히 확인</li>
<li>☐ 도착 현지 시각 메모(휴대폰 메모장 + 종이)</li>
<li>☐ 호텔 체크인 시각과 도착 시각 비교</li>
<li>☐ 공항 → 시내 막차 시각 확인</li>
<li>☐ 시차 5시간 이상 지역은 첫날 일정 가볍게</li>
<li>☐ 서머타임 적용 여부 확인</li>
<li>☐ 한국 가족·회사 연락처에 시차 공유</li>
<li>☐ 스마트폰 시간대 자동 변경 설정 ON</li>
<li>☐ 기내 수면용 안대·목베개·귀마개 준비</li>
<li>☐ 멜라토닌(시차증 보조제) 약국 상담 후 휴대</li>
</ul>`
    },

    {
      type: 'callout',
      html: `<strong>편집자 한마디</strong> — 비행시간 30분 차이가 첫날 일정 전체를 바꿉니다. 가격만 보지 말고 '도착 현지 시각'을 항상 확인하세요. 저렴한 새벽 도착편이 결과적으로 호텔 추가 1박 + 택시비 + 컨디션 손실로 더 비싸지는 경우가 많습니다.`
    },

    {
      type: 'faq',
      items: [
        { q: '왕복 비행시간이 다른 이유는?', a: '편서풍(제트기류) 영향입니다. 서→동(한국 → 미주) 비행은 바람을 타고 가서 빠르고, 동→서(미주 → 한국) 비행은 역풍이라 1~2시간 더 걸립니다.' },
        { q: '직항편이 없는 도시는 어떻게 계산하나요?', a: '경유편의 경우 1구간 비행시간 + 경유 대기시간 + 2구간 비행시간을 더해야 합니다. 항공권 검색 사이트의 "총 여행 시간"을 확인하세요.' },
        { q: '시차가 큰 지역 여행 시 회복 기간은?', a: '의학적으로 시차 1시간당 하루 정도가 필요합니다. 미국 동부(14시간)는 약 2주, 단기 여행에서는 적응을 포기하고 한국 시각 기준 컨디션 관리가 현실적입니다.' },
        { q: '서머타임은 매년 같은 날 시작·종료되나요?', a: '국가별로 다릅니다. EU·영국은 3월 마지막 일요일~10월 마지막 일요일, 미국·캐나다는 3월 둘째 일요일~11월 첫째 일요일입니다. 호주는 남반구라 10월~4월이 서머타임입니다.' },
        { q: '괌·사이판·하와이도 시차가 있나요?', a: '괌·사이판은 한국보다 1시간 빠르고(+1), 하와이는 19시간 늦습니다(−19). 하와이는 사실상 한국의 정반대 시간대라 시차 적응이 가장 어려운 지역 중 하나입니다.' },
        { q: '비행기 안에서 자는 게 시차 적응에 도움이 되나요?', a: '도착 현지가 낮이면 기내에서 자두는 게 좋고, 도착이 밤이면 깨어 있다가 도착 후 바로 자는 게 효과적입니다. 도착 시각에 맞춰 수면 패턴을 미리 맞추는 것이 핵심입니다.' }
      ]
    },

    {
      type: 'sources',
      items: [
        { label: '인천국제공항 운항 시간표·항공편 정보', url: 'https://www.airport.kr/ap/ko/dep/depPasInformation.do', org: '인천국제공항공사', accessedAt: '2026-05-14' },
        { label: '세계 표준시·서머타임 정보', url: 'https://www.timeanddate.com/worldclock/', org: 'Time and Date AS', accessedAt: '2026-05-14' },
        { label: '국제민간항공기구(ICAO) 공항·항로 코드', url: 'https://www.icao.int/', org: 'ICAO', accessedAt: '2026-05-14' },
        { label: '외교부 국가·지역 정보', url: 'https://www.0404.go.kr/', org: '대한민국 외교부', accessedAt: '2026-05-14' }
      ]
    },

    { type: 'disclaimer' }
  ]
}