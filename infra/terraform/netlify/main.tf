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

# ビルド設定
resource "netlify_site_build_settings" "blog" {
  site_id           = data.netlify_site.blog.id
  build_command     = "yarn build"
  publish_directory = "build"
  production_branch = "main"
  base_directory    = "node/app"
}

# Node.js バージョンは node/app/.node-version で管理（Netlify が自動検出）
