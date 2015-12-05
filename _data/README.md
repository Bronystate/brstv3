# Data Folder

This folder houses configuration files used by Jekyll when building the site.
They do not appear on the live site.

However, just because these files don't appear on site, they obviously appear
here, so:  
**DO NOT UNDER ANY CIRCUMSTANCES COMMIT SENSITIVE MATERIAL TO ANY BRANCH EVER**

* * * * *

## embed-switcher.yml

The embed switcher operates under basically identical principles as the ancient
Bronystate 1.0 method. All embed `src`s are contained in the file, along with a
variable indicating which embed is live. When the site is built, the `src` of
that embed is written to `index.html` to be loaded as stream.

There is no separate embed page anymore, however in the future there may be a
way for the `Refresh Stream` button to fetch an updated stream url, removing the
need for a full page refresh to get new stream.

But then, we hardly change embeds anymore.

To change embeds, edit the `live` variable to match whichever embed you want to
go live, and commit (*please write a commit message!*).

* * * * *

## timers.yml

Countdown timers to display under the header (above embeds) and in the sidebar
(on every page). Two variables plus a list of timers.

**NOTE**: You don't need to add Friday or Saturday movie night times. The script
will automatically calculate and add them to its internal list when displaying
the timers. This is controlled by the `weeks-in-advance` variable: how many
weeks of timers should we generate.

Format for the timers is given in the comments block at the top. Expired timers
are not removed from the file, do that manually.
