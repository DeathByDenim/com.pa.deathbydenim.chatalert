(function() {
  api.settings.definitions.ui.settings["com_pa_deathbydenim_chat_alert"] = {"default": "PING", "options": ["", "/SE/UI/UI_ping", "/SE/UI/UI_camera_anchor_saved", "/SE/UI/plus/sing"], "optionsText": ["OFF", "PING", "CHIME", "SING"], "title": "CHAT ALERT SOUND", "type": "select"};
  model.settingDefinitions(api.settings.definitions);

  $('.ui').find('.sub-group').last().after(
    "                            <div class=\"sub-group\">\n" +
    "                                <div class=\"option\" data-bind=\"template: { name: 'setting-template', data: $root.settingsItemMap()['ui.com_pa_deathbydenim_chat_alert'] }\"></div>\n" +
    "                            </div>\n"
  );
})();
