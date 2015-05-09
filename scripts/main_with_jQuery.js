/* 
Things I would like to accomplish:
-----------------------------------
1. Make soundManager work.
2. Make a sound.
3. Play a sound.
4. Link a eventListener to play a sound.
5. Make more buttons and link them to sounds.
6. Make the layout of the page.
7. Make the style of the page.
8. Feel me proud because I done it!
9. Celebrate and get drunk!*/

$(document).ready(function(){
  soundManager.setup({
    url: 'audiofiles',
    onready: function() {
      // ------Sounds-------
      var spanish = soundManager.createSound({
        url: 'audiofiles/spanish.mp3'
      });
      var english = soundManager.createSound({
        url: 'audiofiles/english.mp3'
      });
      var chinese = soundManager.createSound({
        url: 'audiofiles/chinese.mp3'
      });
      var french = soundManager.createSound({
        url: 'audiofiles/french.mp3'
      });
      var italian = soundManager.createSound({
        url: 'audiofiles/italian.mp3'
      });
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
    $('#Spanish').on("click", spanish.play);
    $('#English').on("click", english.play);
    $('#Chinese').on("click", chinese.play);
    $('#French').on("click", french.play);
    $('#Italian').on("click" , italian.play);
    $('#oneup').on("click", oneup.play);
    $('#coin').on("click", coin.play);
    $('#fire').on("click", fire.play);
    $('#fly').on("click", fly.play);
    $('#game_over').on("click", game_over.play);
    $('#goompa').on("click", goompa.play);
    $('#jump').on("click", jump.play);
    $('#mushroom').on("click", mushroom.play);
    $('#pipe').on("click", pipe.play);
    $('#tail').on("click", tail.play);
    $('#thwomp').on("click", thwomp.play);







    } // oneready
  }); // soundManager
}); // $(document).ready