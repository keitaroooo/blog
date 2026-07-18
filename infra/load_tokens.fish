#!/usr/bin/env fish
# Netlify Terraform 用 TF_VAR（$HOME/.config/netlify/terraform.fish）

set -l secret "$HOME/.config/netlify/terraform.fish"
if not test -f $secret
    echo "error: $secret がありません" >&2
    echo "  cp keitaro-yamaguchi/infra/secrets.example/netlify/terraform.fish.example $secret" >&2
    echo "  chmod 600 $secret" >&2
    exit 1
end
source $secret
echo "✓ Netlify TF_VAR をセットしました ($secret)"
