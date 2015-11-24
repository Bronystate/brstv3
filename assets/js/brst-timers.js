---
---
/**
 * Bronystate 3.0 - Countdown Timers
 * Shizuka Kamishima - 2015-11-23
 * Generated on {{ site.time | date: "%F" }} by Jekyll
 */

var showInSidebar = {{ site.data.timers.show-in-sidebar }};

var weeksInAdvance = {{ site.data.timers.weeks-in-advance }};

var brst_timers = [
{% for timer in site.data.timers.timers %}{
  "title": "{{timer.title}}", 
  "time": "{{timer.time}}", 
  "url": "{{timer.url}}"
},
{% endfor %}];
