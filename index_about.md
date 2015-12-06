---
titlecat: about
date: 2015-11-18
yahAbt: true
permalink: /about/
css:
- /assets/css/stafflist.css
---

# About Us

//What is bronystate?

* * * * *

<div class="stafflist-wrap">
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
</div>

* * * * *

<h2>Retired Staff</h2>

<ul>
  {% for p in site.data.staff-list.former-staff %}
  <li>{{ p }}</li>
  {% endfor %}
</ul>
