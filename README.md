# blog

雑記ブログ。Sapper + Netlify。

- **URL**: https://blog.keitaroooo.com
- **App**: `node/app/`（[sapper-blog-template](https://github.com/Charca/sapper-blog-template) ベース）

## 執筆の置き場

| パス | 役割 |
|------|------|
| [`docs/`](docs/) | バックログ・シリーズ索引（非公開） |
| [`node/app/src/routes/blog/posts/`](node/app/src/routes/blog/posts/) | 公開記事（Netlify デプロイ対象） |

技術記事は [techblog](https://github.com/keitaroooo/techblog)。一次メモは [keitaro-yamaguchi](https://github.com/keitaroooo/keitaro-yamaguchi) の `diary/` · `trip/`。

## Git（公開物だけ PR）

| 変更 | ブランチ | マージ |
|------|----------|--------|
| `docs/` · README · infra | `main` 直 push | 確認不要（デプロイ対象外） |
| `posts/` · 公開に効く app 変更 | feature ブランチ → **PR** | レビュー後 merge → Netlify 自動デプロイ |

```bash
git checkout -b post/example
git push -u origin HEAD && gh pr create --title "post: …" --body "…"
```

## ガードレール

設定: [`.githooks/guardrails.json`](.githooks/guardrails.json)（hooks の warn/block）。`bash .githooks/install.sh` で有効化。

## Local

```sh
cd node/app && npm install && npm run dev
```
## Infra

- **デプロイ**: Netlify — `node/app/netlify.toml` で設定、`main` push で自動デプロイ
- **DNS**: [`keitaro-yamaguchi`](https://github.com/keitaroooo/keitaro-yamaguchi) で一元管理

### Terraform（ビルド設定）

コード: [`infra/terraform/netlify/`](infra/terraform/netlify/) — Site `cranky-carson-643be0`（ID: `c608a141-5fa6-4f1c-8884-8688484c9895`）

```fish
source infra/load_tokens.fish
cd infra/terraform/netlify
terraform init && terraform plan && terraform apply
```

Netlify Personal Access Token は Bitwarden「Netlify Token」。import ブロックは `main.tf` に記載済み。

### Terraform で管理できないもの

- **Legacy prerendering 無効化**: `infra/scripts/disable-prerendering.sh`
- **Dependency management の Node.js バージョン**: ダッシュボードで手動（ビルドは `node/app/.node-version` が優先）

```fish
source infra/load_tokens.fish
./infra/scripts/disable-prerendering.sh
```
