#!/usr/bin/env bash
# install-launchd.sh — launchd 등록 원클릭 설치
# Usage: bash scripts/install-launchd.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LAUNCHD_SRC="$ROOT/launchd"
AGENTS_DIR="$HOME/Library/LaunchAgents"
LABELS=(
  "com.tripspot.autopost.morning"
  "com.tripspot.autopost.noon"
  "com.tripspot.autopost.evening"
)

echo "=== 트립스팟 자동 포스팅 launchd 설치 ==="
echo "프로젝트: $ROOT"
echo ""

# claude CLI 확인 (필수)
if [ ! -x "/opt/homebrew/bin/claude" ]; then
  echo "❌ /opt/homebrew/bin/claude 없음. Claude Code CLI를 설치하세요."
  exit 1
fi
echo "✅ Claude Code CLI: $(/opt/homebrew/bin/claude --version 2>/dev/null | head -1)"

# logs 디렉토리
mkdir -p "$ROOT/logs"
echo "✅ logs/ 디렉토리"

# run-autopost.sh 실행 권한
chmod +x "$ROOT/scripts/run-autopost.sh"
echo "✅ run-autopost.sh 실행 권한"

# LaunchAgents 디렉토리
mkdir -p "$AGENTS_DIR"

echo ""
echo "--- launchd 등록 ---"

for label in "${LABELS[@]}"; do
  src="$LAUNCHD_SRC/${label}.plist"
  dst="$AGENTS_DIR/${label}.plist"

  if [ ! -f "$src" ]; then
    echo "⚠️  $src 없음 — 건너뜀"
    continue
  fi

  # 기존 해제 (오류 무시)
  launchctl unload "$dst" 2>/dev/null || true

  cp "$src" "$dst"
  launchctl load "$dst"
  echo "✅ 등록: $label"
done

echo ""
echo "=== 설치 완료 ==="
echo ""
echo "📅 스케줄 (매일):"
echo "   07:00  morning — 호텔 + 가이드 + 지역"
echo "   12:00  noon    — 호텔 + 비교 + 상황"
echo "   18:00  evening — 호텔 + 테마 + 용품"
echo ""
echo "📋 관리 명령:"
echo "   launchctl list | grep tripspot           # 등록 확인"
echo "   tail -f $ROOT/logs/autopost.log          # 실행 로그"
echo "   tail -f $ROOT/logs/launchd-morning.log   # launchd 출력"
echo ""
echo "🧪 즉시 테스트 (1개 dry-run):"
echo "   node $ROOT/scripts/auto-post.js --slot morning --count 1 --dry-run"
echo ""
echo "🧪 실제 실행 테스트:"
echo "   bash $ROOT/scripts/run-autopost.sh morning 1"
