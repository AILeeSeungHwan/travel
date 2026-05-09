// lib/images.js — 외부 이미지 manifest 조회 헬퍼
// Unsplash·TourAPI 동기화 결과를 페이지에서 사용

let unsplash = {}
let tourapi = { spots: {}, regions: {} }
let hotelImages = {}

try { unsplash     = require('../data/unsplash-images.json') } catch (e) {}
try { tourapi      = require('../data/tourapi-images.json')  } catch (e) {}
try { hotelImages  = require('../data/hotel-images.json')    } catch (e) {}

export function getCountryImage(slug) {
  return unsplash.countries?.[slug] || null
}
export function getRegionImage(countrySlug, regionSlug) {
  // TourAPI 우선(국내), 없으면 Unsplash
  const tour = tourapi.regions?.[`${countrySlug}-${regionSlug}`]
  if (tour && tour.topSpots?.[0]?.mainImage) {
    return {
      url: tour.topSpots[0].mainImage,
      photographer: '한국관광공사',
      photographerUrl: 'https://www.visitkorea.or.kr/',
      sourceUrl: 'https://www.visitkorea.or.kr/',
      license: '공공누리 1유형',
      source: 'korea-tour-api',
      description: tour.topSpots[0].title,
    }
  }
  return unsplash.regions?.[`${countrySlug}-${regionSlug}`] || null
}
export function getSpotImage(countrySlug, spotSlug) {
  const tour = tourapi.spots?.[`${countrySlug}-${spotSlug}`]
  if (tour && tour.mainImage) {
    return {
      url: tour.mainImage,
      gallery: tour.gallery,
      photographer: '한국관광공사',
      photographerUrl: tour.sourceUrl,
      sourceUrl: tour.sourceUrl,
      license: '공공누리 1유형',
      source: 'korea-tour-api',
      description: tour.title,
    }
  }
  return null
}
// 호텔 이미지 — TourAPI(국내) 우선, Unsplash 폴백
export function getHotelImage(slug) {
  const h = hotelImages[slug]
  if (!h) return null
  const isTour = h.source === 'korea-tour-api'
  return {
    mainImage: h.mainImage || h.gallery?.[0]?.url || null,
    gallery: (h.gallery || []).map(g => ({
      url: g.url,
      urlThumb: g.urlThumb || g.url,
      caption: g.caption || h.name || slug,
      source: g.source || h.source,
      license: h.license,
      credit: h.credit,
      creditUrl: h.creditUrl || h.sourceUrl,
      photographer: g.photographer,
      photographerUrl: g.photographerUrl,
      sourceUrl: g.sourceUrl || h.sourceUrl,
    })),
    source: h.source,
    license: h.license,
    credit: h.credit,
    creditUrl: h.creditUrl || h.sourceUrl,
    isTourApi: isTour,
  }
}

export function getThemeImage(slug) {
  return unsplash.themes?.[slug] || null
}
export function getSituationImage(slug) {
  return unsplash.situations?.[slug] || null
}
