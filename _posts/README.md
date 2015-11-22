# News Posts

`_posts/`

Output path: `bronystate.net/news/yyyy-mm-dd-title.html`

- Create file `yyyy-mm-dd-title.html` of today's date and a slug
  (doesn't have to be same as page title)
- Add following to top of file. Can optionally add time (optionally timezone in +/-0500
  format too) after date, it assumes America/New_York time by default
  
```
---
title: <POST TITLE HERE>
date: <YYYY-MM-DD> [HH:MM:SS [+/-TTTT]]
author: <AUTHOR NAME>
tags: [list of tags]
---
```

- Set tags like `tags: [foo, bar]`, or leave off if not needed
  - `lottery` tag is a must for those posts
  - Ban appeals will be handled some other way later
- After a blank line, add post content in Markdown format as always
- Don't include a `# header` at the top, the `title` attribute will do that for you
- Add `<!-- more -->` to cut off a post in frontpage / news feed (not on its own page obv)


- The latest `tags: [lottery]` post will appear on the front page under embeds
  if it's less than a couple weeks old
- The latest non-lottery news post will appear under that