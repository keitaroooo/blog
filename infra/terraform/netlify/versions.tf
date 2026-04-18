terraform {
  required_version = ">= 1.5.0"

  required_providers {
    netlify = {
      source  = "netlify/netlify"
      version = "~> 0.4"
    }
  }
}
