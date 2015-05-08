soundManager.setup({
  // where to find flash audio SWFs, as needed
  url: 'audiofiles',
  onready: function() {
    var spanish = soundManager.createSound({
      id:'spanish',
      url: 'audiofiles/spanish.mp3'
    })
  $('.greeting').on("click", showGreeting);

  function showGreeting (){
    var output = "WDI 13 speaks " + $(this).attr('id');
    $('p').text(output);
  }


    spanish.play();
  }
});
