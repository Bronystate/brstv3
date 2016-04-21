# News Posts

`_posts/`

Outputs to: `bronystate.net/news/yyyy-mm-dd-slug.html`

- Create file `yyyy-mm-dd-slug.md` (NOT `html`!) of today's date and a slug
  (doesn't have to be same as page title)
- Add following to top of file. Y year, M month, D day, H hour, M minute
  
```
---
title: <POST TITLE HERE>
date: <YYYY-MM-DD HH:MM>
author: <AUTHOR NAME>
tags: [list of tags]
---
```

- Date and time **must** be in **UTC** time
- Set tags like `tags: [foo, bar]`, or leave off if not needed
  - `lottery` tag is a must for those posts
  - Ban appeals will be handled some other way later
- After a blank line, add post content in Markdown format as always
- Don't include a `# header` at the top, the `title` attribute will do that for you
- Add `<!-- more -->` on its own line for a cutoff point on frontpage and news feed (automatically adds a "read more" link there)

See Shizuka's posts for examples on how best to do it.

- The latest `tags: [lottery]` post will appear on the front page under embeds
  if it's less than a couple weeks old
- The latest non-lottery news post will appear under that
