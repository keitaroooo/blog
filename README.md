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

## Local

```sh
cd node/app && npm install && npm run dev
```
## Infra

- **デプロイ**: Netlify — `node/app/netlify.toml` で設定、`main` push で自動デプロイ
- **DNS**: [`keitaro-yamaguchi`](https://github.com/keitaroooo/keitaro-yamaguchi) で一元管理
- **作業ログ**: [`infra/作業ログ.md`](infra/作業ログ.md)
