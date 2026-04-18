provider "netlify" {
  token        = var.netlify_token
  default_team_slug = var.netlify_team_slug
}

# サイト名: cranky-carson-643be0
data "netlify_site" "blog" {
  name      = "cranky-carson-643be0"
  team_slug = var.netlify_team_slug
}

import {
  to = netlify_site_build_settings.blog
  id = "c608a141-5fa6-4f1c-8884-8688484c9895"
}

# NODE_VERSION は新規作成のため import 不要（Netlify 上に未設定だった）

# ビルド設定
resource "netlify_site_build_settings" "blog" {
  site_id           = data.netlify_site.blog.id
  build_command     = "yarn build"
  publish_directory = "build"
  production_branch = "main"
  base_directory    = "node/app"
}

# Node.js バージョンを環境変数で指定（Dependency management の UI 設定を上書き）
resource "netlify_environment_variable" "node_version" {
  site_id = data.netlify_site.blog.id
  key     = "NODE_VERSION"
  values = [
    {
      value   = "22"
      context = "all"
    }
  ]
}
