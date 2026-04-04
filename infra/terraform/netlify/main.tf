provider "netlify" {
  token = var.netlify_token
}

# 既存サイトを管理する場合は import で取り込む
# terraform import netlify_site.blog c608a141-5fa6-4f1c-8884-8688484c9895

resource "netlify_site" "blog" {
  name = var.site_name

  repo {
    repo_url     = var.repo_url
    provider     = "github"
    branch       = var.production_branch
    dir          = var.base_dir
    command      = "npm run export"
    publish_path = "__sapper__/export"
  }

  # netlify.toml の設定が優先されるため、ここでの指定は参考値
  # 実際のビルド設定は netlify.toml を参照
}

resource "netlify_deploy_key" "blog" {
  site_id = netlify_site.blog.id
}
