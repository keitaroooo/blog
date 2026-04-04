variable "netlify_token" {
  type        = string
  sensitive   = true
  description = "Netlify Personal Access Token"
}

variable "site_name" {
  type        = string
  description = "Netlify site name"
  default     = "cranky-carson-643be0"
}

variable "custom_domain" {
  type        = string
  description = "Custom domain"
  default     = "blog.keitaroooo.com"
}

variable "repo_url" {
  type        = string
  description = "GitHub repository URL"
  default     = "https://github.com/keitaroooo/blog"
}

variable "base_dir" {
  type        = string
  description = "Base directory for build"
  default     = "node/app"
}

variable "production_branch" {
  type        = string
  description = "Production branch"
  default     = "main"
}
