provider "netlify" {
  token = var.netlify_token
}

# サイト名: cranky-carson-643be0
data "netlify_site" "blog" {
  name = "cranky-carson-643be0"
}

# ビルド設定
resource "netlify_site_build_settings" "blog" {
  site_id           = data.netlify_site.blog.id
  build_command     = "npm run build"
  publish_directory = "build"
  production_branch = "main"
  base_directory    = "node/app"
}

# Node.js バージョンを環境変数で指定（Dependency management の UI 設定を上書き）
resource "netlify_environment_variable" "node_version" {
  site_id = data.netlify_site.blog.id
  key     = "NODE_VERSION"
  scopes  = ["builds"]
  values = [
    {
      value   = "22"
      context = "all"
    }
  ]
}
