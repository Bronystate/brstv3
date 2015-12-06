---
titlecat: about
date: 2015-12-05
yahAbt: true
permalink: /about/
css:
- /assets/css/stafflist.css
---

# About Us

Bronystate is a community of widely diverse interests, brought together by
*My Little Pony: Friendship is Magic*.

We run three regular events: Friday Movie Night every Friday at 7pm Eastern
Time, Saturday Movie Night on Saturdays at 1pm Eastern Time, and live showings
of the newest *My Little Pony* episodes when they air. Chat services are
provided by the PonyChat IRC Network.

* * * * *

## History

Founded in May 2011 by DCD and Hipster Brony of Ponychan , Bronystate began life
as a weekly movie night event commanded by GETs. The site expanded greatly in
its first year, starting a tradition of showing the newest *Pony* episodes live,
and running more open lotteries with the viewers on IRC to select each week's
movie.

Bronystate's second year saw the launch of Bronystate 2.0, a Wordpress-based
site constructed by Shizuka and Saturn. While initially rocky, the fans quickly
grew to adore the new site's features. The Trilogy Summer event began, showing a
number of movie series that wouldn't get voted for otherwise -- because who
wants to watch *just* Spiderman 2? Bronystate's First Annual Tom Awards Show was
also produced this year, selecting the best movies and episodes from the site's
first year, among other categories.

In 2013, the Second Annual Tom Awards Show was released, followed by another run
of Trilogy Summer. Bronystate had found its niche, and hired some new mods to
take over for mods that had left in 2012.

The long hiatus of 2014 was easily weathered by Bronystate's crazy varied
programming, from nostalgic shows to games with commentary to random movies
showing late at night. 

In late 2015, Shizuka decided enough was enough from the aging Wordpress
platform, and so rebuilt the site from scratch to release Bronystate 3.0.
Naturally, season five of *My Little Pony* was just ending, so traffic was low.
Development continued for weeks, with new features and improvements to old
features coming online every week.

Who knows what 2016 will bring? Stay tuned to Bronystate, where the fun only
doubles on days ending in Y!

* * * * *

<h2>Our Staff</h2>

<ul class="stafflist">
{% for p in site.data.staff-list.staff %}
<li class="{{ p.nick }}">
  <img class="icon" src="/assets/img/staff-list/{{ p.nick}}.png" />
  <div class="info">
    <h3 class="nick">{{ p.nick }}</h3>
    {% unless p.title == nil %}<span class="title">{{ p.title }}</span>{% endunless %}
    <ul>
      {% unless p.location == nil %}<li class="location"><strong>Location:</strong> {{ p.location }}</li>{% endunless %}
      {% unless p.favpone == nil %}<li class="favpone"><strong>Favorite Pony:</strong> {{ p.favpone }}</li>{% endunless %}
      {% unless p.favmovie == nil %}<li class="favmovie"><strong>Favorite Movie:</strong> {{ p.favmovie }}</li>{% endunless %}
    </ul>
  </div>
  <div style="clear:both"></div>
</li>
{% endfor %}
</ul>

* * * * *

<h2>Retired Staff</h2>

<ul class="retiredlist">
  {% for p in site.data.staff-list.former-staff %}
  <li>{{ p }}</li>
  {% endfor %}
</ul>
