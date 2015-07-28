$(document).ready(function(){
  soundManager.setup({
    url: 'audiofiles',
    onready: function() {
      // ------Sounds-------
      var oneup = soundManager.createSound({
        url: 'audiofiles/1up.mp3'
      });
      var coin = soundManager.createSound({
        url:'audiofiles/coin.mp3'
      });
      var fire = soundManager.createSound({
        url: 'audiofiles/fire.mp3'
      });
      var fly = soundManager.createSound({
        url:'audiofiles/fly.mp3'
      });
      var game_over = soundManager.createSound({
        url: 'audiofiles/game_over.mp3'
      });
      var goompa = soundManager.createSound({
        url:'audiofiles/goompa.mp3'
      });
      var jump = soundManager.createSound({
        url:'audiofiles/jump.mp3'
      });
      var mushroom = soundManager.createSound({
        url:'audiofiles/mushroom.mp3'
      });
      var pause = soundManager.createSound({
        url:'audiofiles/pause.mp3'
      });
      var pipe = soundManager.createSound({
        url:'audiofiles/pipe.mp3'
      });
      var tail = soundManager.createSound({
        url:'audiofiles/tail.mp3'
      });
      var thwomp = soundManager.createSound({
        url:'audiofiles/thwomp.mp3'
      });

    // -----eventListener-----
    $('#oneup').on("click", oneup.play);
    $('#oneup').on("click", oneup.play);
    $('#coin').on("click", coin.play);
    $('#fire').on("click", fire.play);
    $('#fly').on("click", fly.play);
    $('#game_over').on("click", game_over.play);
    $('#goompa').on("click", goompa.play);
    $('#jump').on("click", jump.play);
    $('#mushroom').on("click", mushroom.play);
    $('#pause').on("click", pause.play);
    $('#pipe').on("click", pipe.play);
    $('#tail').on("click", tail.play);
    $('#thwomp').on("click", thwomp.play);
    } // oneready
  }); // soundManager

  // Funcion to show keys 
  function showKeys (event){
  $('.hidden').css("visibility", "visible");
  }

  function noShowKeys (event){
    $('.hidden').css("visibility", "hidden");
  }

  // eventListener to show keys
  $('img.mario').on("mouseover", showKeys);
  $('img.mario').on("mouseout", noShowKeys);

  //Function to show the keyboard
  function showKeyboard (event){
  $('.hidden_keys').css("visibility", "visible");
  }

  function noShowKeyboard (event){
  $('.hidden_keys').css("visibility", "hidden");
  }

  // eventListener to show the keyboard
  $('header_image').on("mouseover", showKeyboard);
  $('header_image').on("mouseout", noShowKeyboard);



  // On keypress

  function playSound(filename) {
    console.log(filename);
    var sound = soundManager.createSound({
      url: 'audiofiles/' + filename
    });
    sound.play();
  }

  $(document).on('keypress', function (e) {
    console.log(event.keyCode);
    switch(e.keyCode) {
      case 113:
        playSound('1up.mp3');
        break;
      case 119:
        playSound('coin.mp3');
        break;
      case 101:
        playSound('fire.mp3');
        break;
      case 114:
        playSound('fly.mp3');
        break;
      case 97:
        playSound('game_over.mp3');
        break;
      case 115:
        playSound('goompa.mp3');
        break;
      case 100:
        playSound('jump.mp3');
        break;
      case 102:
        playSound('mushroom.mp3');
        break;
      case 122:
        playSound('pause.mp3');
        break;
      case 120:
        playSound('pipe.mp3');
        break;
      case 99:
        playSound('tail.mp3');
        break;
      case 118:
        playSound('thwomp.mp3');
        break;
      default:
        console.log('no sounds');        
    }
  }
  );

}); // $(document).ready