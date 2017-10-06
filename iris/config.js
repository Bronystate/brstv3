conf = qwebirc.config.load({
    "ui": {
        "fg_color": "DDDDDD",
        "fg_sec_color": "999999",
        "privacy": false,
        "nick_status": true,
        "flash_on_mention": false,
        "dedicated_msg_window": false,
        "bg_color": "000000",
        "dedicated_notice_window": false,
        "lastpos_line": true,
        "hide_joinparts": true,
        "simple_color": false,
        "beep_on_mention": true,
        "nick_click_query": false,
        "nick_colors": true
    },
    "atheme": {
        "sasl_type": "PLAIN",
        "nickserv_login": true,
        "chan_list_on_start": false,
        "chan_list": false,
        "chan_list_cloud_view": false
    },
    "frontend": {
        "chan_prompt": true,
        "initial_chans": "#bronystate",
        "prompt": true,
        "chan_autoconnect": true,
        "base_url": "",
        "dynamic_base_url": "",
        "app_title": "Bronystate Webchat",
        "initial_nick": "pony_....",
        "static_base_url": "",
        "network_name": "PonyChat",
        "connections": ["flash", "websocket"]
    },
    "flash": {
        // SERVER: Hostname (or IP address) of IRC server to connect to.
        "server": "irc.ponychat.net",

        // PORT: Port of IRC server to connect to.
        "port": 6667,

        // XMLPORT: Port of IRC servers flash policy daemon
        "xmlport": 8430,
    },
    "websocket": {
        // URL: URL of IRC server to connect to.
        "url": "wss://irc.ponychat.net:6767/"
    }
});
