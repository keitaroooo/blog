#!/usr/bin/env fish
# Netlify Terraform 用の環境変数をロードする
# Bitwarden CLI が必要: https://bitwarden.com/help/cli/
#
# 使い方:
#   source infra/load_tokens.fish
#   cd infra/terraform/netlify && terraform plan

set -gx BW_SESSION (bw unlock --raw)
set -gx TF_VAR_netlify_token (bw get password "Netlify Token")
set -gx NETLIFY_API_TOKEN $TF_VAR_netlify_token

echo "✓ NETLIFY_API_TOKEN / TF_VAR_netlify_token をセットしました"
