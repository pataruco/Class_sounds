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

    // -----eventListener-----
    $('#Spanish').on("click", spanish.play);
    $('#English').on("click", english.play);
    $('#Chinese').on("click", chinese.play);
    $('#French').on("click", french.play);
    $('#Italian').on("click" ,italian.play);



    } // oneready
  }); // soundManager
}); // $(document).ready