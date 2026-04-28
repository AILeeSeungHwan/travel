// 히어로 이미지 컴포넌트 — Unsplash·TourAPI 메타와 함께 표시 (저작권 의무)

export default function HeroImage({ image, alt }) {
  if (!image || !image.url) return null
  const isUnsplash = image.source === 'unsplash'
  return (
    <figure style={{
      margin: '0 0 22px',
      borderRadius: 14, overflow: 'hidden',
      border: '1px solid #E2E8F0',
      background: image.color || '#E0F2FE',
    }}>
      <img
        src={image.url}
        alt={alt || image.description || ''}
        loading="lazy"
        style={{ width: '100%', height: 'auto', display: 'block', maxHeight: 420, objectFit: 'cover' }}
      />
      <figcaption style={{
        fontSize: 11, color: '#64748B', padding: '8px 14px',
        background: '#F8FAFC', borderTop: '1px solid #E2E8F0',
      }}>
        {isUnsplash ? (
          <>
            📷 Photo by{' '}
            <a href={image.photographerUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0369A1' }}>
              {image.photographer}
            </a>
            {' '}on{' '}
            <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0369A1' }}>
              Unsplash
            </a>
            {' · '}{image.license}
          </>
        ) : (
          <>
            📷 출처:{' '}
            <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0369A1' }}>
              {image.photographer}
            </a>
            {' · '}{image.license}
          </>
        )}
      </figcaption>
    </figure>
  )
}
