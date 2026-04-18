#!/usr/bin/env bash
set -euo pipefail

# Netlify の Dependency management に表示される Node.js バージョンを更新する
# 使用方法: ./infra/scripts/update-node-version.sh [version]
#
# Terraform provider にはこの設定を管理するリソースがないため、
# .node-version ファイルを更新して対応する。
# Netlify はビルド時にこのファイルを読み取り、指定バージョンを使用する。

NODE_VERSION="${1:-22}"
NODE_VERSION_FILE="node/app/.node-version"

echo "${NODE_VERSION}" > "${NODE_VERSION_FILE}"
echo "✓ ${NODE_VERSION_FILE} を ${NODE_VERSION} に更新しました"
echo "  次回デプロイ時に Dependency management の表示が更新されます"
