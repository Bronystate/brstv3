/**
 * Bronystate 3.0 - Countdown Script
 * Shizuka Kamishima - 2015-11-23
 */

var timerbar = document.getElementById("timerbar");
var timertitle = document.getElementById("timertitle");
var timerclock = document.getElementById("timerclock");
var sidebar = document.getElementById("sidebar");

// -- From brst-timers.js --
//var showInSidebar = <number of timers to show in sidebar>
//var brst_timers[] = array of timer structs:
//  {"title":"Movie Night", "time":"2015-11-27 18:00 -0600", "url":"/path/to/lotto"}

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;

var timer; //to hold the setInterval()

var nextFridayMovie = moment.tz("America/New_York").hour(19).minute(0).second(0).millisecond(0).day(5);
var nextSaturdayMovie = moment.tz("America/New_York").hour(13).minute(0).second(0).millisecond(0).day(6);

var j = 0;
var timerlist;
var now = moment();

for (var i = 0; i++; i < showInSidebar) {
  // i = total timers loaded
  // j = index in timer data list
  
}
