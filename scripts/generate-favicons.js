// scripts/generate-favicons.js
// 입력: public/brand-logo.svg (정사각형) + public/og-default.svg (1200×630)
// 출력: favicon.ico + PNG 세트 11종 + og-default.png(1200×630)
//
// 의존성: sharp, to-ico (devDependencies에 포함됨)
// 사용법: npm run generate-favicons

const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const BRAND = path.join(ROOT, 'public', 'brand-logo.svg')
const OG_SRC = path.join(ROOT, 'public', 'og-default.svg')
const OUT = path.join(ROOT, 'public')

let sharp, toIco
try {
  sharp = require('sharp')
  toIco = require('to-ico')
} catch (e) {
  console.error('[generate-favicons] 의존성이 설치되지 않았습니다:')
  console.error('  npm install   # package.json devDependencies에 sharp, to-ico 포함됨')
  process.exit(1)
}

if (!fs.existsSync(BRAND)) {
  console.error('[generate-favicons] 입력 파일이 없습니다:', BRAND)
  process.exit(1)
}

async function pngSquare(size, name) {
  await sharp(BRAND).resize(size, size).png().toFile(path.join(OUT, name))
  console.log('✓', name)
}

async function ogPng() {
  if (fs.existsSync(OG_SRC)) {
    await sharp(OG_SRC).resize(1200, 630).png().toFile(path.join(OUT, 'og-default.png'))
    console.log('✓ og-default.png (1200×630, og-default.svg 기반)')
  } else {
    // 폴백: 브랜드 로고를 OG에 끼워 넣기 (단색 배경)
    const logo = await sharp(BRAND).resize(420, 420).png().toBuffer()
    await sharp({
      create: { width: 1200, height: 630, channels: 4, background: { r: 219, g: 234, b: 254, alpha: 1 } }
    })
    .composite([{ input: logo, gravity: 'center' }])
    .png()
    .toFile(path.join(OUT, 'og-default.png'))
    console.log('✓ og-default.png (폴백 — 브랜드 로고 중앙 배치)')
  }
}

async function main() {
  await pngSquare(16,  'favicon-16x16.png')
  await pngSquare(32,  'favicon-32x32.png')
  await pngSquare(96,  'favicon-96x96.png')
  await pngSquare(180, 'apple-touch-icon.png')
  await pngSquare(192, 'android-chrome-192x192.png')
  await pngSquare(512, 'android-chrome-512x512.png')
  await pngSquare(150, 'mstile-150x150.png')
  await ogPng()

  // ICO (16+32+48)
  const buffers = []
  for (const s of [16, 32, 48]) {
    buffers.push(await sharp(BRAND).resize(s, s).png().toBuffer())
  }
  const ico = await toIco(buffers)
  fs.writeFileSync(path.join(OUT, 'favicon.ico'), ico)
  console.log('✓ favicon.ico (16+32+48 멀티사이즈)')
}

main().catch(err => { console.error(err); process.exit(1) })
