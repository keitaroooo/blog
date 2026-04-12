# blog

雑記ブログ。Sapper + Netlify。

- **URL**: https://blog.keitaroooo.com
- **App**: `node/app/`（[sapper-blog-template](https://github.com/Charca/sapper-blog-template) ベース）

## Local

```sh
cd node/app && npm install && npm run dev
```

## Infra

- **デプロイ**: Netlify — `node/app/netlify.toml` で設定、`main` push で自動デプロイ
- **DNS**: [`keitaro-yamaguchi`](https://github.com/keitaroooo/keitaro-yamaguchi) で一元管理
- **作業ログ**: [`infra/作業ログ.md`](infra/作業ログ.md)
