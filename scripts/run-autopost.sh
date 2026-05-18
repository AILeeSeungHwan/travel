#!/usr/bin/env bash
# run-autopost.sh — launchd에서 호출되는 자동 포스팅 래퍼
# Usage: ./run-autopost.sh [morning|noon|evening] [count]

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SLOT="${1:-morning}"
COUNT="${2:-3}"
NODE_BIN="/opt/homebrew/bin/node"

# .env.local에서 이미지 API 키만 로드 (TourAPI, Unsplash)
if [ -f "$ROOT/.env.local" ]; then
  while IFS= read -r line; do
    [[ "$line" =~ ^#.*$ || -z "$line" ]] && continue
    export "$line" 2>/dev/null || true
  done < "$ROOT/.env.local"
fi

# ── 오늘의 인사이트 추천 로드 (car_site의 daily-insight.js가 배포) ──
if [ -x /Users/lee/bin/insight-hint.sh ]; then
  export INSIGHT_HINT="$(/Users/lee/bin/insight-hint.sh travel 2>/dev/null || echo '')"
  if [ -n "$INSIGHT_HINT" ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] 인사이트 추천 로드 완료 (INSIGHT_HINT env)"
  fi
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S')] 자동 포스팅 시작: slot=$SLOT count=$COUNT"

exec "$NODE_BIN" "$ROOT/scripts/auto-post.js" --slot "$SLOT" --count "$COUNT"
