# AGENTS.md

## Build & Test

```fish
cd node/app
npm install
npm run dev      # 開発サーバー（SvelteKit）
npm run build    # 静的ビルド → build/
npm run preview  # ビルド結果確認
```

## サービス構成

```
node/app/   → SvelteKit（SSG）+ adapter-static
infra/      → Terraform（Netlify）+ 運用スクリプト
```

- フレームワーク: SvelteKit + Vite
- ホスティング: Netlify（静的サイト）
- ドメイン: `blog.keitaroooo.com`

## インフラ

- **Terraform**: `infra/terraform/netlify/` でビルド設定を管理
- **手動スクリプト**: `infra/scripts/` （prerendering 無効化等）
- **作業ログ**: `infra/作業ログ.md`

```fish
source infra/load_tokens.fish
cd infra/terraform/netlify
terraform init && terraform plan && terraform apply
```

## デプロイ

`main` ブランチへのマージで Netlify が自動ビルド・デプロイ。
Netlify の base directory は `node/app`。
