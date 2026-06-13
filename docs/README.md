# docs/

**非公開の執筆メモ・バックログ・シリーズ索引。** Netlify には載らない（`posts/` のみビルド対象）。

| 置き場 | 用途 | 公開先 |
|--------|------|--------|
| `docs/` | MOC、未執筆アイデア、シリーズ一覧 | git のみ（AI が読む） |
| `node/app/src/routes/blog/posts/` | 記事原稿 | [blog.keitaroooo.com](https://blog.keitaroooo.com) |

技術記事は [`techblog`](https://github.com/keitaroooo/techblog) へ。旅・日常・資産の雑記はこの repo。

## 流れ

```
keitaro-yamaguchi/diary/ · trip/ · Slack#times  （一次入力）
        ↓ Ingest
blog/docs/*.md                                   （整理・索引）
        ↓ 清書
posts/*.md                                       （公開記事）
        ↓ main push
Netlify
```
