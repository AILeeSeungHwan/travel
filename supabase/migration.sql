-- ============================================================
-- 여행모아 (travelmoa) — Supabase 마이그레이션
-- Supabase SQL Editor에서 실행
-- ============================================================

-- 1. 쿠팡 파트너스 링크 관리 (Addon 영역 한정)
CREATE TABLE IF NOT EXISTS coupang_links (
  id BIGSERIAL PRIMARY KEY,
  product_name TEXT NOT NULL,
  category TEXT,
  coupang_url TEXT,
  post_slugs TEXT[] NOT NULL DEFAULT '{}',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_coupang_category ON coupang_links(category);
CREATE INDEX IF NOT EXISTS idx_coupang_name ON coupang_links(product_name);
CREATE INDEX IF NOT EXISTS idx_coupang_post_slugs ON coupang_links USING GIN (post_slugs);

-- 2. 호텔스컴바인 어필리에이트 클릭 로그 (수익 핵심)
CREATE TABLE IF NOT EXISTS affiliate_clicks (
  id BIGSERIAL PRIMARY KEY,
  hotel_slug TEXT NOT NULL,
  post_slug TEXT,           -- 클릭이 발생한 페이지 슬러그
  hotelscombined_id TEXT,
  label TEXT,               -- 딥링크의 label 파라미터
  ip TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_aff_hotel ON affiliate_clicks(hotel_slug);
CREATE INDEX IF NOT EXISTS idx_aff_created ON affiliate_clicks(created_at DESC);

-- 2-1. 호텔별 어필리에이트 딥링크 (어드민 관리)
CREATE TABLE IF NOT EXISTS hotel_links (
  id BIGSERIAL PRIMARY KEY,
  hotel_slug TEXT NOT NULL UNIQUE,
  hotel_name TEXT,
  deeplink TEXT,
  hotelscombined_id TEXT,
  notes TEXT,
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_hotellinks_slug ON hotel_links(hotel_slug);

-- 3. 페이지뷰 로그
CREATE TABLE IF NOT EXISTS pageviews (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT NOT NULL,
  title TEXT,
  referrer TEXT,
  source TEXT,              -- google / naver / daum / direct / etc.
  keyword TEXT,
  ip TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_pv_created ON pageviews(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_pv_slug ON pageviews(slug);
CREATE INDEX IF NOT EXISTS idx_pv_source ON pageviews(source);
CREATE INDEX IF NOT EXISTS idx_pv_keyword ON pageviews(keyword) WHERE keyword IS NOT NULL;

-- 4. 이미지 라이선스 메타 (DMCA 대응 — 모든 외부 이미지 일괄 관리)
CREATE TABLE IF NOT EXISTS image_credits (
  id BIGSERIAL PRIMARY KEY,
  page_url TEXT NOT NULL,
  image_url TEXT NOT NULL,
  source TEXT NOT NULL,     -- korea-tour-api / wikimedia / unsplash / pexels / hotelscombined-api / self-og
  license TEXT NOT NULL,
  credit TEXT NOT NULL,
  source_url TEXT,
  alt TEXT,
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_img_page ON image_credits(page_url);
CREATE INDEX IF NOT EXISTS idx_img_source ON image_credits(source);

-- 5. RLS
ALTER TABLE coupang_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE affiliate_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE pageviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE image_credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE hotel_links ENABLE ROW LEVEL SECURITY;

-- 읽기: 누구나 (post-links / image-credits / hotel-link 공개 API)
CREATE POLICY "public_read_coupang"   ON coupang_links   FOR SELECT USING (true);
CREATE POLICY "public_read_image"     ON image_credits   FOR SELECT USING (true);
CREATE POLICY "public_read_hotel"     ON hotel_links     FOR SELECT USING (true);
-- INSERT: 익명 OK
CREATE POLICY "anon_insert_pageview"  ON pageviews       FOR INSERT WITH CHECK (true);
CREATE POLICY "anon_insert_aff_click" ON affiliate_clicks FOR INSERT WITH CHECK (true);

-- 6. 자동 정리(선택) — 120일 초과 페이지뷰 삭제
-- CREATE OR REPLACE FUNCTION delete_old_pageviews() RETURNS void AS $$
--   DELETE FROM pageviews WHERE created_at < now() - INTERVAL '120 days';
-- $$ LANGUAGE sql;
