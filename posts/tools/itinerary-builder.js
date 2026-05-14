module.exports = {
  sections: [
    {
      type: 'intro',
      html: `<p>여행을 떠나기 전 가장 막막한 순간은 '가고 싶은 곳은 많은데 어떻게 묶어야 할지 모르겠다'는 단계입니다. 처음 도쿄를 갔을 때 아사쿠사·시부야·신주쿠·디즈니랜드를 하루에 다 넣었다가, 신주쿠에서 디즈니까지 편도 1시간을 깨닫고 결국 디즈니를 통째로 다음 날로 미뤘던 경험이 있습니다. 그날의 교훈은 단순합니다 — <strong>가고 싶은 곳의 개수보다, 두 점 사이의 이동시간이 일정을 결정한다</strong>는 것입니다.</p><p>여행 일정 빌더는 이 문제를 자동화하는 도구입니다. 가려는 스팟을 차례로 추가하면 GPS 좌표 기반으로 두 지점 간 거리·예상 이동시간·추천 이동수단(도보·지하철·택시)을 계산해, 하루에 들어가는 무게가 적정한지 알려줍니다. 머릿속으로만 짜던 일정을 시각화하면 "오전 3곳·오후 2곳·저녁 1곳"처럼 누구나 동선 낭비 없이 일정을 설계할 수 있습니다.</p><p>이 글은 트립스팟 일정 빌더의 사용법뿐 아니라, '왜 동선이 일정의 핵심인지', '계산이 어긋나는 순간은 언제인지', '도구 없이도 적용할 수 있는 동선 설계 원칙'까지 포괄합니다. 도쿄·방콕·파리·뉴욕 등 도시별 샘플 일정과 함께 자주 묻는 실수 6가지를 정리했습니다.</p><p>출발이 임박했든, 한 달 뒤든 — 일정표를 손에 쥐고 떠나는 여행과 즉흥적으로 움직이는 여행은 만족도가 분명히 갈립니다. 도구를 한 번 돌려보면, 머릿속에서 둥둥 떠다니던 위시리스트가 어느 정도 현실적인지 5분 안에 검증할 수 있습니다.</p>`
    },
    { type: 'h2', id: 'why-needed', text: '왜 일정 빌더가 필요한가' },
    {
      type: 'body',
      html: `<p>여행 만족도를 낮추는 가장 흔한 원인은 '동선 낭비'입니다. 인천공항 → 신주쿠 호텔 체크인 후, 시부야에서 점심 → 다시 신주쿠로 돌아와 휴식 → 저녁에 또 시부야로 — 이런 'A→B→A→B' 동선은 하루에 1~2시간의 교통시간을 추가로 잡아먹습니다. 일정 빌더는 스팟을 좌표 기준으로 정렬해, 같은 권역을 한 번에 묶도록 자동 제안합니다.</p><ul><li><strong>이동시간 가시화</strong> — 머릿속의 '가깝겠지'를 실제 분 단위로 환산</li><li><strong>하루 분량 검증</strong> — 6~7시간 활동·2시간 이동·1~2시간 식사 기준</li><li><strong>예약 우선순위 결정</strong> — 시간 지정 예약(공연·레스토랑)이 동선의 닻이 됨</li><li><strong>대안 동선 비교</strong> — A안·B안을 나란히 띄워 손실시간 비교</li></ul><p>특히 가족·부모님과의 여행이라면 '하루 2만 보 이상 걷기'가 현실적으로 어렵습니다. 빌더에서 도보 거리 합계를 미리 확인하면, 무리한 계획을 사전에 잘라낼 수 있습니다.</p>`
    },
    { type: 'h2', id: 'how-to-use', text: '사용법 — 5단계로 일정 만들기' },
    {
      type: 'body',
      html: `<p>일정 빌더는 다섯 단계로 동작합니다.</p><ol><li><strong>여행지 선택</strong> — 도시·국가를 입력하면 추천 스팟 목록이 표시됩니다.</li><li><strong>스팟 추가</strong> — 가고 싶은 곳을 드래그하거나 검색해 일정에 넣습니다. 영업시간·평균 체류시간·시간 지정 예약 여부가 자동 표시됩니다.</li><li><strong>날짜·순서 배치</strong> — 스팟을 날짜별로 끌어다 놓으면 두 지점 간 이동거리·예상 시간이 즉시 계산됩니다.</li><li><strong>동선 최적화</strong> — '권역 묶기' 버튼을 누르면 좌표 기반 클러스터링으로 하루 안에 묶을 만한 스팟을 그룹화합니다.</li><li><strong>저장·공유</strong> — PDF로 출력하거나 카카오톡·이메일로 동행자에게 공유합니다.</li></ol><p>처음 사용한다면 1일차에 호텔 체크인·근처 식사·가벼운 동네 산책만 넣고, 본격적인 관광은 2일차부터 배치하는 편이 안정적입니다. 도착 당일은 비행기 피로 때문에 빌더가 계산한 '이론상 동선'이 실제로는 안 굴러갑니다.</p>`
    },
    { type: 'h2', id: 'calculation-example', text: '계산 예시 — 도쿄 1일 동선' },
    {
      type: 'body',
      html: `<p>도쿄 1일 일정을 빌더로 짠 예시입니다. 신주쿠 호텔에서 출발해 권역을 묶은 순서입니다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">시간</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">장소</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">활동</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">이동수단</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">소요시간</th></tr></thead><tbody><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">08:30</td><td style="padding:8px 10px;border:1px solid #CBD5E1">신주쿠 호텔</td><td style="padding:8px 10px;border:1px solid #CBD5E1">출발·조식</td><td style="padding:8px 10px;border:1px solid #CBD5E1">JR 야마노테선</td><td style="padding:8px 10px;border:1px solid #CBD5E1">25분</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">09:00</td><td style="padding:8px 10px;border:1px solid #CBD5E1">메이지신궁</td><td style="padding:8px 10px;border:1px solid #CBD5E1">산책·참배</td><td style="padding:8px 10px;border:1px solid #CBD5E1">도보</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10분</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">10:30</td><td style="padding:8px 10px;border:1px solid #CBD5E1">하라주쿠 다케시타도리</td><td style="padding:8px 10px;border:1px solid #CBD5E1">쇼핑·간식</td><td style="padding:8px 10px;border:1px solid #CBD5E1">도보</td><td style="padding:8px 10px;border:1px solid #CBD5E1">15분</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">12:00</td><td style="padding:8px 10px;border:1px solid #CBD5E1">시부야 점심</td><td style="padding:8px 10px;border:1px solid #CBD5E1">라멘·돈카츠</td><td style="padding:8px 10px;border:1px solid #CBD5E1">지하철 1정거장</td><td style="padding:8px 10px;border:1px solid #CBD5E1">5분</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">14:00</td><td style="padding:8px 10px;border:1px solid #CBD5E1">시부야 스크램블·109</td><td style="padding:8px 10px;border:1px solid #CBD5E1">관광·쇼핑</td><td style="padding:8px 10px;border:1px solid #CBD5E1">긴자선</td><td style="padding:8px 10px;border:1px solid #CBD5E1">25분</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">16:00</td><td style="padding:8px 10px;border:1px solid #CBD5E1">아사쿠사 센소지</td><td style="padding:8px 10px;border:1px solid #CBD5E1">사찰·나카미세도리</td><td style="padding:8px 10px;border:1px solid #CBD5E1">도쿄메트로</td><td style="padding:8px 10px;border:1px solid #CBD5E1">20분</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">18:30</td><td style="padding:8px 10px;border:1px solid #CBD5E1">스미다강 야경</td><td style="padding:8px 10px;border:1px solid #CBD5E1">스카이트리 조망</td><td style="padding:8px 10px;border:1px solid #CBD5E1">JR</td><td style="padding:8px 10px;border:1px solid #CBD5E1">35분</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">20:00</td><td style="padding:8px 10px;border:1px solid #CBD5E1">신주쿠 호텔 복귀</td><td style="padding:8px 10px;border:1px solid #CBD5E1">저녁·휴식</td><td style="padding:8px 10px;border:1px solid #CBD5E1">-</td><td style="padding:8px 10px;border:1px solid #CBD5E1">-</td></tr></tbody></table><p>총 활동 7곳 / 이동시간 합계 2시간 15분 / 도보 거리 약 1만 8천 보. 빌더는 '저녁 식사 추가 시 21시 이후 귀가'라는 경고를 함께 띄워, 다음 날 새벽 일정이 있으면 무리라고 안내합니다.</p>`
    },
    { type: 'h2', id: 'sample-bangkok', text: '샘플 — 방콕 1일 (스쿰빗 권역)' },
    {
      type: 'body',
      html: `<p>방콕은 도로 정체가 심한 도시라 동선 설계가 가장 중요한 곳 중 하나입니다. 빌더가 추천하는 방콕 1일 동선은 다음과 같습니다.</p><ul><li><strong>오전</strong> — 왕궁·왓 프라깨우 (8시 오픈 직후 입장, 더위·인파 회피)</li><li><strong>점심</strong> — 차오프라야 강변 보트로 이동 후 강 뷰 레스토랑</li><li><strong>오후</strong> — 짐톰슨 하우스 → 시암 파라곤 (지상철 BTS 연결, 도보 5분)</li><li><strong>저녁</strong> — 아시아티크 야시장 (시암 → 사판탁신 → 셔틀보트)</li></ul><p>방콕의 가장 큰 함정은 '거리는 짧은데 차로는 1시간'인 구간입니다. 빌더는 도로 정체 가중치를 반영해 BTS·MRT·수상버스를 우선 추천합니다. 그랩(택시 앱)은 출퇴근 시간(17~19시)에는 1.5배 시간이 걸리는 것으로 표시됩니다.</p>`
    },
    { type: 'h2', id: 'sample-paris', text: '샘플 — 파리 2일 (좌안·우안 분리)' },
    {
      type: 'body',
      html: `<p>파리는 센강을 기준으로 좌안(리브 고슈)·우안(리브 드루아트)으로 권역을 나누면 동선이 깔끔해집니다.</p><ul><li><strong>1일차 우안</strong> — 루브르 → 튈르리 정원 → 콩코르드 → 샹젤리제 → 개선문 (도보 + 지하철 1호선)</li><li><strong>2일차 좌안</strong> — 오르세 미술관 → 생제르맹 카페 → 노트르담 (외관) → 에펠탑 야경</li></ul><p>빌더는 루브르·오르세 같은 시간 지정 예약 스팟을 일정의 '닻'으로 잡고, 그 시간을 기준으로 앞뒤를 배치합니다. 박물관 예약을 11시로 잡았다면 도착 30분 전부터 줄이 생기기 때문에, 10시 30분에 입구 도착을 기준으로 카페·이동시간을 역산합니다.</p>`
    },
    { type: 'h2', id: 'design-principles', text: '동선 설계 원칙 7가지' },
    {
      type: 'body',
      html: `<ol><li><strong>권역 묶기</strong> — 하루에 두 권역 이상 넘나들지 않는다.</li><li><strong>시간 지정 우선</strong> — 예약 시간이 정해진 곳을 먼저 박아 넣고, 자유 일정은 그 사이를 메운다.</li><li><strong>오전 인기·오후 한적</strong> — 디즈니·박물관은 오전 개장 직후 / 카페·전망대는 오후~저녁.</li><li><strong>식사 권역 매칭</strong> — 식사를 위해 권역을 옮기지 않는다. 권역 내 식당으로 해결.</li><li><strong>도보 거리 합계</strong> — 하루 1만 5천 보 이하 권장. 부모님 동반은 8천 보 이하.</li><li><strong>여유 30분 룰</strong> — 모든 이동시간에 +30% 버퍼.</li><li><strong>마지막 날 가벼움</strong> — 귀국 비행 당일은 호텔 근처 카페·쇼핑만.</li></ol>`
    },
    { type: 'h2', id: 'tip-budget', text: '활용 팁 ① — 예산 자동 합산' },
    {
      type: 'body',
      html: `<p>빌더에 입장료·교통비·식사비 평균값이 미리 입력돼 있어, 일정에 스팟을 추가하면 하루 예상 지출이 자동 합산됩니다. 도쿄 1인 1일 평균치는 입장료·교통 약 4,000엔 / 식사 3끼 약 6,000엔 / 간식·쇼핑 2,000엔 = 12,000엔(약 11만원) 수준. 환율 변동을 반영해 원화로 환산해 표시합니다.</p>`
    },
    { type: 'h2', id: 'tip-share', text: '활용 팁 ② — 동행자 공유·동시 편집' },
    {
      type: 'body',
      html: `<p>친구·가족과 함께 일정을 짠다면 빌더의 '동시 편집' 링크를 공유합니다. 구글 시트처럼 여러 명이 동시에 스팟을 추가·이동시키며 합의할 수 있고, 변경 내역은 실시간으로 표시됩니다. 출발 1주 전 마지막 미팅에서 한 번 같이 돌려보는 것을 추천합니다.</p>`
    },
    { type: 'h2', id: 'tip-offline', text: '활용 팁 ③ — 오프라인 PDF 출력' },
    {
      type: 'body',
      html: `<p>해외에서 데이터 로밍이 끊겼을 때를 대비해 PDF로 일정을 출력해 두면 안전합니다. 각 스팟의 주소·전화번호·구글맵 좌표·영업시간이 함께 인쇄돼 있어, 휴대폰 배터리가 없거나 통신이 끊겨도 종이만으로 이동할 수 있습니다. 인쇄본은 호텔 프론트에 맡겨두기도 좋은 보험입니다.</p>`
    },
    { type: 'h2', id: 'cautions', text: '주의사항 — 빌더가 못 잡아주는 것' },
    {
      type: 'warning',
      title: '계산이 어긋나는 순간',
      html: `<ul><li><strong>지역 축제·연휴</strong> — 도쿄 골든위크·교토 기온마쓰리·태국 송끄란 등 교통량이 평소의 2~3배. 빌더 시간에 +50% 보정.</li><li><strong>도로 통제·시위</strong> — 파리·홍콩 등 시위·집회 일정은 외교부 안전공지로 별도 확인.</li><li><strong>현지 휴무일</strong> — 박물관 월요일 휴무·일요일 영업 제한(독일·스위스). 빌더는 영업시간만 반영하므로 휴무일은 사용자가 확인 필요.</li><li><strong>날씨</strong> — 우천·폭설 시 도보 동선이 30~50% 느려짐. 우비·우산 미준비 시 일정 단축.</li><li><strong>아이·노약자 동반</strong> — 빌더의 도보 평균속도(시속 4km)는 성인 기준. 아이·노약자는 시속 2.5~3km로 보정.</li></ul>`
    },
    { type: 'h2', id: 'common-mistakes', text: '자주 묻는 실수 6가지' },
    {
      type: 'body',
      html: `<ol><li><strong>도착 당일 풀일정</strong> — 비행 피로·시차로 빌더 시간 ×1.5 적용해도 부족.</li><li><strong>식사 시간 과소평가</strong> — 인기 식당은 대기 30~60분. 점심·저녁 각 1.5시간 잡기.</li><li><strong>지하철 환승 누락</strong> — 환승 1회당 평균 5~8분 추가. 도쿄·뉴욕은 더 길다.</li><li><strong>입국 후 SIM·교통카드 시간</strong> — 공항에서 1시간 추가 소요.</li><li><strong>호텔 체크인 시간 위반</strong> — 보통 15시. 그 전 도착 시 짐만 맡기고 외출 권장.</li><li><strong>야간 일정 안전</strong> — 늦은 시간 외곽 이동은 택시 권장. 빌더의 지하철 추천을 무조건 따르지 않는다.</li></ol>`
    },
    { type: 'h2', id: 'compare-tools', text: '다른 일정 도구와의 비교' },
    {
      type: 'body',
      html: `<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">도구</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">강점</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">한계</th></tr></thead><tbody><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">Google My Maps</td><td style="padding:8px 10px;border:1px solid #CBD5E1">지도 시각화 우수</td><td style="padding:8px 10px;border:1px solid #CBD5E1">시간·예산 계산 없음</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">노션 템플릿</td><td style="padding:8px 10px;border:1px solid #CBD5E1">자유 편집</td><td style="padding:8px 10px;border:1px solid #CBD5E1">동선·이동시간 수동 계산</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">트리플·마이리얼트립 일정</td><td style="padding:8px 10px;border:1px solid #CBD5E1">국내 상품 연동</td><td style="padding:8px 10px;border:1px solid #CBD5E1">자유 일정 자동화 약함</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">트립스팟 빌더</td><td style="padding:8px 10px;border:1px solid #CBD5E1">동선·예산 자동·한국어</td><td style="padding:8px 10px;border:1px solid #CBD5E1">실시간 교통 정보 미제공</td></tr></tbody></table><p>각 도구는 강점이 다르므로 병행 사용을 권합니다. 트립스팟 빌더로 동선 골격을 짜고, Google My Maps에 핀을 찍어 시각화하는 조합이 실용적입니다.</p>`
    },
    { type: 'h2', id: 'pro-tips', text: '꿀팁 — 현지인 시선으로 보완하기' },
    {
      type: 'body',
      html: `<p>현지인들이 실제로 이용하는 골목 식당은 빌더의 추천 스팟 목록에 잘 안 잡힙니다. 도착 첫날 호텔 직원에게 "여기서 자주 가는 식당 한두 곳 추천해주세요"라고 묻고, 빌더에 직접 등록(커스텀 스팟)하면 관광지만 도는 동선보다 훨씬 깊은 여행이 됩니다. 트립어드바이저 영어 후기보다 호텔 직원·택시기사의 한 마디가 정확한 경우가 많습니다.</p><p>또 한 가지, 일정을 다 짠 뒤에는 '하루치 활동을 1줄로 요약'해 보세요. "오전 신사·오후 시부야 쇼핑·저녁 야경"처럼 한 문장이 안 나오면 권역이 흩어져 있다는 신호입니다. 이때 빌더의 '권역 묶기' 버튼을 한 번 더 누르면 자동 재배열됩니다.</p>`
    },
    {
      type: 'callout',
      html: `<strong>편집자 한마디</strong> — 일정 빌더는 '완벽한 일정'을 만들어주는 도구가 아닙니다. '비현실적인 일정을 비현실적이라고 알려주는' 도구에 가깝습니다. 출발 전날 빌더가 띄우는 경고("도보 2만 보 / 이동 4시간 / 식사 30분 — 무리")를 무시하지 마세요. 여행에서 가장 값진 것은 더 많이 보는 게 아니라, 본 것을 천천히 음미할 수 있는 여유입니다.`
    },
    {
      type: 'faq',
      items: [
        { q: '빌더 사용에 회원가입이 필요한가요?', a: '기본 일정 작성·동선 계산은 비회원도 가능합니다. PDF 출력·동행자 공유는 무료 회원가입 후 이용할 수 있습니다.' },
        { q: '추천 스팟에 없는 곳을 추가할 수 있나요?', a: '예. 검색해도 안 나오면 "커스텀 스팟 추가"에서 이름·주소·체류시간을 직접 입력하면 좌표가 자동 매칭됩니다.' },
        { q: '실시간 교통 정체도 반영되나요?', a: '현재 버전은 평균 이동시간 기준이며, 실시간 교통은 구글맵·네이버맵으로 출발 직전 재확인을 권합니다.' },
        { q: '여러 도시·국가가 섞인 일정도 만들 수 있나요?', a: '예. 도시별로 탭이 나뉘며, 도시 간 이동(항공·기차)은 별도 섹션에 표시됩니다.' },
        { q: '아이·부모님 동반 일정에 맞는 모드가 있나요?', a: '"가족 모드"를 켜면 도보 평균 속도가 낮아지고, 휴식 시간이 1.5배로 늘어 더 현실적인 일정이 됩니다.' },
        { q: '저장한 일정을 다른 사람에게 보여줄 수 있나요?', a: '예. 공유 링크를 보내면 상대방도 일정을 보고 댓글을 남길 수 있습니다. 수정 권한은 별도 설정 가능합니다.' }
      ]
    },
    {
      type: 'sources',
      items: [
        { label: '한국관광공사 — 여행 콘텐츠 활용 가이드', url: 'https://www.visitkorea.or.kr/', org: '한국관광공사', accessedAt: '2026-05-14' },
        { label: '외교부 해외안전여행 — 국가별 안전공지', url: 'https://www.0404.go.kr/', org: '외교부', accessedAt: '2026-05-14' },
        { label: 'Google Maps Platform — Distance Matrix 문서', url: 'https://developers.google.com/maps/documentation/distance-matrix', org: 'Google', accessedAt: '2026-05-14' }
      ]
    },
    { type: 'disclaimer' }
  ]
}