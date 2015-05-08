$('.greeting').on("click", showGreeting);

function showGreeting (){
  var output = "WDI 13 speaks " + $(this).attr('id');
  $('p').text(output);
}


soundManager.onload = function(){
  soundManager.createSound()
}

soundManager.setup({
  // where to find flash audio SWFs, as needed
  url: 'audiofiles',
  onready: function() {
    var spanish = soundManager.createSound({
      id:'spanish',
      url: 'audiofiles/spanish.mp3'
    })
    spanish.play();
  }
});

// soundManager.setup({
//   url: '/path/to/swf-files/',
//   onready: function() {
//     var mySound = soundManager.createSound({
//       id: 'aSound',
//       url: '/path/to/an.mp3'
//     });
//     mySound.play();
//   },