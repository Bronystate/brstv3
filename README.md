# Bronystate 3.0

> Code to power the new generation of states of bronies

[![Build Status](https://travis-ci.org/Bronystate/brstv3.svg)](https://travis-ci.org/Bronystate/brstv3)

* * * * *

## Usage

Commits pushed to `master` will be automatically pulled by Travis CI, built, and
sent to the server to go live immediately. Push only if you're sure of what
you've committed.

You can edit or create new pages right here on Github:
  
- **News posts** should go in the `_posts` directory; see the README there for details
- **New timers** go in `_data/timers.yml`, follow the comments for formatting
- **Changing embeds** is done by editing the `live` variable in `_data/embed-switcher.yml`

If you're adding a new page, changing styles, or anything not a simple "add a
thing", see the "Branching" section below.

**DO NOT UNDER ANY CIRCUMSTANCES COMMIT SENSITIVE MATERIAL TO ANY BRANCH EVER**

* * * * *

## Previewing Changes

Bronystate 3.0 runs on the Github Pages flavor of Jekyll for ease of installation.

To set up on Windows:
- Install [Github Desktop][ghdt]
- Install [Ruby for Windows][ruby]
- Install [Ruby DevKit][devkit]
- Log into Github Desktop and clone this `brstv3` repository (the + in the upper left)
- Open the `brstv3` folder wherever you cloned it to
- Shift-right-click and `Open command window here`
- `gem install bundler`
- `bundle install`

Double click the `jekyllserve.bat` file (or run `bundle exec jekyll serve`,
same thing) to build the site and host it locally, which you can find by
pointing a browser at `localhost:4000`

* * * * *

## Advanced Usage

**REMEMBER:** The `master` branch will be automatically and immediately built
and pushed live to the site. Do not commit partially complete stuff to `master`

If you want to **add a new page** (not a news post) or **change the styling**
of the site:

- **Check out the repository** to your system, don't make huge changes from Github
- **Create a new branch** in Github Desktop based on `master`
- **Give it a name** that describes what you're working on, or just your name
  - Like `rules-page` when building drafts of, well, the rules page
- **Make your changes** and **commit** as you work, push any time to share with
  the rest of us
- **Preview frequently!** Make sure you have the Jekyll workflow set up so you
  can check your work
- When you're ready to make your changes go live, **create a pull request** from
  your branch to `master`, give it a title and a description
- Have everyone **review the pull request**, which shows all changes made and
  reflects the state of the code as it will look once merged
- **If everyone's satisfie**d, and there are no merge conflicts detected
  (indicating `master` updated while you were working), **merge the pull request**
- If things go bad when the change is live, call your nearest Techie on Skype or Discord

[ghdt]: https://desktop.github.com/
[ruby]: http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.1.7.exe
[devkit]: http://dl.bintray.com/oneclick/rubyinstaller/DevKit-mingw64-32-4.7.2-20130224-1151-sfx.exe
