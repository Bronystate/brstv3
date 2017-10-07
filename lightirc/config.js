/*
 * lightIRC configuration
 * www.lightIRC.com
 *
 * You can add or change these parameters to customize lightIRC.
 * Please see the full parameters list at http://redmine.lightirc.com/projects/lightirc/wiki/Customization_parameters
 *
 */

var params = {};

params.host                         = "scootaloo.ponychat.net";
params.port                         = 6697;
params.policyPort                   = 8430;

params.language                     = "en";
params.styleURL                     = "css/black.css";

params.nick                         = "pony_%";
params.quitMessage                  = "";
params.autojoin                     = window.location.search.substr(1);
params.perform                      = "";

params.rememberNickname             = true;

params.channelHeader                = "%channel% [%users%] %topic%";
params.showServerWindow             = true;
params.navigationPosition           = "top";
params.showRichTextControls         = false;
params.showChannelCentral           = false;

window.onbeforeunload = function() {
  swfobject.getObjectById('lightIRC').sendQuit();
}

for(var key in params) {
  params[key] = params[key].toString().replace(/%/g, "%25");
}
