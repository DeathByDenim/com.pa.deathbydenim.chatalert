(function() {
  var sound = api.settings.value("ui", "com_pa_deathbydenim_chat_alert");
  if(_.isUndefined(sound)) {
    sound = "/SE/UI/UI_camera_anchor_saved";
  }

  model.chatLog.subscribe(function (messages) {
    console.log("isserver: ", messages[0].isServer())
    if(messages.length > 0 && !messages[messages.length-1].isServer()) {
      api.audio.playSound(sound);
    }
  });
})();
