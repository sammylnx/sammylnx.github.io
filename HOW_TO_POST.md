# How to publish a post

You can do all of this in your browser on github.com. Nothing needs to be installed.

## 1. Create the file

1. Open the repo on GitHub and go into the `_posts` folder.
2. Click **Add file → Create new file**.
3. Name it with the date and a short title, joined by dashes:

   ```
   2026-10-12-what-moderation-taught-me.md
   ```

   The date must be in `YYYY-MM-DD` format at the start. The rest becomes the post's web address.

## 2. Paste this at the top

```
---
title: What moderation taught me about AI
description: One sentence that shows under the title in lists.
---

Your first paragraph starts here.
```

Keep the three dashes above and below. Everything after the second `---` is the post itself.

For headings, bold, links, lists and images, copy from `_drafts/post-template.md`.

## 3. Commit

Click **Commit changes**. The site rebuilds by itself and the post appears in about a minute at sammylnx.github.io.

## Other things you might want

- **Fix a typo:** open the post in `_posts`, click the pencil icon, edit, commit.
- **Delete a post:** open it, click the three-dot menu, then **Delete file**.
- **Work on a post without publishing it:** put it in `_drafts` instead of `_posts`. Drafts don't need a date in the file name. Move it to `_posts` (with the date) when it's ready.
- **Add an image:** upload it to `assets/images` (create the folder the first time), then use `![description](/assets/images/file-name.jpg)` in the post.
- **Edit the About page:** `about.md`.
- **Add your LinkedIn or email:** fill them in under `links:` in `_config.yml`.
- **See whether a build worked:** the **Actions** tab on GitHub shows a green tick or a red cross for each change (the run is called "pages-build-deployment").
