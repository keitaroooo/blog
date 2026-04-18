#!/usr/bin/env bash
# Bitwarden から Netlify トークンを取得して環境変数に設定する
# 使用方法: source infra/scripts/load_netlify_tokens.sh
#
# fish の場合は load_netlify_tokens 関数を使用

set -euo pipefail

export BW_SESSION=$(bw unlock --raw)
export TF_VAR_netlify_token=$(bw get password "Netlify Token")
export NETLIFY_API_TOKEN="$TF_VAR_netlify_token"

echo "Netlify tokens loaded."
