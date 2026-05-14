module.exports = {
  sections: [
    {
      type: 'intro',
      html: `<p>해외여행에서 보조배터리는 더 이상 선택 사항이 아닙니다. 비행기 탑승 게이트 안내, 입국 심사 QR코드, 환승 공항의 와이파이 등록, 호텔 체크인 바우처, 구글맵 길찾기, 우버·그랩 호출, 환율 계산, 번역 앱, 사진 촬영, 가족과의 영상통화까지 — 스마트폰 하나가 멈추는 순간 여행 전체가 정지합니다. 그런데도 출발 전 가장 흔히 놓치는 준비물이 바로 보조배터리입니다.</p><p>처음 유럽 배낭여행을 떠났을 때 5000mAh짜리 슬림 보조배터리를 가져갔다가 오후 3시쯤 완전히 방전돼 숙소 위치를 종이에 메모해뒀던 게 다행이었던 기억이 있습니다. 한국에선 충분했던 용량이 해외에선 데이터 로밍과 지도 앱 때문에 두 배 빠르게 소진된다는 걸 그때 처음 알았습니다.</p><p>이 가이드는 항공 반입 규정(국제민간항공기구 기준 100Wh 이하), 용량별·폼팩터별 선택 기준, 고속충전 규격(USB PD·PPS·QC) 차이, 가격대별 실전 추천, 그리고 출발 전 체크리스트까지 한 번에 정리했습니다. 단정 표현은 피하고, 같은 가격대 안에서 어떤 사용 시나리오에 어느 모델이 어울리는지 비교 관점으로 안내합니다.</p><p>참고로 본 글은 트립스팟 에디터가 직접 사용해본 모델과 공식 사양·인증 정보를 바탕으로 작성했으며, 항공 반입 규정·전기용품 안전 인증(KC) 표기는 출국 시점 기준으로 다시 한 번 확인하시는 걸 권장합니다.</p>`
    },
    { type: 'h2', id: 'why-needed', text: '왜 여행에서 보조배터리가 필수일까' },
    {
      type: 'body',
      html: `<p>국내에서 쓰는 스마트폰 배터리 소모와 해외여행 중 소모는 체감이 전혀 다릅니다. 셀룰러 로밍·낯선 와이파이 자동 스캔·구글맵 지속 사용·번역 카메라·사진 촬영 횟수 증가 — 이 다섯 가지만 합쳐도 평소 대비 1.5~2배 빠르게 방전됩니다.</p><ul><li><b>로밍·셀룰러</b>: 데이터 핸드오프가 잦은 공항·기차역에서 신호 잡으려고 칩이 계속 깨어 있음</li><li><b>지도</b>: 구글맵·네이버지도·시티매퍼가 GPS를 30초마다 호출</li><li><b>카메라</b>: 평소 하루 20장 → 여행 중 200장 이상</li><li><b>번역</b>: 파파고·구글번역 카메라 모드는 CPU·GPU 동시 사용</li><li><b>결제 앱</b>: 페이코·삼성페이·애플페이 NFC 대기로 백그라운드 소모</li></ul><p>실제 측정해보면 오전 9시 100%로 출발한 스마트폰이 오후 1시쯤 30%대로 떨어지는 경우가 흔합니다. 호텔 체크인 전까지 6~8시간을 더 버텨야 하니 보조배터리는 사실상 필수 장비입니다.</p><p>특히 다음 상황에선 용량 부족이 곧 위기로 이어집니다 — 야간 도착 항공편, 환승 대기 시간이 긴 일정, 캠핑·트레킹·자전거 투어, 페스티벌·콘서트 일정, 가족 동반 여행(여러 명이 한 배터리를 돌려쓰는 경우).</p>`
    },
    { type: 'h2', id: 'capacity-guide', text: '용량별 선택 — 10000 vs 20000 vs 27000mAh' },
    {
      type: 'body',
      html: `<p>보조배터리 선택의 첫 단추는 용량입니다. 같은 mAh라도 셀 효율·전압 변환 손실에 따라 실 사용량은 다르지만, 일반적으로 표기 용량의 약 60~70%가 실제 스마트폰 충전에 쓰입니다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">용량</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">스마트폰 충전 횟수</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">무게</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">추천 시나리오</th></tr></thead><tbody><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">10000mAh</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 1.8~2회</td><td style="padding:8px 10px;border:1px solid #CBD5E1">180~220g</td><td style="padding:8px 10px;border:1px solid #CBD5E1">1~3일 단기여행, 1인 사용</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">20000mAh</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 3.5~4회</td><td style="padding:8px 10px;border:1px solid #CBD5E1">340~400g</td><td style="padding:8px 10px;border:1px solid #CBD5E1">5일+ 여행, 1~2인 공유</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">27000mAh</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 5~6회</td><td style="padding:8px 10px;border:1px solid #CBD5E1">500~600g</td><td style="padding:8px 10px;border:1px solid #CBD5E1">노트북 병행, 가족여행, 캠핑</td></tr></tbody></table><p>실제로 처음 보조배터리를 살 때 무조건 큰 용량이 좋다고 생각해 27000mAh를 골랐는데, 백팩이 너무 무거워져서 다음 여행부터는 10000mAh 두 개로 나눠 들고 다닙니다. 한 개를 충전기에 꽂아두고 다른 하나를 사용하는 식이 의외로 효율적이었습니다.</p><warning title="항공 반입 규정"><p>국제 항공 표준상 보조배터리는 위탁수하물 불가, 기내 휴대만 가능합니다. 용량은 와트시(Wh) 기준 100Wh 이하 자유 휴대, 100~160Wh는 항공사 사전 승인, 160Wh 초과는 반입 금지가 일반적입니다. 27000mAh @ 3.7V ≒ 99.9Wh로 대부분 통과되지만, 라벨에 Wh 표기가 없으면 게이트에서 제지될 수 있으므로 출국 전 표기 여부 확인이 필요합니다.</p></warning>`
    },
    { type: 'h2', id: 'fast-charging-standards', text: '고속충전 규격 — USB-PD·PPS·QC 차이' },
    {
      type: 'body',
      html: `<p>같은 20000mAh라도 충전 속도는 천차만별입니다. 핵심은 보조배터리가 지원하는 고속충전 프로토콜과, 본인 스마트폰이 받아들이는 규격이 일치하는가입니다.</p><ul><li><b>USB PD (Power Delivery)</b>: 업계 표준. 18W·20W·30W·45W·65W·100W 단계로 출력. C타입 케이블 필수. 아이폰·아이패드·맥북·갤럭시 호환</li><li><b>PPS (Programmable Power Supply)</b>: PD 3.0 확장 규격. 전압을 20mV 단위로 미세 조정. 삼성 갤럭시 슈퍼패스트차징(25W·45W)이 PPS 기반</li><li><b>QC (Quick Charge)</b>: 퀄컴 규격. QC 3.0·QC 4+ 단계. 안드로이드 폰·태블릿에 폭넓게 사용</li><li><b>SCP·VOOC·SuperVOOC</b>: 화웨이·오포·원플러스 등 자체 규격. 보통 한국에선 사용 빈도가 낮음</li></ul><p>아이폰 15·16 사용자라면 USB PD 20W 이상이면 충분하고, 갤럭시 S22 이상 사용자라면 PPS 25W·45W 지원 모델을 고르는 게 충전 속도 차이를 체감할 수 있습니다. 노트북까지 충전하려면 PD 65W 이상이 필요합니다.</p><info title="실측 차이"><p>아이폰 15 Pro를 0%에서 50%까지 충전할 때 — PD 20W 보조배터리는 약 25~28분, 일반 5W 출력은 약 1시간 10분. 두 시간 자유시간이 있는 환승 공항에서 30분 만에 절반을 채울 수 있다는 건 여행 동선에서 굉장히 큰 차이입니다.</p></info>`
    },
    { type: 'h2', id: 'form-factor', text: '폼팩터별 추천 — 슬림·맥세이프·일체형 케이블' },
    {
      type: 'body',
      html: `<p>보조배터리는 용량·출력만큼이나 폼팩터(형태)가 사용 만족도를 좌우합니다. 자주 들고 다니는 사람일수록 무게·두께·휴대성이 핵심입니다.</p><h3 id="slim-type">슬림형 (얇고 가벼움)</h3><p>10000mAh 기준 180g 전후, 두께 12mm 이하. 코트 안주머니·작은 클러치에도 들어가고 일상 휴대용으로 적합합니다. 단점은 출력이 PD 20~22.5W 수준에 그치는 경우가 많고, 노트북 충전은 어렵습니다.</p><h3 id="magsafe-type">맥세이프·무선충전형</h3><p>아이폰 사용자가 케이블 없이 등에 붙여 쓰는 타입. Apple MagSafe 정식 인증(7.5W) 또는 호환(15W) 두 종류가 있습니다. 가방에 손이 자유로워지는 장점이 크지만, 무선 효율 한계로 같은 용량이라도 실제 충전량이 약 20~30% 줄어듭니다.</p><h3 id="built-in-cable">일체형 케이블 타입</h3><p>본체에 C타입·라이트닝 케이블이 달려 있어 별도 케이블 휴대가 필요 없습니다. 케이블 분실·꼬임 스트레스가 사라지는 게 큰 장점입니다. 단, 케이블이 단선되면 통째로 교체해야 합니다.</p><h3 id="multi-port">다중 포트형</h3><p>USB-A 1~2개 + USB-C 1개 구성. 일행 2~3명이 동시에 충전할 때 유용합니다. 단, 총 출력이 분산되므로 한 대만 꽂았을 때보다 충전 속도가 느려질 수 있다는 점은 알아두면 좋습니다.</p>`
    },
    { type: 'h2', id: 'airline-rules', text: '항공 반입 규정 완전 정리' },
    {
      type: 'body',
      html: `<p>여행 중 가장 자주 발생하는 사고가 보안검색대에서 보조배터리 반입 거부입니다. 출국 전 다음 세 가지를 반드시 확인합니다.</p><ul><li><b>Wh(와트시) 표기 필수</b>: 라벨에 Wh가 인쇄돼 있어야 합니다. mAh만 적혀 있고 Wh가 없으면 일부 항공사에서 반입 거부 사례가 있습니다.</li><li><b>100Wh 이하</b>: 일반 자유 휴대. 1인당 보유 개수 제한이 있을 수 있어 항공사 약관 확인 필요</li><li><b>100~160Wh</b>: 사전 신고·승인 후 1인 2개까지 휴대 일반</li><li><b>위탁수하물 절대 불가</b>: 트렁크에 넣지 마세요. 발견 시 트렁크 전체 검색이 진행됩니다</li><li><b>훼손·부풀음·찌그러짐</b>: 외관에 손상이 보이면 반입 거부 가능성 높음</li></ul><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">mAh</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">Wh 환산(3.7V 기준)</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">기내 반입 여부</th></tr></thead><tbody><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">10000mAh</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 37Wh</td><td style="padding:8px 10px;border:1px solid #CBD5E1">자유 휴대</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">20000mAh</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 74Wh</td><td style="padding:8px 10px;border:1px solid #CBD5E1">자유 휴대</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">27000mAh</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 99.9Wh</td><td style="padding:8px 10px;border:1px solid #CBD5E1">자유 휴대(여유 거의 없음)</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">30000mAh</td><td style="padding:8px 10px;border:1px solid #CBD5E1">약 111Wh</td><td style="padding:8px 10px;border:1px solid #CBD5E1">사전 승인 필요</td></tr></tbody></table>`
    },
    { type: 'h2', id: 'price-range-recommendation', text: '가격대별 추천 — 3만원·5만원·10만원' },
    {
      type: 'body',
      html: `<p>가격대별로 어떤 사용 시나리오에 어울리는지 정리했습니다. 모델명은 변동이 잦으므로 동일 가격대 안에서 사양 기준으로 비교하시는 걸 권장합니다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">가격대</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">스펙 가이드</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">대표 브랜드</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F1F5F9">추천 사용자</th></tr></thead><tbody><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">2~3만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10000mAh·PD 20W</td><td style="padding:8px 10px;border:1px solid #CBD5E1">샤오미·아이워크</td><td style="padding:8px 10px;border:1px solid #CBD5E1">단기·1인·예비용</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">4~6만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">20000mAh·PD 30W</td><td style="padding:8px 10px;border:1px solid #CBD5E1">앤커·벨킨·아이워크</td><td style="padding:8px 10px;border:1px solid #CBD5E1">중장기·1~2인</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">7~10만원</td><td style="padding:8px 10px;border:1px solid #CBD5E1">20000mAh·PD 65W</td><td style="padding:8px 10px;border:1px solid #CBD5E1">앤커 Prime·UGREEN</td><td style="padding:8px 10px;border:1px solid #CBD5E1">노트북 병행</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">10만원 이상</td><td style="padding:8px 10px;border:1px solid #CBD5E1">25600~27000mAh·PD 100W</td><td style="padding:8px 10px;border:1px solid #CBD5E1">앤커 737·자기 GaNPrime</td><td style="padding:8px 10px;border:1px solid #CBD5E1">디지털 노마드·가족여행</td></tr></tbody></table><p>현지인이 자주 가는 도쿄 요도바시·홍콩 몽콕 전자상가에선 같은 모델이 한국 정가 대비 10~20% 저렴한 경우도 있지만, KC 인증·국내 AS 보증을 고려하면 국내 정식 유통 제품을 추천드립니다.</p>`
    },
    { type: 'h2', id: 'brand-comparison', text: '브랜드별 특성 비교' },
    {
      type: 'body',
      html: `<p>브랜드마다 강조하는 포인트가 다릅니다. 본인 우선순위에 맞춰 선택하시면 됩니다.</p><ul><li><b>앤커(Anker)</b>: 글로벌 시장 1위. 18개월 무상 보증·KC 인증·한국 공식 AS. PowerCore·Prime·MagGo 라인업 다양</li><li><b>샤오미(Xiaomi)</b>: 가성비 최강. 글로벌 모델이라 KC 인증 여부 확인 필요. 본체 디자인 깔끔</li><li><b>벨킨(Belkin)</b>: 애플 공식 협력사. MagSafe 정식 인증 모델 다수. 디자인 프리미엄</li><li><b>아이워크(iWALK)</b>: 일체형 케이블 타입에 강점. 라이트닝·C타입 변환형 인기</li><li><b>UGREEN·바세우스(Baseus)</b>: 중상위 가성비. GaN(질화갈륨) 기반 고출력 모델 호평</li><li><b>자기(Zagi)·로지텍·LG전자</b>: 국내 유통 안정성·AS 편의성 우선 시 고려</li></ul><p>저는 평소 앤커 모델을 메인으로 쓰고, 1박 2일짜리 국내 출장엔 샤오미 10000mAh 슬림형을 따로 둡니다. 두 브랜드 다 1년 이상 써봤는데 큰 차이 없이 잘 작동했습니다.</p>`
    },
    { type: 'h2', id: 'buying-checklist', text: '구매 전 체크리스트' },
    {
      type: 'body',
      html: `<p>온라인에서 보조배터리를 구매하기 전 다음 8가지를 반드시 점검합니다.</p><ul><li>✅ <b>KC 인증 마크</b> 확인 (국내 정식 유통)</li><li>✅ <b>Wh 표기</b> 라벨에 인쇄 (항공 반입 대비)</li><li>✅ <b>PD·PPS 지원</b> 명시 여부 (단순 5V 출력 모델 회피)</li><li>✅ <b>포트 구성</b> (C타입 입출력 가능한지, A타입 몇 개인지)</li><li>✅ <b>패스스루(Pass-through) 충전</b> 지원 — 배터리를 충전하면서 기기 동시 충전 가능</li><li>✅ <b>저전류 모드</b> — 무선 이어폰·스마트워치 같은 저전류 기기 자동 인식</li><li>✅ <b>본체 표시 방식</b> (LED 4단계 vs 디지털 % 표시)</li><li>✅ <b>제조사 보증 기간</b> (12개월 vs 18개월)</li></ul>`
    },
    { type: 'h2', id: 'usage-care', text: '사용법·관리법' },
    {
      type: 'body',
      html: `<p>리튬이온 배터리는 사용 습관에 따라 수명이 크게 달라집니다. 다음 5가지만 지켜도 2~3년은 거뜬합니다.</p><ul><li><b>완전 방전 피하기</b>: 0% 상태로 장기간 보관하면 셀이 비활성화될 수 있음. 50~80% 유지 권장</li><li><b>고온 노출 금지</b>: 여름철 차량 대시보드·트렁크 보관은 발화 위험. 직사광선 회피</li><li><b>충전 중 베개 밑·이불 속 금지</b>: 발열 누적으로 화재 사례 발생</li><li><b>외관 변형 시 즉시 폐기</b>: 부풀어 오르거나 액체 누출 시 절대 사용 금지. 폐건전지 수거함에 분리배출</li><li><b>비행 전 60~80% 충전 권장</b>: 게이트 검사 시 작동 확인 요청이 있을 수 있음</li></ul>`
    },
    { type: 'h2', id: 'real-experience', text: '실사용 후기 — 3개월 비교' },
    {
      type: 'body',
      html: `<p>현지인들이 실제로 권하는 모델은 화려한 광고 모델보다 무난한 베스트셀러인 경우가 많습니다. 도쿄 요도바시 점원이 추천해준 모델, 방콕 차이나타운 전자상가 사장님이 권한 모델 모두 결국 앤커·샤오미의 스테디셀러였습니다.</p><p>3개월간 앤커 PowerCore 20000(PD 30W)·샤오미 30000mAh(PD 18W)·아이워크 라이트닝 일체형 10000mAh 세 가지를 번갈아 써본 인상입니다.</p><ul><li><b>앤커 20000</b>: 무게 380g. 백팩에 넣으면 무겁지만 5일 여행 내내 충전기 없이 버팀. 노트북은 무리</li><li><b>샤오미 30000</b>: 580g. 가족 4인 캠핑에서 폰 3대·태블릿 1대 동시 충전. 비행 반입은 사전 신고 필요해 번거로움</li><li><b>아이워크 10000</b>: 195g. 코트 주머니에 들어감. 라이트닝 일체형이라 케이블 빠뜨리는 사고 0회. 1박 2일 출장 최적</li></ul><p>결론은 "용도별로 다르다"입니다. 한 개로 모든 상황을 해결하려고 하면 결국 어딘가 부족합니다. 메인 20000mAh + 서브 10000mAh 조합이 가장 만족스러웠습니다.</p>`
    },
    { type: 'h2', id: 'cautions', text: '주의사항' },
    {
      type: 'warning',
      title: '꼭 알아둘 것',
      html: `<ul><li>위탁수하물에 절대 넣지 않습니다 — 발각 시 트렁크 전수 조사</li><li>국가별로 휴대 가능 개수 제한이 다릅니다 (중국·인도·중동 일부 항공사 엄격)</li><li>비행 중 좌석에서 충전 시 발열 점검 — 의자 틈에 끼인 채 발화한 사례 있음</li><li>해외 호텔 110V 콘센트 사용 시 본체 입력 전압(보통 5V·9V·12V) 확인. 어댑터에서 직접 220V를 받지 않습니다</li><li>중고 보조배터리 구매는 권장하지 않습니다 — 셀 열화·내부 손상 확인 어려움</li><li>공항 보안검색에서 충전 상태 확인을 요청받을 수 있으니 출국 전 30~50% 충전 권장</li></ul>`
    },
    {
      type: 'callout',
      html: `<p><b>편집자 한마디</b> — 여행 보조배터리는 "한 번 잘 사면 3년 쓴다"의 영역입니다. 무게·용량·출력 세 축에서 본인 여행 스타일을 먼저 정리하고, 그다음 가격대를 보세요. 저는 메인은 앤커 20000mAh PD 30W, 서브는 샤오미 10000mAh 슬림형 조합으로 정착했고, 출장·여행 어느 쪽도 충전 부족을 겪은 적이 없습니다. 가족 여행이라면 30000mAh 한 대를 공유하기보다 10000mAh 두 대로 분산하는 게 동선 효율이 훨씬 좋습니다.</p>`
    },
    {
      type: 'faq',
      items: [
        { q: '아이폰 15 Pro에 가장 적합한 보조배터리 출력은?', a: 'USB PD 20W~30W면 충분합니다. 27W 이상은 큰 차이가 없고 발열만 늘어납니다. 맥세이프 충전을 원한다면 MagSafe 정식 인증(15W) 또는 호환 모델을 선택하세요.' },
        { q: '갤럭시 S24에 슈퍼패스트차징을 쓰려면?', a: 'PPS(Programmable Power Supply) 지원 모델이 필요합니다. PD만 표기된 제품은 25W·45W 슈퍼패스트차징 인식이 안 됩니다. 구매 전 상세 스펙에서 PPS 명시 여부 확인이 필수입니다.' },
        { q: '비행기에 27000mAh 가져가도 되나요?', a: '약 99.9Wh로 100Wh 한도 직전이라 대부분 통과되지만 항공사별 정책 차이가 있고, 라벨에 Wh 표기가 없으면 게이트 거부 사례가 있습니다. 출국 전 라벨 확인이 안전합니다.' },
        { q: '보조배터리는 위탁수하물에 넣으면 안 되나요?', a: '국제 항공 표준상 절대 금지입니다. 위탁수하물 내 리튬이온 배터리는 화재 위험이 높아 발견 시 트렁크 전수 검색이 진행되고, 출발이 지연될 수 있습니다. 반드시 기내 휴대 가방에 넣으세요.' },
        { q: '한 번 충전으로 스마트폰을 몇 번 충전할 수 있나요?', a: '실제 사용 가능량은 표기 용량의 약 60~70%입니다. 10000mAh 보조배터리로 4000mAh 스마트폰을 약 1.8~2회, 20000mAh로 약 3.5~4회 충전 가능합니다.' },
        { q: '보조배터리 수명은 얼마나 가나요?', a: '일반적인 리튬이온 셀 기준 500~800회 완충 사이클입니다. 매일 1회씩 충전한다고 가정하면 약 2~3년. 50~80% 사이에서 사용하면 수명이 더 길어집니다.' }
      ]
    },
    {
      type: 'sources',
      items: [
        { label: '국토교통부 항공위험물 운송기술기준 — 리튬이온 배터리 휴대 규정', url: 'https://www.molit.go.kr/', org: '국토교통부', accessedAt: '2026-05-14' },
        { label: 'IATA 리튬배터리 가이드 (Lithium Battery Guidance Document)', url: 'https://www.iata.org/en/programs/cargo/dgr/lithium-batteries/', org: 'IATA(국제항공운송협회)', accessedAt: '2026-05-14' },
        { label: '한국제품안전관리원 — 전기용품 안전인증(KC) 안내', url: 'https://www.safetykorea.kr/', org: '한국제품안전관리원', accessedAt: '2026-05-14' }
      ]
    },
    { type: 'disclaimer' }
  ]
}