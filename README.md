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

### Netlify Site Management

1.  **Bitwarden Token Loading**:
    `keitaro-yamaguchi/infra/作業ログ.md` を参照し、`load_netlify_tokens` 関数を使って Netlify トークンを環境変数にロードします。
    ```fish
    # keitaro-yamaguchi の作業ログに従い、Bitwarden からトークンをロード
    # 例:
    # bw unlock --raw # 必要に応じて実行
    # export BW_SESSION=$(bw unlock --raw)
    # export TF_VAR_netlify_token=$(bw get password "Netlify Token")
    # load_netlify_tokens # fish shell の場合
    ```
2.  **Terraform Setup**:
    `blog` リポジトリの `infra/terraform/netlify/` ディレクトリに移動し、Terraform を初期化します。
    ```bash
    cd infra/terraform/netlify
    terraform init
    ```
3.  **Plan & Apply**:
    Netlify サイトの設定内容を確認し、適用します。
    ```bash
    terraform plan
    terraform apply
    ```

- **Netlify Site Configuration**: `blog/infra/terraform/netlify/main.tf` で Netlify サイトを設定します。
- **DNS Configuration**: `blog.keitaroooo.com` の DNS 設定は、`keitaro-yamaguchi` リポジトリの [`infra/terraform/cloudflare/main.tf`](https://github.com/keitaroooo/keitaro-yamaguchi/blob/main/infra/terraform/cloudflare/main.tf) で管理されています。
