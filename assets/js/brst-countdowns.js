/**
 * Bronystate 3.0 - Countdown Script
 * Shizuka Kamishima - 2015-11-23
 */

var timerbar = document.getElementById("timerbar");
var timertitle = document.getElementById("timertitle");
var timerclock = document.getElementById("timerclock");
var sidebar = document.getElementById("sidebar");

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;

var interval; //to hold the setInterval()

var nextFridayMovie = moment.tz("America/New_York").hour(19).minute(0).second(0).millisecond(0).day(5);
var nextSaturdayMovie = moment.tz("America/New_York").hour(14).minute(0).second(0).millisecond(0).day(6);

function loadTimers() {
  console.log("Adding moments to timers...");
  console.log(brst_timers.length);
  // add momentjs objects to timers
  for (var i = 0; i < brst_timers.length; i++) {
    console.log('Loaded timer: "' + brst_timers[i].title + '"');
    brst_timers[i]["moment"] = moment(brst_timers[i].time, "YYYY-MM-DD HH:mm Z");
  }
  brst_timers.sort(cmpTimers);
}

function cmpTimers(a, b) {
  if (a.moment.isBefore(b.moment))
    return -1;
  if (a.moment.isAfter(b.moment))
    return 1;
  return 0;
}

window.onload = loadTimers;
