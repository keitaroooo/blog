#!/usr/bin/env bash
set -euo pipefail

# Legacy prerendering を無効化する
# 使用方法: source infra/scripts/load_netlify_tokens.sh && infra/scripts/disable-prerendering.sh
#
# Netlify Terraform provider には prerendering 設定のリソースが存在しないため、
# API を直接呼び出して無効化する。

SITE_NAME="cranky-carson-643be0"

if [ -z "${NETLIFY_API_TOKEN:-}" ]; then
  echo "Error: NETLIFY_API_TOKEN is not set" >&2
  exit 1
fi

# サイト ID を取得
SITE_ID=$(curl -s \
  -H "Authorization: Bearer ${NETLIFY_API_TOKEN}" \
  "https://api.netlify.com/api/v1/sites?name=${SITE_NAME}" \
  | jq -r '.[0].id')

if [ -z "$SITE_ID" ] || [ "$SITE_ID" = "null" ]; then
  echo "Error: Site '${SITE_NAME}' not found" >&2
  exit 1
fi

echo "Site ID: ${SITE_ID}"

# Legacy prerendering を無効化
curl -s -X PUT \
  -H "Authorization: Bearer ${NETLIFY_API_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"prerender": null}' \
  "https://api.netlify.com/api/v1/sites/${SITE_ID}" \
  | jq '{name: .name, prerender: .prerender}'

echo "Legacy prerendering disabled."
