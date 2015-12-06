---
titlecat: help
date: 2015-12-06
yahHelp: true
permalink: /help/
---

# Help

Get answers to frequently and infrequently asked questions here!

Just click on a question:

<ul class="questionlist">
  {% for e in site.data.help-page %}
  <li><a href="#{{ e.i }}">{{ e.q }}</a></li>{% endfor %}
</ul>

{% for e in site.data.help-page %}
<hr>
<div style="float: right; font-size: 10px; margin-top: -1.5em"><a href="#">top <i class="fa fa-angle-up"></i></a></div>
<h2>{{ e.q }}</h2>
{{ e.a }}
{% endfor %}
