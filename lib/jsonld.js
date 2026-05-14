// lib/jsonld.js — 구조화 데이터 빌더 (tripspot)

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://travel.ambitstock.com'
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || '트립스팟'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': SITE + '/#organization',
    name: SITE_NAME,
    url: SITE,
    logo: { '@type': 'ImageObject', url: SITE + '/android-chrome-512x512.png', width: 512, height: 512 },
    description: '국가 → 지역 → 스팟 3단계 허브와 호텔·여행 가이드·계산기 통합. 한국관광공사·외교부·각국 관광청 출처 우선의 중립 큐레이션.',
    inLanguage: 'ko',
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SITE + '/#website',
    url: SITE,
    name: SITE_NAME,
    inLanguage: 'ko',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: SITE + '/search?q={search_term_string}' },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url ? (SITE + it.url) : undefined,
    })),
  }
}

export function articleSchema({ title, description, url, date, updated, image, tags }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: (date || '') + 'T00:00:00+09:00',
    dateModified: (updated || date || '') + 'T00:00:00+09:00',
    author: { '@type': 'Person', name: '트립스팟 에디터', url: SITE + '/about/' },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE, logo: { '@type': 'ImageObject', url: SITE + '/android-chrome-512x512.png', width: 512, height: 512 } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: image || (SITE + '/og-default.png'),
    keywords: (tags || []).join(', '),
    inLanguage: 'ko',
  }
}

export function faqSchema(items) {
  if (!items || items.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(it => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }
}

export function howToSchema({ title, description, steps }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: (steps || []).map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
  }
}

export function touristDestinationSchema({ name, description, url, image, country }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name,
    description,
    url,
    image: image || (SITE + '/og-default.png'),
    touristType: ['leisure', 'family', 'couple'],
    includesAttraction: country ? { '@type': 'Country', name: country } : undefined,
    inLanguage: 'ko',
  }
}

export function touristAttractionSchema({ name, description, url, image, lat, lng, address }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name,
    description,
    url,
    image: image || (SITE + '/og-default.png'),
    geo: (lat && lng) ? { '@type': 'GeoCoordinates', latitude: lat, longitude: lng } : undefined,
    address: address ? { '@type': 'PostalAddress', streetAddress: address } : undefined,
    isAccessibleForFree: false,
    inLanguage: 'ko',
  }
}

export function hotelSchema({ name, description, url, image, lat, lng, address, addressCountry, starRating, ratingValue, reviewCount, priceRange, amenities }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name,
    description,
    url,
    image: image || (SITE + '/og-default.png'),
    starRating: starRating ? { '@type': 'Rating', ratingValue: String(starRating) } : undefined,
    aggregateRating: ratingValue ? { '@type': 'AggregateRating', ratingValue: String(ratingValue), reviewCount: String(reviewCount || 0) } : undefined,
    address: address ? { '@type': 'PostalAddress', streetAddress: address, addressCountry: addressCountry || 'KR' } : undefined,
    geo: (lat && lng) ? { '@type': 'GeoCoordinates', latitude: lat, longitude: lng } : undefined,
    priceRange: priceRange || undefined,
    amenityFeature: (amenities || []).map(a => ({ '@type': 'LocationFeatureSpecification', name: a, value: true })),
    inLanguage: 'ko',
  }
}

export function webApplicationSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url,
    applicationCategory: 'TravelApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  }
}

export function productReviewSchema({ name, description, url, image, category, keywords }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': url,
    headline: name,
    description,
    url,
    image: image || (SITE + '/og-default.png'),
    articleSection: category || '여행용품',
    keywords: (keywords || []).join(', '),
    author: { '@type': 'Person', name: '트립스팟 에디터', url: SITE + '/about/' },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE, logo: { '@type': 'ImageObject', url: SITE + '/android-chrome-512x512.png', width: 512, height: 512 } },
    inLanguage: 'ko',
    about: {
      '@type': 'Product',
      name,
      description,
      category: category || '여행용품',
    },
  }
}

export function itemListSchema({ name, description, url, items }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    url,
    numberOfItems: items ? items.length : undefined,
    itemListElement: (items || []).map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: it.url ? (SITE + it.url) : undefined,
      description: it.description,
    })),
  }
}
