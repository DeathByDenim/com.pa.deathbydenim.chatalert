(function() {
  var sound = api.settings.value("ui", "com_pa_deathbydenim_chat_alert");
  if(_.isUndefined(sound)) {
    sound = "/SE/UI/UI_camera_anchor_saved";
  }

  model.chatMessages.subscribe(function (messages) {
    if(messages.length > 0 && messages[messages.length-1].type == "lobby") {
      api.audio.playSound(sound);
    }
  });
})();
