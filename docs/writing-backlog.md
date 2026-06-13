---
title: 執筆バックログ
type: moc
updated: 2026-06-13
tags: [writing, travel]
---

# 執筆バックログ

週次棚卸し（2026-06-13）で **blog #5–#10** をクローズ。Issue 本文は空だったが、**4 テーマは posts/ で公開済み**。

## クローズ Issue → 公開記事（完了）

### はてな移行（旧 #5）

- [random-blog](../node/app/src/routes/blog/posts/random-blog.md) → [公開](https://blog.keitaroooo.com/blog/random-blog)
- [Google-Adsense-free-passing](../node/app/src/routes/blog/posts/Google-Adsense-free-passing.md)
- [Google-Adsense-error-deal-with](../node/app/src/routes/blog/posts/Google-Adsense-error-deal-with.md)

### キャッシュレス（旧 #6）

- [point-buy-smartphone](../node/app/src/routes/blog/posts/point-buy-smartphone.md)
- [line-pay-June](../node/app/src/routes/blog/posts/line-pay-June.md)

### 大阪→東京（旧 #7 · 実際はヒッチハイク 2019-03）

| Day | 原稿 | 公開 |
|-----|------|------|
| 1 | hitchhike-day-1-Osaka-Kyoto.md | [Day 1](https://blog.keitaroooo.com/blog/hitchhike-day-1-Osaka-Kyoto) |
| 2–7 | hitchhike-day-2 … day-7 | 同上 slug |
| 帰路 | Seishun-18-Tokyo-Osaka.md | [青春18 東京→大阪](https://blog.keitaroooo.com/blog/Seishun-18-Tokyo-Osaka) |

カテゴリ方針: [organize-theme-category](../node/app/src/routes/blog/posts/organize-theme-category.md) — アウトドア / 旅 / 金融

---

## メモから書ける候補

[keitaro-yamaguchi](https://github.com/keitaroooo/keitaro-yamaguchi) に清書済み・半清書のメモあり。Issue は作らず、ここで管理する。

| 優先 | 記事案 | ソース | カテゴリ | 粒度 |
|------|--------|--------|----------|------|
| 高 | 北千住エリア中古マンション 3 物件比較（売却損益試算） | [`assets/資金計画.md`](https://github.com/keitaroooo/keitaro-yamaguchi/blob/main/assets/資金計画.md) | 金融 | M — 表そのまま活かせる |
| 高 | マンション購入検討メモ（条件・業者・内見） | [`assets/不動産投資.md`](https://github.com/keitaroooo/keitaro-yamaguchi/blob/main/assets/不動産投資.md) + [`diary/2026H1.md`](https://github.com/keitaroooo/keitaro-yamaguchi/blob/main/diary/2026H1.md)（6/13 方針） | 金融 | L — 分割可（条件 / 業者選び / 読書メモ） |
| 中 | クレカ・ポイント還元の整理（2026 版） | [`assets/お金.md`](https://github.com/keitaroooo/keitaro-yamaguchi/blob/main/assets/お金.md) | FinTech | S — [point-buy-smartphone](../node/app/src/routes/blog/posts/point-buy-smartphone.md) の続編 |
| 中 | 確定申告・所得控除メモ（医療費控除など） | [`assets/税金.md`](https://github.com/keitaroooo/keitaro-yamaguchi/blob/main/assets/税金.md) + diary 確定申告言及 | 金融 | M |
| 低 | 台北旅行（2025-04） | [`trip/2025-04-25_台北/メモ.md`](https://github.com/keitaroooo/keitaro-yamaguchi/blob/main/trip/2025-04-25_台北/メモ.md) | 旅 | S — **見出しのみ。旅行記録を trip/ に追記してから** |

### 清書の流れ

```
keitaro-yamaguchi/{assets,trip,diary}/  →  blog/docs/（ここで候補管理）
        ↓ 個人情報・金額をマスク
node/app/src/routes/blog/posts/*.md  →  Netlify
```

## 参照

- 執筆カテゴリ: [organize-theme-category](../node/app/src/routes/blog/posts/organize-theme-category.md)
- 技術記事: [techblog/docs/writing-backlog.md](https://github.com/keitaroooo/techblog/blob/main/docs/writing-backlog.md)
