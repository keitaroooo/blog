# blog

雑記ブログ。

## Links

- Repo: https://github.com/keitaroooo/blog
- URL: https://blog.keitaroooo.com

## Structure

- App: `node/app/`（Sapper）

## 技術スタック

[こちら](https://github.com/Charca/sapper-blog-template)のコードをそのまま使用しています．

今後，コードの理解とオリジナルデザインに変更する必要があります．

## Local Preview

```sh
cd node/app
npm install
npm run dev
```

## Deploy

### Netlify

- Netlify に GitHub リポジトリを接続してデプロイ
- `node/app/netlify.toml` の設定に従う
	- build command: `npm run export`
	- publish dir: `__sapper__/export`

※ Netlify 側の設定で "Base directory" が必要なら `node/app` を指定。

### Cloudflare（DNS / Proxy）

- `blog.keitaroooo.com` の DNS レコードは、[**keitaro-yamaguchi**](https://github.com/keitaroooo/keitaro-yamaguchi) リポジトリで一元管理しています。

## Infrastructure (IaC)

Netlify サイトとカスタムドメインの設定を Terraform で管理します。
詳細な手順については、[**keitaro-yamaguchi/infra/作業ログ.md**](https://github.com/keitaroooo/keitaro-yamaguchi/blob/main/infra/作業ログ.md) を参照してください。

- **Netlify Site Configuration**: `blog/infra/terraform/netlify/main.tf` で Netlify サイトを設定します。
- **DNS Configuration**: `blog.keitaroooo.com` の DNS 設定は、`keitaro-yamaguchi` リポジトリで一元管理されています。
