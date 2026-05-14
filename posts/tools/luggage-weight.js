module.exports = {
  sections: [
    {
      type: 'intro',
      html: `<p>공항 카운터에서 짐을 저울에 올려놓는 순간만큼 긴장되는 순간도 없다. 23kg 한도에 22.8kg이 찍히면 안도의 한숨이, 24.5kg이 찍히면 머릿속이 하얘진다. 추가 요금을 낼지, 그 자리에서 캐리어를 열고 짐을 빼낼지 — 출국 30분 전에 결정해야 한다. 처음 해외여행을 갔을 때 인천공항 체크인 카운터에서 캐리어를 열고 옷가지를 백팩에 옮겨 담던 기억이 아직도 생생하다. 그때 알았다. 항공사별 수하물 한도는 단순한 숫자가 아니라 여행의 시작을 좌우하는 변수라는 것을.</p><p>수하물 규정은 항공사마다 천차만별이다. 대한항공·아시아나는 노선과 좌석 등급에 따라 무료 한도가 다르고, LCC(저비용 항공사)는 기본적으로 위탁 수하물이 유료다. 같은 일본 노선이라도 대한항공 일반석은 23kg 1개 무료지만 제주항공은 위탁 수하물 자체가 별도 구매 옵션이다. 출국 전에 항공권 e티켓을 다시 한 번 확인해야 하는 이유가 여기에 있다.</p><p>이 계산기와 비교표는 한국에서 자주 이용하는 9개 항공사를 기준으로 위탁·기내 수하물 한도, 초과 요금, 액체·보조배터리·전자기기 규정을 한 페이지에 정리한 것이다. 출국 전날 짐을 꾸리면서, 또는 공항 가는 길 차 안에서 빠르게 확인할 수 있도록 설계했다. 무게 초과 시 추가 요금이 항공권 가격의 30~50%까지 나오는 경우가 있으니, 미리 알고 가는 것이 곧 돈을 아끼는 길이다.</p><p>현지인 친구 한 명은 "LCC 타고 동남아 갈 때 일부러 캐리어 2개 들고 가서 추가 수하물을 미리 사는 게 더 싸다"고 했다. 실제로 진에어·제주항공은 사전 예약 시 위탁 수하물 1개 추가에 2~4만원, 공항 카운터에서 사면 4~8만원이다. 한 번의 계산이 5만원을 좌우한다.</p>`
    },
    { type: 'h2', id: 'why-it-matters', text: '왜 짐 무게 계산이 중요한가' },
    {
      type: 'body',
      html: `<p>수하물 초과 요금은 여행 예산을 가장 빠르게 깎아먹는 항목 중 하나다. 인천-도쿄 왕복 항공권을 30만원에 샀는데, 짐이 5kg 초과되어 양방향 합산 8만원의 추가 요금을 낸다면 항공권의 27%가 추가로 나간 셈이다. 더 문제는 공항 카운터에서 처음 알게 된다는 점이다. 미리 알았다면 빼놓을 수 있었던 짐을, 어쩔 수 없이 비싼 요금을 내고 부치게 된다.</p><ul><li><strong>예산 보호</strong> — 항공사별 한도를 미리 알면 가방 무게 분산 가능</li><li><strong>시간 절약</strong> — 카운터에서 짐 다시 싸는 시간(15~30분) 절약</li><li><strong>스트레스 감소</strong> — 출국 직전 당황·재정리 상황 회피</li><li><strong>가족 여행 시 합산 활용</strong> — 일부 항공사는 동반 승객 수하물 합산 허용</li><li><strong>LCC 사전 예약 할인</strong> — 공항보다 온라인 사전 결제가 30~50% 저렴</li></ul><p>출국 1주일 전에 가정용 저울로 캐리어를 미리 재보는 것이 좋다. 욕실 체중계로 본인이 캐리어를 들고 올라가서 무게를 측정한 뒤, 본인 체중을 빼는 방식이 가장 정확하다.</p>`
    },
    { type: 'h2', id: 'how-to-use', text: '계산기 사용법' },
    {
      type: 'body',
      html: `<p>짐 무게 계산은 3단계로 이루어진다.</p><ol><li><strong>1단계: 항공사·좌석 등급 확인</strong> — 항공권 e티켓의 "Baggage Allowance" 항목 확인. 같은 항공사라도 일반석·프리미엄·비즈니스에 따라 다름</li><li><strong>2단계: 노선별 한도 확인</strong> — 국내선/단거리 국제선(아시아)/장거리 국제선(미주·유럽·대양주)에 따라 한도 차이 존재</li><li><strong>3단계: 짐 분류·계량</strong> — 위탁 수하물(체크인)과 기내 수하물(캐리온)을 분리해 측정</li></ol><p>주의할 점은 한도가 "1개당 무게"인지 "총 합산 무게"인지다. 대한항공·아시아나는 일부 노선에서 PC(Piece Concept, 개수제)를 적용해 1개 23kg×2개를 허용하고, 다른 노선은 WC(Weight Concept, 무게제)로 총 30kg을 허용한다.</p>`
    },
    { type: 'h2', id: 'korean-airlines', text: '한국 항공사 수하물 한도 (대한항공·아시아나)' },
    {
      type: 'body',
      html: `<p>국적기는 LCC 대비 무료 수하물이 후한 편이다. 일반석 기준 대부분 23kg 1개 또는 2개를 무료로 부칠 수 있다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F8FAFC;text-align:left">항공사</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F8FAFC;text-align:left">노선</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F8FAFC;text-align:left">일반석 위탁</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F8FAFC;text-align:left">기내 수하물</th></tr></thead><tbody><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">대한항공</td><td style="padding:8px 10px;border:1px solid #CBD5E1">국내선</td><td style="padding:8px 10px;border:1px solid #CBD5E1">20kg 1개</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10kg 1개 (55×40×20cm)</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">대한항공</td><td style="padding:8px 10px;border:1px solid #CBD5E1">아시아·중동</td><td style="padding:8px 10px;border:1px solid #CBD5E1">23kg 1개</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10kg 1개</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">대한항공</td><td style="padding:8px 10px;border:1px solid #CBD5E1">미주·유럽·대양주</td><td style="padding:8px 10px;border:1px solid #CBD5E1">23kg 2개</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10kg 1개</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">아시아나</td><td style="padding:8px 10px;border:1px solid #CBD5E1">국내선</td><td style="padding:8px 10px;border:1px solid #CBD5E1">20kg 1개</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10kg 1개</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">아시아나</td><td style="padding:8px 10px;border:1px solid #CBD5E1">아시아·중동</td><td style="padding:8px 10px;border:1px solid #CBD5E1">23kg 1개</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10kg 1개</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">아시아나</td><td style="padding:8px 10px;border:1px solid #CBD5E1">미주·유럽·대양주</td><td style="padding:8px 10px;border:1px solid #CBD5E1">23kg 2개</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10kg 1개</td></tr></tbody></table><p>대한항공·아시아나 모두 비즈니스석은 32kg 2개, 일등석은 32kg 3개까지 허용된다. 스카이패스/아시아나클럽 회원 등급(다이아몬드·플래티늄)에 따라 위탁 수하물 1개 추가 허용 혜택이 있다.</p>`
    },
    { type: 'h2', id: 'lcc-airlines', text: 'LCC(저비용 항공사) 수하물 정책' },
    {
      type: 'body',
      html: `<p>제주항공·티웨이·진에어·에어부산·에어서울 등 한국 LCC는 기본 운임에 위탁 수하물이 포함되지 않는다. 사전 예약 시 추가 비용을 결제해야 부칠 수 있다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F8FAFC;text-align:left">항공사</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F8FAFC;text-align:left">기본 위탁</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F8FAFC;text-align:left">사전 결제 추가</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F8FAFC;text-align:left">기내 수하물</th></tr></thead><tbody><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">제주항공</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음 (일부 운임 15kg)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">15kg ₩25,000~ (단거리)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10kg 1개</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">티웨이</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음 (Easy 운임 15kg)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">15kg ₩30,000~</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10kg 1개</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">진에어</td><td style="padding:8px 10px;border:1px solid #CBD5E1">15kg 1개 (스탠다드)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">5kg 추가 ₩20,000~</td><td style="padding:8px 10px;border:1px solid #CBD5E1">12kg 1개</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">에어부산</td><td style="padding:8px 10px;border:1px solid #CBD5E1">15kg 1개 (정상운임)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">5kg 추가 ₩25,000~</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10kg 1개</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">에어서울</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음 (라이트 운임)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">15kg ₩30,000~</td><td style="padding:8px 10px;border:1px solid #CBD5E1">10kg 1개</td></tr></tbody></table><p>LCC의 핵심 전략은 "사전 결제 할인"이다. 항공권 예약 시점에 위탁 수하물을 추가하면 25,000원~30,000원 수준이지만, 공항 카운터에서 추가하면 동일 무게에 50,000원~80,000원이 청구된다. 짐이 많을 가능성이 있다면 항공권 결제 시 함께 사두는 것이 안전하다.</p>`
    },
    { type: 'h2', id: 'foreign-airlines', text: '주요 해외 항공사 수하물 한도' },
    {
      type: 'body',
      html: `<p>해외 항공사는 노선과 운임 등급에 따라 더 세분화되어 있다. 같은 일본행이라도 ANA·JAL은 23kg 2개, 라이언에어·에어아시아는 7kg 기내 한도만 무료다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F8FAFC;text-align:left">항공사</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F8FAFC;text-align:left">국가</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F8FAFC;text-align:left">일반석 위탁</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F8FAFC;text-align:left">유형</th></tr></thead><tbody><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">ANA</td><td style="padding:8px 10px;border:1px solid #CBD5E1">일본</td><td style="padding:8px 10px;border:1px solid #CBD5E1">23kg 2개</td><td style="padding:8px 10px;border:1px solid #CBD5E1">FSC</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">JAL</td><td style="padding:8px 10px;border:1px solid #CBD5E1">일본</td><td style="padding:8px 10px;border:1px solid #CBD5E1">23kg 2개</td><td style="padding:8px 10px;border:1px solid #CBD5E1">FSC</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">싱가포르항공</td><td style="padding:8px 10px;border:1px solid #CBD5E1">싱가포르</td><td style="padding:8px 10px;border:1px solid #CBD5E1">30kg (WC)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">FSC</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">캐세이퍼시픽</td><td style="padding:8px 10px;border:1px solid #CBD5E1">홍콩</td><td style="padding:8px 10px;border:1px solid #CBD5E1">30kg (WC)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">FSC</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">에어아시아</td><td style="padding:8px 10px;border:1px solid #CBD5E1">말레이시아</td><td style="padding:8px 10px;border:1px solid #CBD5E1">없음 (사전 결제)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">LCC</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">베트남항공</td><td style="padding:8px 10px;border:1px solid #CBD5E1">베트남</td><td style="padding:8px 10px;border:1px solid #CBD5E1">23kg 1개</td><td style="padding:8px 10px;border:1px solid #CBD5E1">FSC</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">에미레이트</td><td style="padding:8px 10px;border:1px solid #CBD5E1">UAE</td><td style="padding:8px 10px;border:1px solid #CBD5E1">25~35kg (운임별)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">FSC</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">델타항공</td><td style="padding:8px 10px;border:1px solid #CBD5E1">미국</td><td style="padding:8px 10px;border:1px solid #CBD5E1">23kg 2개 (한미 노선)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">FSC</td></tr></tbody></table><p>유럽계 LCC(라이언에어·이지젯·위즈에어)는 위탁 수하물 사전 결제가 필수이며, 기내 수하물도 10kg 이내·소형 가방 1개로 엄격히 제한한다. 사이즈 측정 박스에 들어가지 않으면 게이트에서 60~70유로의 추가 요금이 부과된다.</p>`
    },
    { type: 'h2', id: 'restricted-items', text: '액체·보조배터리·전자기기 규정' },
    {
      type: 'body',
      html: `<p>무게뿐 아니라 "기내 반입 가능 여부"도 미리 확인해야 한다. 액체류·보조배터리·라이터는 위탁/기내 구분이 까다롭다.</p><ul><li><strong>액체류(기내 반입)</strong> — 개별 용기 100ml 이하, 총합 1L 이하, 투명 지퍼백 1개에 모아서</li><li><strong>액체류(위탁 가능)</strong> — 화장품·샴푸·세제 등 대용량은 위탁 수하물에 (단, 출국장 면세점 액체는 인천공항 STEB 봉투 사용)</li><li><strong>보조배터리</strong> — 100Wh 이하: 기내 반입 가능, 위탁 금지. 100~160Wh: 항공사 사전 승인 필요. 160Wh 초과: 운송 불가</li><li><strong>리튬배터리 전자기기</strong> — 노트북·카메라·드론은 가능하면 기내 반입 권장 (위탁 시 분실·발화 위험)</li><li><strong>라이터</strong> — 1인당 1개, 본인 소지(주머니)만 허용. 위탁·기내 가방 모두 금지</li><li><strong>액체 면세품</strong> — 환승 시 STEB 봉투 미개봉 상태로만 통과 가능</li></ul><p>중국·홍콩 환승의 경우 액체 규정이 더 엄격해, 한국 출국장 면세점에서 산 위스키도 환승 보안검색에서 압수될 수 있다. 환승 노선을 이용한다면 액체류는 위탁 수하물에 넣는 것이 안전하다.</p>`
    },
    { type: 'h2', id: 'overweight-fees', text: '한도 초과 시 추가 요금' },
    {
      type: 'body',
      html: `<p>추가 요금은 항공사·노선·구간별로 다르지만, 일반적으로 다음과 같다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F8FAFC;text-align:left">구분</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F8FAFC;text-align:left">단거리 (한·일·중)</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F8FAFC;text-align:left">중거리 (동남아)</th><th style="padding:8px 10px;border:1px solid #CBD5E1;background:#F8FAFC;text-align:left">장거리 (미주·유럽)</th></tr></thead><tbody><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">초과 1kg당 (FSC)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">₩10,000~15,000</td><td style="padding:8px 10px;border:1px solid #CBD5E1">₩15,000~20,000</td><td style="padding:8px 10px;border:1px solid #CBD5E1">₩30,000~50,000</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">추가 가방 1개 (FSC)</td><td style="padding:8px 10px;border:1px solid #CBD5E1">₩100,000~</td><td style="padding:8px 10px;border:1px solid #CBD5E1">₩150,000~</td><td style="padding:8px 10px;border:1px solid #CBD5E1">₩250,000~</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">LCC 공항 추가</td><td style="padding:8px 10px;border:1px solid #CBD5E1">₩50,000~70,000</td><td style="padding:8px 10px;border:1px solid #CBD5E1">₩60,000~80,000</td><td style="padding:8px 10px;border:1px solid #CBD5E1">해당 없음</td></tr><tr><td style="padding:8px 10px;border:1px solid #CBD5E1">LCC 사전 결제</td><td style="padding:8px 10px;border:1px solid #CBD5E1">₩25,000~30,000</td><td style="padding:8px 10px;border:1px solid #CBD5E1">₩30,000~40,000</td><td style="padding:8px 10px;border:1px solid #CBD5E1">해당 없음</td></tr></tbody></table><p>장거리 노선의 1kg 초과 요금이 5만원에 달한다는 사실은 잘 알려져 있지 않다. 미국·유럽 출국 시 3kg 초과되면 15만원 — 차라리 가방을 1개 더 사서 부치는 게 싸다. 특히 미주 노선은 23kg 2개가 기본이지만 일부 운임은 1개만 무료라, 항공권 운임 클래스(L·V·Q·H 등)를 확인하는 것이 필수다.</p>`
    },
    { type: 'h2', id: 'packing-tips', text: '짐 줄이기 실전 팁' },
    {
      type: 'body',
      html: `<p>한도 안에 맞추려면 무게 분산 전략이 필요하다. 처음 장기 여행을 갔을 때 23kg 한도에 24.7kg가 나와서 카운터 앞에서 짐을 정리했다. 그때 깨달은 건 "기내 수하물은 무게보다 크기 검사가 더 느슨하다"는 것이었다.</p><ul><li><strong>기내 가방에 무거운 것</strong> — 책·노트북·카메라·신발은 기내 가방으로 이동 (기내 가방은 보통 무게 측정을 안 함)</li><li><strong>옷은 입고 탑승</strong> — 두꺼운 패딩·신발·후드는 비행 중 입거나 들고 탑승</li><li><strong>여행용 압축팩 활용</strong> — 부피 30~40% 감소, 무게는 동일하나 빈 공간 확보로 짐 재배치 용이</li><li><strong>현지 구매 가능한 건 안 가져가기</strong> — 세면도구·우산·간식은 현지 마트가 더 쌈</li><li><strong>가족 합산 활용</strong> — 대한항공·아시아나 일부 노선은 동반 승객 수하물 합산 허용 (1인 16kg + 1인 30kg = OK)</li><li><strong>택배 발송 검토</strong> — 10kg 이상 초과 시 EMS·페덱스가 추가 수하물보다 쌀 수 있음</li></ul><p>현지인 가이드가 말하길 "여행 끝나면 돌아오는 짐이 더 무거워진다 — 기념품·면세품 때문에. 출국 때 한도의 80%만 채우는 게 정석"이라고 했다. 5kg 정도 여유를 두는 것이 안전하다.</p>`
    },
    { type: 'h2', id: 'common-mistakes', text: '자주 묻는 실수' },
    {
      type: 'body',
      html: `<p>출국 카운터에서 가장 자주 나오는 실수 5가지다.</p><ol><li><strong>"왕복인데 갈 때는 됐는데 올 때 안 됐어요"</strong> — 출발지·도착지 국가의 항공사 정책이 다를 수 있고, 환승 항공사가 다르면 더 엄격한 쪽 기준 적용</li><li><strong>"보조배터리를 위탁 가방에 넣었어요"</strong> — 검색에 걸리면 가방 다시 열어야 함. 보조배터리는 반드시 기내 가방으로</li><li><strong>"LCC인데 짐 한도 23kg인 줄 알았어요"</strong> — LCC 기본은 15kg, 그것도 사전 결제해야 함. e티켓 재확인 필수</li><li><strong>"기내 가방 무게는 안 잰다고 들었는데"</strong> — 유럽계 LCC(라이언에어·위즈에어)는 게이트에서 측정. 한국 LCC는 보통 안 재나 만석 시 측정 사례 있음</li><li><strong>"환승 시 짐 추가 가능한 줄 알았어요"</strong> — 인천에서 부친 짐은 최종 목적지까지 전 구간 동일 한도. 환승지에서 짐 다시 안 받음</li></ol><p>가장 안전한 방법은 출국 1주일 전에 항공사 공식 앱·홈페이지에서 본인 항공권의 "수하물 정보"를 캡처해두는 것이다. 카운터에서 직원과 다툼이 생겨도 본인 항공권의 한도를 명확히 보여줄 수 있다.</p>`
    },
    { type: 'h2', id: 'caution', text: '주의사항·면책' },
    {
      type: 'warning',
      title: '한도·요금은 변경될 수 있습니다',
      html: `<p>본 비교표는 2026년 5월 기준 각 항공사 공식 홈페이지의 일반 운임 정책을 정리한 것입니다. 실제 적용 한도와 요금은 다음 요인에 따라 달라질 수 있습니다.</p><ul><li>항공권 운임 클래스(L·V·Q·H 등) — 같은 일반석 내에서도 운임 등급별로 한도 상이</li><li>여정 환승 여부 — 환승 항공사가 다르면 더 엄격한 쪽 기준 적용</li><li>마일리지 회원 등급 — 스카이패스/아시아나클럽/스타얼라이언스 골드 등</li><li>여행 출발일 — 항공사 정책 변경(통상 6개월 전 공지)</li><li>특수 수하물(스포츠 장비·악기·휠체어) — 별도 규정 적용</li></ul><p>본 정보는 일반적인 참고용입니다. 출국 전 반드시 본인 항공권 e티켓의 "Baggage Allowance" 항목과 항공사 공식 홈페이지에서 최신 정보를 확인하시기 바랍니다.</p>`
    },
    {
      type: 'callout',
      html: `<p><strong>📋 출국 전 체크리스트</strong></p><ul><li>☐ 항공권 e티켓에서 위탁·기내 수하물 한도 확인</li><li>☐ LCC라면 사전 결제 위탁 수하물 추가 여부 결정 (공항보다 30~50% 저렴)</li><li>☐ 보조배터리는 기내 가방, 액체류는 위탁 가방으로 분류</li><li>☐ 캐리어 무게 미리 측정 (한도의 80% 권장 — 귀국 시 짐 늘어남 대비)</li><li>☐ 기내 수하물 사이즈 측정 (55×40×20cm 기준)</li><li>☐ 환승 노선이면 환승 항공사의 더 엄격한 기준 확인</li><li>☐ 노트북·카메라·중요 약품은 기내 가방으로 분리</li></ul><p>이 체크리스트만 따라가면 공항 카운터에서 당황할 일이 90% 줄어든다. 한 번의 5분 점검이 5만원을 아끼는 셈이다.</p>`
    },
    {
      type: 'faq',
      items: [
        {
          q: '대한항공·아시아나는 무료 수하물 한도가 같은가요?',
          a: '대부분의 노선에서 동일합니다. 일반석 기준 아시아·중동 노선은 23kg 1개, 미주·유럽·대양주 노선은 23kg 2개입니다. 다만 코드셰어편(공동운항)이거나 운임 클래스가 낮은 특가 항공권의 경우 한도가 달라질 수 있으니 e티켓에서 정확한 한도를 확인하세요.'
        },
        {
          q: 'LCC에서 위탁 수하물을 사전 결제하지 않으면 어떻게 되나요?',
          a: '공항 카운터에서 추가로 구매하면 사전 결제 대비 1.5~2배의 요금이 부과됩니다. 예를 들어 제주항공 일본 노선 15kg 위탁이 사전 결제 시 25,000원이라면, 공항에서는 40,000~50,000원이 청구됩니다. 짐이 있을 가능성이 조금이라도 있다면 항공권 결제 시 함께 구매하는 것이 안전합니다.'
        },
        {
          q: '보조배터리 용량 제한은 어떻게 계산하나요?',
          a: 'Wh(와트시) 단위로 계산합니다. mAh × V ÷ 1000 = Wh입니다. 일반적인 20,000mAh 보조배터리(3.7V)는 약 74Wh로 100Wh 이하라 기내 반입 가능합니다. 100Wh 초과 160Wh 이하는 항공사 사전 승인 후 최대 2개까지, 160Wh 초과는 운송 불가입니다. 위탁 수하물에는 절대 넣을 수 없습니다.'
        },
        {
          q: '한도 초과 시 그 자리에서 짐을 빼면 환불받나요?',
          a: '한도 안으로 들어오면 추가 요금은 부과되지 않습니다. 다만 빼낸 짐을 보관할 곳이 없으면 곤란해집니다. 인천공항·김포공항에는 짐 보관 서비스(1일 5,000~15,000원)가 있어 단기 여행이라면 짐 일부를 맡기고 가는 방법도 있습니다.'
        },
        {
          q: '환승 시 수하물 한도는 어떻게 적용되나요?',
          a: '환승 노선의 경우 두 항공사 중 더 엄격한 쪽의 한도가 전체 구간에 적용됩니다. 예를 들어 인천→두바이(에미레이트 30kg)→런던(BA 23kg)일 경우 23kg 기준 적용. 또한 환승지에서 짐을 다시 받지 않으므로 출발지에서 한 번에 최종 목적지 한도에 맞춰 부쳐야 합니다.'
        },
        {
          q: '캐리어 자체의 무게도 한도에 포함되나요?',
          a: '네, 캐리어 자체 무게도 포함입니다. 23kg 한도에 캐리어가 5kg이면 내용물은 18kg만 넣을 수 있습니다. 출장이 잦거나 장기 여행 시에는 2~3kg대의 경량 캐리어(폴리카보네이트 또는 ABS 소재)를 사용하면 내용물을 더 많이 넣을 수 있어 유리합니다.'
        }
      ]
    },
    {
      type: 'sources',
      items: [
        { label: '대한항공 수하물 안내', url: 'https://www.koreanair.com/kr/ko/airport/baggage', org: '대한항공', accessedAt: '2026-05-14' },
        { label: '아시아나항공 수하물 안내', url: 'https://flyasiana.com/C/KR/KO/contents/checked-baggage', org: '아시아나항공', accessedAt: '2026-05-14' },
        { label: '제주항공 수하물 규정', url: 'https://www.jejuair.net/jejuair/kr/guide/baggage_carry.do', org: '제주항공', accessedAt: '2026-05-14' },
        { label: '국토교통부 항공 위험물 운송 규정', url: 'https://www.molit.go.kr/USR/policyData/m_34681/dtl.jsp', org: '국토교통부', accessedAt: '2026-05-14' },
        { label: 'IATA Dangerous Goods Regulations', url: 'https://www.iata.org/en/programs/cargo/dgr/', org: 'IATA', accessedAt: '2026-05-14' }
      ]
    },
    { type: 'disclaimer' }
  ]
}