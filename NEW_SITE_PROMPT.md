# NEW_SITE_PROMPT.md — ambitstock 네트워크 신규 사이트 제작용 마스터 프롬프트

> 이 파일은 **새로운 주제의 사이트를 빠르게 스캐폴드**하기 위한 통합 지침입니다.
> healthmoa(건강모아) 제작 시 사용된 원본 프롬프트 + 세션 진행 중 확정된 보강 규칙을 합쳤습니다.
>
> **사용법**
> 1. §1 을 그대로 복사해 `healthmoa` → `{새 사이트명}`, "건강" → `{주제}` 치환
> 2. §2 (모든 사이트 공통 규칙) 은 그대로 유지해 함께 첨부
> 3. Claude Code 새 세션에 프롬프트로 넣고 작업 시작
> 4. 작업 완료 후 해당 사이트 `CLAUDE.md` 에는 §2 요약본을 복사해 영구 운영 규칙으로 고정

---

## §1. 원본 프롬프트 (healthmoa 사례 — 새 사이트 작성 시 치환할 참고 본)

> 아래는 healthmoa 제작 시 사용한 원본 프롬프트 전문입니다. `healthmoa / 건강 / YMYL-Life / 4 엔티티(증상/OTC/영양제/제품) / Medical E-E-A-T` 등 건강 고유 요소는 **§4 도메인별 특수성 표**를 참조해 새 주제의 특수성으로 교체하세요.

---

너는 지금 내 로컬 맥 환경에서 작업하는 수석 프론트엔드/풀스택 엔지니어다.

작업 목표:
- 기존 내 사이트(ambitstock 네트워크)의 허브형 구조를 계승하면서
- 건강 정보/증상 해결/영양제 추천/의약품 가이드를 다루는 `healthmoa` 사이트를 만든다
- 단순 블로그가 아니라 "증상 허브 + 영양제/의약품 DB + 비교/추천 + 계산기 + 커머스 연계" 구조
- 핵심 수익 모델은 AdSense + 쿠팡 파트너스 제휴 + 높은 RPM 확보

중요 원칙:
1. 사이트 전체가 YMYL(Your Money or Your Life) 중 "L(Life)" 카테고리에 해당한다
   → 건강 정보는 Google이 가장 엄격하게 E-E-A-T를 평가하는 영역
   → Medical E-E-A-T(의료 전문성)를 별도 설계할 것
   → 이 부분을 타협하면 아무리 포스트가 많아도 색인도 안 된다
2. 기존 프로젝트(policy, card, property, car)에서 검증된 구조를 먼저 분석하고 재사용
3. 결과물은 "건강모아" 또는 "헬스모아" 이름의 별도 프로젝트 폴더로 구성
4. 대량 포스팅/대량 데이터 입력/SEO 확장이 쉬운 구조
5. 쿠팡 파트너스 제휴 링크 삽입이 각 페이지 자연스럽게 들어가는 구조
6. 코드 수정 전에 먼저 기존 구조 분석 → 재사용/복제/수정 계획 수립 후 작업

=====================================
[건강 도메인 특수성 - 반드시 반영]
=====================================

### 1. YMYL 레벨 판단
- 이 사이트의 거의 모든 페이지가 YMYL "Your Life" 최고 등급
- 잘못된 정보가 사용자 건강에 직접적 해를 줄 수 있다는 전제로 설계
- 의료 정보와 생활 정보를 명확히 구분

### 2. 의료 정보 vs 일반 건강 정보 구분 (핵심)

**Level A - 의료 정보 (가장 엄격)**
- 특정 질병의 진단/치료/예후
- 전문의약품 복용법·부작용·상호작용
- 수술/시술 관련 정보
→ 공식 기관 출처 필수 (식약처, 질병관리청, 대한의학회, PubMed)
→ "의료진 상담 필수" 면책 고정 노출
→ 자의적 결론 금지

**Level B - 일반의약품/건강기능식품 정보 (중간)**
- 약국 구매 가능 일반의약품 (타이레놀, 판피린 등)
- 건강기능식품/영양제
→ 식약처 고시 성분·용법 기준 명시
→ 개인차 언급
→ 쿠팡 파트너스 링크 가능

**Level C - 생활/영양/운동 정보 (상대적으로 완화)**
- 닭가슴살, 단백질 쉐이크, 프로틴바 등 식품
- 운동 보조용품, 헬스장비
- 마사지볼, 안마의자 등 셀프케어 제품
→ 공식 기관 출처 권장이나 필수 아님
→ 커머스 연계 강함
→ 쿠팡 파트너스 수익의 주력 축

### 3. 의료법·표시광고법 준수

- 의약품 효능효과를 단정적으로 서술 금지 ("낫는다" → "도움될 수 있다")
- 건강기능식품은 식약처 인정 기능성 범위 내에서만 효능 언급
- 특정 병원/의료진 추천 광고성 서술 금지
- "치료", "완치" 등 의료행위 단어는 일반 제품에 쓰지 말 것
- 모든 페이지 하단: "본 정보는 의료 행위를 대체하지 않으며, 증상 지속 시 전문의 상담을 권장합니다"

=====================================
[중요 - Medical E-E-A-T 설계]
=====================================

### Experience (직접 경험)
- 증상 경험자 사례는 개인 경험임을 명시 ("실제 복용 후기는 개인차가 있습니다")
- 제품 사용 경험담은 일반 소비재에 한정 (의약품 후기는 위험)

### Expertise (전문성)
- 사이트 운영자/작성자 프로필에 건강 관련 배경 명시
- 직접 의료 전문가 아니라면 "의학정보 큐레이터/정리자" 포지셔닝
  → "의료진 감수"를 허위로 쓰지 말 것. 실제 감수 없으면 거짓
- 공식 자료 출처 2개 이상 필수 (식약처, 질병관리청, KIHASA, 대한의학회 저널, MSD Manual 한국어판 등)

### Authoritativeness (권위)
- 공식 기관으로의 아웃바운드 링크 필수
- 출처 섹션에 URL·기관명·참조일자 명시
- 위키피디아만 참조는 절대 금지

### Trustworthiness (신뢰)
- 제휴 링크는 "쿠팡 파트너스 활동의 일환으로 일정 수수료를 제공받습니다" 고지
- 업데이트 일자 명시
- 면책 문구 (질병, 증상 페이지 전부)
- 개인정보/이용약관 페이지
- 연락처 실존

=====================================
[해야 할 일 - 단계별]
=====================================

### [1] 로컬 파일 구조 분석

- 내 맥의 기존 프로젝트 폴더(policy, card, property, car 중 가용한 것)를 탐색
- 사용 기술 스택 파악
- 라우팅, 데이터 구조, 컴포넌트, 템플릿, SEO 메타 처리 방식 분석
- 특히 아래를 중점 확인:
  - 리스트 페이지 / 상세 페이지 템플릿
  - 카테고리/필터 구조
  - 공통 레이아웃, breadcrumb
  - JSON-LD 구조화 데이터 구현 방식
  - 데이터 파일 포맷 (JSON/TS/MDX)
  - 허브 페이지 구성 방식
  - 내부 링크 전략
  - 도구/계산기 구현 방식 (car, property에서 검증됨)
- 분석 결과를 짧고 명확하게 정리 → healthmoa 전환 계획 제시

### [2] healthmoa 프로젝트 생성

- 기존 프로젝트를 복제 → healthmoa에 맞게 점진적 치환
- 치환 방향:
  - 기존 도메인 엔티티 → "증상", "영양제", "의약품", "건강식품", "운동/셀프케어"
  - 기존 카테고리 → 부위별/증상별/목적별
  - 기존 상세 필드 → 성분·용법·주의사항·상호작용
  - 기존 조건 검증 로직 → 복용 대상/복용 금기 대상 매칭

### [3] 데이터 모델 설계 (4개 엔티티)

데이터 모델은 4개 주요 엔티티로 분리한다. 각 엔티티는 별도 스키마를 가진다.

#### 3-A. Symptom (증상)
```
- slug
- symptomName (예: "편두통", "역류성 식도염")
- nameEn
- bodyPart (머리/목/가슴/복부/허리/관절/피부/눈/귀/코/호흡기/소화기/비뇨기/정신건강)
- severity (low/medium/high/emergency)
- summary (한 문장)
- whatIsIt (증상이란)
- commonCauses (주요 원인 리스트)
- riskFactors (악화 요인)
- homeCare (집에서 해볼 수 있는 대처)
- whenToSeeDoctor (병원에 가야 하는 경우 - 필수 섹션)
- redFlags (응급실 신호 - 필수 섹션)
- relatedConditions (관련 질환, 의학적 단정 피할 것)
- recommendedOtcCategories (권장되는 일반의약품 카테고리)
- recommendedSupplements (권장되는 영양제 카테고리)
- recommendedLifestyle (생활 습관)
- foodsToEat / foodsToAvoid
- faq (5~8개)
- sources (공식 기관 출처)
- disclaimer (증상 전용 면책)
- updatedAt
- medicallyReviewed (boolean - 실제 전문가 검수 여부, 없으면 false)
```

#### 3-B. OTC (일반의약품)
```
- slug
- productName (일반명 + 대표 상품명)
- ingredient (주성분, 식약처 기준 영문/한글)
- dosageForm (정제/캡슐/액제/겔/패치 등)
- classification (식약처 분류)
- manufacturer
- indications (효능효과 - 식약처 표기 그대로)
- dosage (용법용량)
- sideEffects (부작용)
- contraindications (복용 금기)
- drugInteractions (약물 상호작용)
- pregnancyLactation (임산부/수유부 주의)
- pediatricNote (소아 주의)
- storageConditions
- priceRange (대략적 가격대)
- prescription (OTC/전문의약품)
- coupangSearchQuery (쿠팡 검색어)
- relatedSymptoms (이 약이 도움되는 증상 슬러그)
- alternatives (대체 가능 성분 약품)
- comparisonProducts
- faq
- sources (식약처 의약품안전나라 링크)
- disclaimer
- updatedAt
```

#### 3-C. Supplement (영양제/건강기능식품)
```
- slug
- productName
- mainIngredient (주성분)
- functionality (식약처 인정 기능성 - 임의 과장 금지)
- dailyIntake (하루 섭취량)
- targetAudience (권장 대상)
- notRecommendedFor (권장하지 않는 대상)
- bestTimeToTake (복용 시점)
- absorptionTips (흡수 팁)
- sideEffects
- interactions (의약품 상호작용)
- priceRange
- coupangSearchQuery
- comparisonSupplements (같은 기능성의 비교 제품)
- relatedSymptoms
- certifications (건강기능식품 인증 여부)
- foodAlternatives (식품으로 대체 가능한 영양소)
- faq
- sources
- disclaimer
- updatedAt
```

#### 3-D. HealthProduct (일반 건강 제품)
```
- slug
- productName
- category (운동용품/프로틴/다이어트식품/마사지기구/의료기기 등급 등)
- subCategory
- usage (사용법)
- targetUser
- keyFeatures
- priceRange
- coupangSearchQuery / coupangProductLink (있다면)
- comparisonProducts
- buyingGuide
- cautions
- relatedSymptomsOrGoals
- faq
- updatedAt
```

=====================================
[4] 페이지 타입 구현 (MVP)
=====================================

#### A. 홈
- 건강 고민 빠른 검색 (증상 검색 바)
- 자주 찾는 증상 (두통/불면/소화불량/피로/허리통증 등)
- 부위별 진입
- 영양제 카테고리 진입
- 계산기 바로가기
- 최근 업데이트 콘텐츠
- 면책 고지 (푸터)

#### B. 증상 허브 & 상세
- `/symptoms/` - 부위별/증상 검색
- `/symptoms/{slug}/` - 증상 상세
  섹션 순서:
  1. 한눈에 보기 (증상 + 심각도 + 응급 여부)
  2. 증상이란
  3. 주요 원인 (리스트 + 표)
  4. 집에서 해볼 수 있는 대처
  5. **[강조 박스] 병원에 가야 하는 경우**
  6. **[경고 박스] 응급실 즉시 방문 신호**
  7. 추천 일반의약품 카테고리 → 의약품 상세로 내부 링크
  8. 추천 영양제 → 영양제 상세로 내부 링크
  9. 추천 생활습관 / 음식
  10. 관련 건강 제품 (쿠팡 파트너스) → Level C 제품
  11. FAQ
  12. 출처 / 참고 자료
  13. 면책 문구
  14. 관련 증상 / 관련 가이드

#### C. 일반의약품 허브 & 상세
- `/otc/` - 성분별/효능별 진입
- `/otc/{slug}/` - 상세
  섹션:
  1. 한눈에 보기 (성분·가격대·처방여부)
  2. 어떤 증상에 쓰이나
  3. 주성분과 작용
  4. 용법·용량 (식약처 표기)
  5. 주의사항 / 부작용 / 금기 (필수)
  6. 약물 상호작용
  7. 임산부·소아 주의
  8. 비슷한 의약품 비교
  9. FAQ
  10. 쿠팡 검색 링크 (약사 상담 권장 문구 병기)
  11. 출처 (식약처 의약품안전나라)
  12. 면책

#### D. 영양제 허브 & 상세
- `/supplements/` - 기능성별 진입
- `/supplements/{slug}/` - 상세
  섹션:
  1. 한눈에 보기 (주성분·가격대·추천대상)
  2. 어떤 효과가 있나 (식약처 인정 기능성 기준)
  3. 하루 권장 섭취량
  4. 복용 시점 & 흡수 팁
  5. 이런 사람에게 추천 / 비추천
  6. 부작용 / 의약품 상호작용
  7. 비슷한 영양제 비교
  8. 식품으로 대체하기
  9. FAQ
  10. 쿠팡 파트너스 구매 링크 (제휴 고지 병기)
  11. 출처 (식약처 건강기능식품정보)
  12. 면책

#### E. 건강 제품 허브 & 상세
- `/products/` - 카테고리별 (운동/다이어트/셀프케어/의료기기)
- `/products/{slug}/`
  섹션:
  1. 한눈에 보기
  2. 제품 특징
  3. 사용법
  4. 추천 대상
  5. 비슷한 제품 비교
  6. 구매 가이드
  7. 주의사항
  8. FAQ
  9. 쿠팡 파트너스 링크
  10. 관련 증상/목표

#### F. 상황별 허브
- `/situations/headache/` - 머리 아플 때 종합 (증상 + 약 + 영양제 + 생활)
- `/situations/sleep-issue/` - 잠 안 올 때
- `/situations/digestive/` - 소화불량
- `/situations/back-pain/`
- `/situations/eye-strain/` - 눈 피로
- `/situations/immune-boost/` - 면역력
- `/situations/diet/` - 다이어트
- `/situations/muscle-gain/` - 근육량 증가
- `/situations/menopause/` - 갱년기
- `/situations/pregnancy/` - 임신 중 건강
- `/situations/elderly-care/` - 부모님 건강

각 상황별 허브는:
- 관련 증상 페이지 묶음
- 관련 의약품 묶음
- 관련 영양제 묶음
- 관련 제품 묶음
- 가이드 포스트 묶음
으로 구성된 메타 허브 페이지

#### G. 비교 페이지
- `/compare/` - 허브
- `/compare/omega3-brands/` - 오메가3 브랜드 비교
- `/compare/vitamin-d/` - 비타민 D 제품 비교
- `/compare/painkillers/` - 진통제 성분별 비교 (타이레놀 vs 애드빌 vs 게보린 등)
- `/compare/protein-powders/` - 프로틴 비교
- 표 중심 + 결론 분리 + 타겟별 추천

#### H. 계산기 & 도구 (RPM 핵심)
계산기는 이 사이트 단가 상승의 핵심. 최소 8개 이상 구현.

- BMI 계산기
- 기초대사량 계산기
- 일일 권장 칼로리 계산기
- 단백질 권장 섭취량 계산기
- 물 섭취량 계산기
- 철분 결핍 위험도 자가 체크
- 수면 부채 계산기
- 음주 허용 칼로리 계산기
- 당뇨 위험 자가 체크
- 증상 자가 체크리스트 (발열 + 두통 + 등등 입력하면 관련 증상 페이지로 안내)

각 계산기 페이지 구조:
- 계산기 위젯
- 결과 해석
- 관련 영양제 → 쿠팡 링크
- 관련 증상 페이지 링크
- 본문 설명 1500자 이상 (SEO용)
- FAQ
- 면책

#### I. 가이드 (Level A, B, C에 걸친 체계적 기초)
- 일반의약품 안전 복용법
- 영양제 고르는 법
- 건강검진 해석법
- 증상 자가진단 원칙
- 운동 초보 가이드
- 다이어트 원칙
- 수면 위생 가이드
- 각 가이드는 3000자 이상 심화 포스트

=====================================
[5] SEO 구조 (반드시 필요)
=====================================

### 기본 메타
- Title 패턴: `{주제 키워드} {보조 정보} — {사이트명}` (60자 이내)
- Meta Description 155자 이내, 구체적 가치 명시
- Canonical 태그
- Open Graph + Twitter Card
- breadcrumb

### JSON-LD 구조화 데이터 (필수)
- Article (모든 포스트)
- BreadcrumbList (모든 페이지)
- FAQPage (FAQ 섹션 있는 모든 포스트)
- MedicalWebPage (증상, 의약품 페이지) - 의료 페이지용 별도 스키마
- MedicalEntity (증상 페이지의 증상 자체)
- Drug (의약품 페이지)
- HowTo (가이드 포스트)
- Product + AggregateRating (영양제/건강제품 비교)
- WebSite + SearchAction (홈)

### MedicalWebPage 스키마 예시
증상/의약품 페이지는 반드시 MedicalWebPage 스키마로 표기
- lastReviewed 날짜
- reviewedBy (실제 검수가 없으면 사용 금지)
- specialty (의학 분야)
- aspect (예: "Symptom", "Treatment", "Prevention")

### URL 설계
- 소문자 영문 + 하이픈
- `/symptoms/migraine/`
- `/otc/tylenol-acetaminophen/`
- `/supplements/omega-3/`
- `/products/chicken-breast-protein/`
- `/situations/headache/`
- `/compare/painkillers/`
- `/tools/bmi-calculator/`

### 내부 링크 전략
- 증상 → 의약품 / 영양제 / 제품 / 생활 가이드
- 의약품 / 영양제 → 관련 증상 / 상황별 허브
- 상황별 허브 → 모든 관련 상세
- 모든 페이지 → 관련 계산기 최소 1개

### 앵커 포스트 지정
단가 높고 검색량 많은 앵커 포스트 3~5개 설계:
- `/situations/headache/` (두통)
- `/situations/sleep-issue/` (불면)
- `/supplements/omega-3/`
- `/supplements/vitamin-d/`
- `/compare/painkillers/`
→ 사이트 전체가 이 앵커들로 링크를 보내는 구조

### 검색엔진 등록
- Google Search Console (sitemap 제출)
- Naver Search Advisor (건강 검색은 Naver 수요 매우 크다)
- Bing Webmaster Tools
- Daum (Naver와 별도)

### OG 이미지 자동 생성
- 모든 포스트별 OG 이미지 자동 생성 (SVG 또는 Next/Image)
- 이미지 내 핵심 키워드 포함

=====================================
[6] 수익화 구조 (높은 단가 확보)
=====================================

### AdSense 배치
- 포스트 상단 (intro 직후)
- 포스트 중간 (본문 중간 H2 사이)
- 포스트 하단 (FAQ 위)
- 사이드바 (데스크톱)
- H2 바로 아래 광고 금지
- 포스트당 최대 3개

### 쿠팡 파트너스 통합 (핵심 추가 수익)
- 모든 영양제 페이지 하단: "쿠팡에서 보기" 버튼
- 모든 건강 제품 페이지: 추천 제품 카드 3~5개
- 모든 증상 페이지 하단: "관련 추천 영양제/제품" 섹션
- 비교 페이지: 각 제품마다 구매 링크
- 계산기 결과 페이지: 추천 영양제 섹션
- 쿠팡 파트너스 고지 푸터 + 각 링크 근처 노출

### 단가 상승 추가 레버
1. **건강보험/실손보험 관련 콘텐츠**
   - 실손보험 비교, 건강검진 보장 등
   - 이 주제는 한국 AdSense 단가 최상위권
   - `/insurance/` 섹션 별도 개설 검토

2. **건강검진 관련 콘텐츠**
   - 종합건강검진 항목 해설
   - 위/대장 내시경 비교
   - 회사 건강검진 항목 해설
   - 높은 광고 단가 + 병원 광고 유치 가능

3. **프리미엄 건강기능식품**
   - 홍삼, 콜라겐, 프로바이오틱스 등 고가 카테고리
   - 쿠팡 파트너스 커미션이 높음

4. **운동/헬스장 관련**
   - 헬스장 PT 선택법, 홈트 장비 비교
   - 프로틴/BCAA/크레아틴 비교 (고 리피트 카테고리)

### 커머스 제휴 확장 (2단계)
- 쿠팡 외에 다른 건강 플랫폼 제휴 검토
- 다만 1단계에서는 쿠팡 파트너스에만 집중

=====================================
[7] 초기 샘플 데이터 (각 엔티티 최소 기본값)
=====================================

최소:
- 증상 15개 (두통/편두통/소화불량/복통/역류성식도염/불면/피로/어지럼증/요통/무릎통증/눈피로/변비/설사/감기/알레르기)
- 일반의약품 10개 (타이레놀/이지엔6/판콜/게보린/판피린/겔포스/베아제/훼스탈/스멕타/지르텍)
- 영양제 15개 (오메가3/비타민D/마그네슘/프로바이오틱스/루테인/밀크씨슬/아연/코큐텐/철분/종합비타민/홍삼/콜라겐/비타민C/비타민B군/칼슘)
- 건강 제품 10개 (닭가슴살/단백질쉐이크/프로틴바/BCAA/마사지볼/폼롤러/요가매트/전동칫솔/체중계/혈압계)
- 상황별 허브 5개 (두통/불면/다이어트/면역력/눈피로)
- 가이드 3개 (영양제 고르는 법 / 일반의약품 안전 복용 / 다이어트 원칙)
- 계산기 5개 (BMI / 기초대사량 / 단백질 / 물섭취량 / 수면)
- 비교 페이지 3개 (진통제 비교 / 오메가3 브랜드 비교 / 프로틴 비교)

샘플 데이터 작성 시:
- 식약처 공식 표기 기반
- 허위 단정 금지, 모호하면 "검증 필요 TODO" 표시
- 수치는 식약처 고시 범위 내
- 제품명은 널리 알려진 수준에서만

=====================================
[8] 디자인 / UX 원칙
=====================================

- 기존 사이트 UX 강점 유지
- 건강 정보는 "안전감"과 "신뢰감"이 중요. 과하게 화려한 배경·애니메이션 금지
- 정보 밀도는 높되 답답하지 않게
- 표, 태그, 요약 박스, 경고 박스, 응급 박스, 추천 박스 적극 활용
- **경고 박스는 3단계 색상 구분**
  - 파랑: 참고 정보
  - 노랑: 주의 (부작용, 복용 주의)
  - 빨강: 위험 (응급실 신호, 금기)
- 모바일 가독성 우선
- 사용자가 "내 증상/내게 맞는 약/영양제"를 빨리 찾을 수 있어야 함
- 아이콘 과남용 금지

=====================================
[9] 포스팅 구조 MD 템플릿 (반드시 일관되게 생성)
=====================================

매번 같은 결과물이 나오도록 포스팅 타입별 마스터 템플릿을 /templates/ 폴더에 생성:

- `/templates/symptom-template.md` - 증상 포스트
- `/templates/otc-template.md` - 일반의약품 포스트
- `/templates/supplement-template.md` - 영양제 포스트
- `/templates/product-template.md` - 건강제품 포스트
- `/templates/situation-hub-template.md` - 상황 허브
- `/templates/compare-template.md` - 비교 포스트
- `/templates/tool-template.md` - 계산기 포스트
- `/templates/guide-template.md` - 가이드 포스트

각 템플릿은 section-array 컨벤션으로 작성:
```
post = {
  slug, title, description, category, author,
  publishedAt, updatedAt, medicallyReviewed, ymylLevel,
  sections: [
    { type, ... }
  ],
  relatedSlugs: [...],
  sources: [...],
  disclaimer: "..."
}
```

포스트 길이 기준:
- 증상 포스트: 3000자 이상
- 의약품/영양제 상세: 2500자 이상
- 제품 상세: 1800자 이상
- 상황 허브: 2500자 이상
- 비교 포스트: 3500자 이상
- 계산기 페이지 본문: 1500자 이상
- 가이드: 3500자 이상

=====================================
[10] Scaled Content Abuse 회피 규칙
=====================================

건강 주제는 AI 생성 콘텐츠 의심도가 가장 높은 영역. 대량 발행이 독이 된다.

- 하루 최대 5개 포스트 발행 (신규 오픈 2주는 하루 2~4개)
- 동일 카테고리 연속 발행 금지 (증상 3개 연속 X)
- 각 포스트에 고유 정보 1조각 필수 (계산 결과, 비교 표, 실제 경험담, 공식 출처 인용)
- 단순 증상 정의 반복 금지 (각 증상마다 고유한 대처법/예방법 포함)
- 의약품 포스트는 반드시 식약처 링크
- 영양제 포스트는 반드시 식약처 건강기능식품 정보 링크
- 정기적 업데이트 (월 1회 이상 기존 포스트 10개 이상 업데이트)

=====================================
[11] 필수 페이지 (AdSense 심사 + 신뢰)
=====================================

- `/about/` - 사이트 목적 + 운영 주체 + 정보 정책
- `/editorial-policy/` - 편집 정책 (Medical E-E-A-T의 핵심)
  - 정보 출처 기준
  - 의료 정보 검증 절차
  - 업데이트 주기
  - 오류 신고 방법
- `/disclaimer/` - 의료 면책 (일반 이용약관과 별도)
- `/privacy/`
- `/terms/`
- `/contact/` - 실제 작동하는 문의 채널
- `/authors/{slug}/` - 저자 프로필
- `/ads.txt`
- `/robots.txt`
- `/sitemap.xml`
- 쿠팡 파트너스 고지 (푸터 + 관련 페이지)

=====================================
[12] 기술 통합 체크리스트
=====================================

- GA4 연결 (증상/제품 조회, 쿠팡 링크 클릭 맞춤 이벤트)
- Microsoft Clarity (세션 레코딩)
- Google AdSense (ads.txt, 수동 배치)
- 쿠팡 파트너스 (링크 관리 모듈)
- Vercel 배포
- 가비아 도메인 연결
- Supabase (데이터 관리)
- 통계 페이지 (/admin/stats)
- launchd 자동화 (발행 속도 제어 로직 포함)
- ISR 캐싱 전략
- 검색엔진 등록 (GSC + Naver Search Advisor + Bing)

=====================================
[13] 작업 방식
=====================================

단계별로 진행:
1. 기존 사이트 구조 분석
2. healthmoa 프로젝트 복제 / 리네이밍
3. 데이터 모델 4개 엔티티 구현
4. 포스팅 마스터 템플릿 8종 작성
5. 페이지 템플릿 구현 (증상 → 의약품 → 영양제 → 제품 → 상황허브 → 비교 → 계산기 → 가이드 순)
6. 샘플 데이터 입력
7. SEO 메타 / JSON-LD 구현
8. 쿠팡 파트너스 통합 모듈
9. 필수 페이지 (about, editorial-policy, disclaimer 등)
10. 검색엔진 등록 준비
11. 로컬 실행 확인

=====================================
[14] 출력 방식
=====================================

각 단계마다:
1. 현재 파악 내용
2. 수정/생성할 파일
3. 실제 변경 수행
4. 결과 요약
5. 다음 단계

=====================================
중요 사항
=====================================

- 내 로컬 폴더를 직접 탐색해서 실제 구조에 맞게 진행
- 파일명 추측 금지
- 기존 사이트 구조의 강점 유지
- 재사용 가능 컴포넌트는 최대한 재사용
- 건강 정보의 정확성을 절대 타협하지 말 것
- 의료행위를 대체한다는 인상을 주지 말 것
- 모든 단정적 표현 점검 ("낫는다" / "치료된다" 같은 표현 금지)
- 마지막에 로컬 실행 방법 + AdSense 심사 제출 전 체크리스트 정리

=====================================
최종 목표
=====================================

"기존 허브형 구조를 계승하고, Medical E-E-A-T를 갖춘 증상·의약품·영양제·건강제품 통합 DB 사이트 healthmoa를 로컬에서 바로 실행 가능한 상태로 만든다. 검색엔진 상위 노출과 AdSense + 쿠팡 파트너스 수익을 동시에 확보할 수 있는 SEO·UX·법적 요건을 모두 갖춘다."

---

**[보강 지시 — 원본 프롬프트와 함께 전달된 추가 요구]**

- 먼저 기존 프로젝트 폴더(policy/card/property/car 중 가용한 것) 구조를 분석하고 재사용 전략과 전환 계획부터 보여줄 것
- 특히 MD 포스팅 구조를 명확하게 짜내서 매번 같은 결과물의 포스팅을 만들 수 있도록 구조화 설계
- 기존 사이트들이 SEO 관점에 신경쓴 요소들을 모두 적용
- 기존 구조 중 부족한 부분이 있다면 추가로 작업하여 반영 가능
- 앞으로 이렇게 사이트를 만드는 것을 반복 — 현재 8개 오픈, 100개 목표
- 통계페이지는 car의 `https://car.ambitstock.com/searchAnalytics/` 와 동일한 구조
- 쿠팡파트너스 링크는 sports의 `https://sports.ambitstock.com/admin/` 페이지처럼 어드민에서 관리
- **초기에는 포스팅에 쿠팡파트너스 링크를 넣지는 말고**, 포스팅이 생길 때마다 쿠팡파트너스 넣을만한 데이터를 등록 후 어드민에 띄워주면 사용자가 직접 쿠팡파트너스 링크를 입력하고, 추후에 한번에 포스팅마다 링크를 넣도록 명령
- 확장성 고려
- 사이트 오픈 후 유지보수·추가개발은 다른 세션 — 이 세션은 매 순간 사이트를 만드는 것에 치중
- md 파일 구조도 토큰 사용이 적은 구조로, `CLAUDE.md` 외에 상황별 md 파일을 마련해서 해당 md 를 읽고 만들도록 함

---

# §2. 추가 요구사항 (모든 사이트 공통 — 세션 진행 중 확정)

## 2-1. 세션 역할 분리

- **사이트 세션 (이 세션)**: 해당 사이트 전담. 콘텐츠 생성·유지보수·페이지 수정만.
- **관리자 세션 (별도)**: 사이트 간 전략 조율, 새 사이트 스캐폴드, 공통 규칙 업데이트.
- 각 사이트의 `CLAUDE.md` 첫 줄에 "세션 역할: {site} 전담" 명시.
- 사이트 세션은 다른 사이트를 건드리지 않는다.

## 2-2. 광고 규칙 (자동 삽입 — 포스트 본문에 하드코딩 금지)

렌더러(`components/PostRenderer.js`)가 H2 인덱스에 따라 자동 삽입. 포스트 작성자는 `type: 'ad'` 섹션을 **쓰지 않는다**.

### 포스트 상세 페이지
| 위치 | 컴포넌트 | 형식 | 모바일 |
|---|---|---|---|
| 날짜 ↔ 목차 사이 | `TopAdRow` | 사각 광고 2개 | 1개 |
| 첫 번째 H2 직전 | — | 없음 (본문 진입 저해 방지) | — |
| 두 번째 H2 직전 | `MultiplexAd` | autorelaxed 추천 콘텐츠 | 유지 |
| 세 번째 H2 이후 매 직전 | `AdUnit` | auto 반응형 | 유지 |
| 좌·우 사이드 (1280px+) | `SideAd` | 세로 스카이스크래퍼, position: sticky | 숨김 |

### 리스트/홈/엔티티 허브
- 상단 `TopAdRow` + 좌우 `SideAd` 만
- 본문 중간 광고 없음

### 어드민·검색·searchAnalytics
- 모든 광고 노출 없음 (noindex 유틸)

### Layout props
- `topAd` (기본 true) — 상세 페이지는 false (PostRenderer가 내부에서 처리)
- `sideAds` (기본 true) — 어드민·검색은 false
- `narrow` (기본 false) — 콘텐츠 max-width 축소

## 2-3. 포스팅 디테일화 규칙

매번 같은 깊이로 작성되도록 타입별 분량·구조 기준 강제:

| 타입 | 최소 분량 | 구조 |
|---|---|---|
| 증상 | 3,000자 | H2 ≥ 10 + 각 H2 아래 실질 본문 200자+ |
| 의약품 | 2,500자 | 식약처 표기 그대로 + 상호작용·금기·임산부 섹션 필수 |
| 영양제 | 2,500자 | 식약처 인정 기능성만, 식품 대체 섹션 포함 |
| 제품 | 1,800자 | 특징·사용법·구매 가이드·주의 |
| 상황 허브 | **2,500자 + 인트로 3단락 이상** | **각 H2 아래 H3 3~5개, 각 H3 아래 실질 본문** |
| 비교 | 3,500자 | 대형 비교표 + 항목별 H2 + 타겟별 추천 |
| 계산기 | **본문 1,500자 이상 (위젯 별도)** | 해석·원리·한계·흔한 오해·FAQ |
| 가이드 | 3,500자 | H2 10개 이상, 심화 설명 |

공통 필수:
- 인트로는 한 문단이 아니라 **2~3단락**으로 맥락·독자·이 글의 쓰임새를 설명
- H2 밑에 단순 리스트만 있으면 감점. 실질적 H3 분할 또는 설명 본문 필수
- FAQ 5~8개 (JSON-LD 자동)
- 출처 2개 이상 (공식 기관)
- 의료/법적 면책 섹션 마지막에 항상
- 단정적 효능 표현 금지

## 2-4. 쿠팡 파트너스 플로우

**포스트 본문에 쿠팡 URL을 직접 적지 않는다.**

### 데이터 흐름
```
새 포스트 생성
   → data/coupang-seed.json 에 관련 제품 제안 추가 (coupang_url: null)

어드민 UI에서 시드 일괄 로드
   → Supabase coupang_links 테이블에 INSERT

사용자가 어드민에서 실제 URL 입력
   → coupang_url 채움

포스트 렌더 시점
   → /api/post-links?slug=xxx 호출
   → PostRenderer가 매칭되는 링크를 자동 삽입
      - productSlot 섹션이 있으면 해당 위치
      - 없으면 본문 끝에 "추천 제품" 블록
      - CTA 섹션 텍스트와 product_name 정규화 매칭 시 해당 위치에 CTA 교체
```

### coupang_links 스키마
```sql
- id BIGSERIAL
- product_name TEXT NOT NULL
- category TEXT
- coupang_url TEXT  (NULL 허용 — 값 없으면 렌더 시 무시)
- post_slugs TEXT[] NOT NULL
- notes TEXT
- created_at TIMESTAMPTZ
```

### 금지
- 포스트 `.js` 파일에 쿠팡 URL 실제 값 넣기
- Level A(의료) 페이지에 쿠팡 링크 연결 (처방·안전 이슈)
- 한 포스트에 7개 초과 CTA
- 광고 바로 앞뒤 CTA 배치

## 2-5. MD 구조 (토큰 절약형)

### 항상 로드
- `CLAUDE.md` — 사이트 개요, 작업 원칙, 섹션 타입, 광고 정책, 파일 포인터 (≤300줄)
- `MEMORY.md` — 현재 상태, 포스트 카운트, 앵커 포스트, 진행 로그 (≤150줄)
- `docs/{DOMAIN}_ETHICS.md` — 도메인 윤리·법규·E-E-A-T (항상 로드)

### 필요 시 로드
- `docs/DATA_SCHEMA.md` — 엔티티 스키마 레퍼런스
- `docs/SEO_META.md` — 메타·JSON-LD·내부링크 규칙
- `docs/COUPANG_RULES.md` — 쿠팡 운영 규칙
- `docs/WRITE_{TYPE}.md` — 포스트 타입별 작성 규칙
- `templates/{type}-template.md` — 복붙용 섹션 배열 스켈레톤
- `data/{entity}.js` — 엔티티 메타 (신규 slug 충돌 체크)

### 세션 진입 프로토콜
1. 새 세션이 프로젝트 폴더에서 열리면 `CLAUDE.md` 자동 로드
2. `CLAUDE.md` 가 `MEMORY.md` + `docs/{DOMAIN}_ETHICS.md` 로드 지시
3. 사용자 요청 타입에 맞는 `docs/WRITE_*.md` + `templates/*.md` 만 추가 로드
4. 작업 후 `MEMORY.md` "진행 로그" + "포스트 카운트" 업데이트

## 2-6. 컴포넌트·페이지 재사용 맵

healthmoa의 컴포넌트는 대부분 도메인 무관하게 재사용 가능합니다. 새 사이트 작성 시 복제 후 브랜드·컬러만 교체.

### 완전 재사용 (그대로 가능)
- `components/AdUnit.js` (광고 variant: auto/rectangle/vertical/multiplex)
- `components/MultiplexAd.js`
- `components/TopAdRow.js`
- `components/StickySideAds.js`
- `components/Breadcrumb.js`
- `components/PageTracker.js`
- `components/Faq.js`
- `components/CoupangLinks.js`
- `components/PostCard.js`
- `lib/supabase.js`
- `lib/jsonld.js` (SITE 상수만 교체)

### 브랜드·컬러만 교체
- `components/Layout.js` — SITE_NAME, SITE_URL, SITE_DESC, 그라디언트·색상
- `pages/_document.js`, `pages/_app.js`
- `pages/admin/index.js` — 제품 카테고리 목록만 도메인 맞춤
- `pages/searchAnalytics.js` — 그대로 사용 가능
- 법적 페이지 7종 (`about`, `editorial-policy`, `disclaimer`, `privacy`, `terms`, `contact`)

### 도메인별 커스텀 필요
- `components/PostRenderer.js` — 섹션 타입은 공통, 상세 헤더·바디·JSON-LD는 도메인 튜닝
- `components/MedicalBoxes.js` → 도메인 박스 세트 (예: `FinancialBoxes.js` — Info/Warning/Risk/Disclaimer)
- `components/calculators/` — 도메인 맞춤 위젯

### 완전 신규 (도메인별)
- `data/{entity}.js` — 도메인 엔티티
- `posts/{entity}/{slug}.js` — 본문
- `docs/{DOMAIN}_ETHICS.md` — 도메인 윤리
- `docs/WRITE_*.md` — 타입별 작성 규칙

## 2-7. 어드민 + 분석

### `/admin/` (비밀번호 게이트)
- env: `ADMIN_PASSWORD`
- 탭 1: **트래픽 통계** — 오늘/어제/7일/30일 카드 + 유입 채널 + 인기 페이지/키워드
- 탭 2: **쿠팡 링크 관리** — CRUD, 카테고리 필터, 검색, 시드 일괄 로드 버튼, 트래픽 정렬
- 전체 포스트 slug 참조 테이블 (연결 시 참고)

### `/searchAnalytics/` (확장 검색 유입 분석)
- car.ambitstock.com/searchAnalytics 구조 이식
- 기간 프리셋 (오늘/7일/14일/30일/90일)
- 소스별 바 차트, 인기 페이지 TOP15, 인기 키워드 TOP15, 최근 유입 100건
- 같은 `ADMIN_PASSWORD` 공유

### API
| 엔드포인트 | 용도 | 인증 |
|---|---|---|
| `/api/pageview` | 페이지뷰 기록 | 공개 |
| `/api/post-links?slug=` | slug 별 쿠팡 링크 조회 | 공개 |
| `/api/coupang` | 쿠팡 CRUD | 어드민 |
| `/api/stats?type=` | 통계 요약/페이지/키워드/엔진/최근 | 어드민 |
| `/api/admin/seed-coupang` | 시드 JSON → DB 이관 | 어드민 |

### Supabase 마이그레이션
`supabase/migration.sql` 그대로 사용 가능. 두 테이블:
- `coupang_links` (쿠팡 링크 CRUD)
- `pageviews` (페이지뷰 로그)

## 2-8. 필수 법적 페이지 (AdSense 심사)

- `/about/`
- `/editorial-policy/`
- `/disclaimer/` (의료/법률/금융 도메인은 특화 면책 필수)
- `/privacy/`
- `/terms/`
- `/contact/`
- `public/ads.txt` — `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`
- `public/robots.txt` — `admin/`, `api/`, `search`, `searchAnalytics` noindex
- `public/sitemap.xml` — `scripts/generate-sitemap.js` 로 생성

## 2-9. SEO 메타·구조화 데이터

### 기본
- Title ≤ 60자, 핵심 키워드 2개
- Description ≤ 155자, 구체적 가치
- Canonical, OG, Twitter Card
- `trailingSlash: true`

### JSON-LD (도메인 공통)
- `Organization` (Layout)
- `WebSite` + `SearchAction` (Layout)
- `Article` (모든 상세)
- `BreadcrumbList` (모든 페이지)
- `FAQPage` (FAQ 섹션 있으면 자동)

### JSON-LD (도메인 특화)
| 도메인 | 스키마 |
|---|---|
| 건강 | `MedicalWebPage`, `Drug`, `MedicalCondition` |
| 금융 | `FinancialProduct`, `InvestmentOrDeposit` |
| 자동차 | `Vehicle`, `Car`, `Offer` |
| 부동산 | `Residence`, `Accommodation` |
| 쇼핑 | `Product`, `AggregateRating`, `Review` |
| 여행 | `TouristAttraction`, `TravelAction` |

`reviewedBy` (감수자) 는 **실제 감수가 있을 때만** 사용. 허위 금지.

## 2-10. 검증 프로토콜

새 포스트 생성 후:
1. `node --check posts/{entity}/{slug}.js`
2. `data/{entity}.js` 메타 추가 (slug 충돌 체크)
3. 관련 엔티티의 `related*` 배열 업데이트
4. `data/coupang-seed.json` 에 제안 제품 추가
5. `MEMORY.md` 진행 로그 + 포스트 카운트 업데이트

배포 전:
1. `node scripts/generate-sitemap.js`
2. 단정 표현 검색: `grep -r "완치\|즉효\|부작용 없음\|확실히" posts/`
3. 의료 면책 존재 확인: 모든 Level A 포스트에 `medDisclaimer` 섹션
4. `npm run build` 성공 확인

배포 후:
1. Google Search Console — sitemap 제출
2. Naver Search Advisor — 도메인 등록
3. Bing Webmaster Tools — URL 제출
4. IndexNow (선택) — 실시간 색인 요청

---

# §3. 새 사이트 킥오프 단계

1. 사이트 폴더 생성: `/Users/lee/Desktop/Project/{site-folder}/{site-folder}/`
2. healthmoa 복제 (추천):
   ```bash
   cp -r /Users/lee/Desktop/Project/health/health/* /Users/lee/Desktop/Project/{new}/{new}/
   rm -rf /Users/lee/Desktop/Project/{new}/{new}/.next
   ```
3. 브랜드 치환:
   - `package.json` `name`
   - `CLAUDE.md` "프로젝트 개요" (1절)
   - `components/Layout.js` `SITE_NAME`, `SITE_URL`, `SITE_DESC`, 그라디언트 컬러
   - `lib/jsonld.js` `SITE`, `SITE_NAME`
   - 법적 페이지 사이트명
   - `public/robots.txt`, `public/og-image.svg`
   - `ads.txt` 실제 pub ID
4. 엔티티 교체:
   - `data/topics.js` — 상위 탭 교체
   - `data/bodyParts.js` → 도메인 taxonomy (예: 자동차면 `segments.js`)
   - `data/{entity}.js` 4~8개 → 도메인 맞춤 엔티티
   - `docs/DATA_SCHEMA.md` 재작성
   - `docs/WRITE_*.md` 재작성
   - `templates/*.md` 재작성
   - `docs/{DOMAIN}_ETHICS.md` 신규 작성
5. 페이지 디렉토리 rename:
   - `pages/symptoms/` → `pages/{entity1}/`
   - 나머지 동일
6. 샘플 콘텐츠 3~5개 (타입별 1~2개) 생성
7. Supabase 새 프로젝트 → `supabase/migration.sql` 실행
8. `.env.local` 작성 (Supabase/AdSense/GA/Clarity/Coupang ID)
9. `npm install && node scripts/generate-sitemap.js && npm run dev`
10. Vercel 연결, 도메인 (가비아 CNAME → cname.vercel-dns.com)
11. Search Console·Naver·Bing 등록

---

# §4. 도메인별 특수성 처리 (§1 건강 특수성 치환 가이드)

healthmoa의 YMYL/의료 E-E-A-T는 건강 고유입니다. 다른 주제의 사이트를 만들 때는 아래 대응표에 따라 조정:

| 도메인 | YMYL 등급 | 핵심 규칙 | 면책 유형 | JSON-LD 특화 |
|---|---|---|---|---|
| 건강 (health) | Life 최고 | 의료법·표시광고법·식약처 | 의료 면책 | MedicalWebPage, Drug |
| 금융·보험 (finance) | Money 최고 | 투자권유 금지·원금보장 표현 금지 | 투자 면책 | FinancialProduct |
| 법률 (legal) | Life 최고 | 자격없는 법률상담 금지 | 법률 면책 | Legal Service |
| 자동차 (car) | Money 중간 | 과장성능·리콜 최신성 | 구매 가이드 면책 | Car, Vehicle |
| 부동산 (property) | Money 최고 | 허위매물·투자권유 제한 | 부동산 면책 | Residence |
| 스포츠·레저 (sports) | 일반 | 도박 연계 금지·안전 기준 | 운동 주의 | SportsActivity |
| 여행 (travel) | 일반 | 여행안전·비자·환율 최신성 | 여행 면책 | TouristAttraction |
| 쇼핑·커머스 (commerce) | Money 중간 | 최저가 표현·가격 기준일 | 구매 가이드 면책 | Product |
| 교육·커리어 (edu) | 일반 | 취업·시험 결과 보장 금지 | 교육 면책 | Course, Organization |
| IT·도구 (tech) | 일반 | 최신 버전·보안 업데이트 | 기술 면책 | SoftwareApplication |

각 도메인별로:
- `docs/{DOMAIN}_ETHICS.md` 작성 (건강의 `MEDICAL_ETHICS.md` 형식을 템플릿으로)
- `components/{Domain}Boxes.js` — 박스 세트 재정의 (의료 대신 금융 위험, 자동차 안전 등)
- `pages/disclaimer.js` 면책 내용 재작성

---

# §5. 출력 방식 (매 단계 공통)

각 단계마다:
1. **현재 파악 내용** — 현 상태 요약
2. **수정/생성할 파일** — 파일 목록 (경로 명시)
3. **실제 변경 수행** — 코드·MD 실제 생성
4. **결과 요약** — 무엇이 바뀌었는지 간단히
5. **다음 단계** — 사용자 확인 후 넘어갈 항목

세션 종료 시:
- `MEMORY.md` 진행 로그 업데이트
- 로컬 실행 방법 + AdSense 심사 제출 전 체크리스트 정리
- 커밋 메시지 제안 (타입: `content`, `fix`, `seo`, `rules`, `feat`, `refactor`, `data`, `med`)

---

# §6. 콜드 스타트 재현성 테스트

새 세션이 처음 들어왔을 때 아래 한 줄로 모든 규칙이 재현돼야 합니다:

```
cd /Users/lee/Desktop/Project/{site}/{site}
cat CLAUDE.md       # 항상 로드 지시 확인
cat MEMORY.md       # 현 상태 확인
cat docs/{DOMAIN}_ETHICS.md   # 도메인 규칙 확인
```

이 세 파일이 §2의 규칙을 모두 담고 있다면 새 세션이 본 프롬프트(NEW_SITE_PROMPT.md) 를 다시 읽지 않아도 동일한 품질로 작업을 이어갈 수 있습니다.

---

**이 프롬프트가 준비되면 새 사이트 제작을 시작하라.
먼저 기존 사이트(healthmoa 포함) 중 가장 가까운 구조를 분석하고,
재사용 전략과 전환 계획부터 보여줄 것.**
