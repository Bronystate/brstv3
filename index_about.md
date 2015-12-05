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
  <li>
    <h3 class="{{p.nick}}">{{p.nick}}</h3>
  </li>
  {% endfor %}
  </ul>
</div>
