$('.greeting').on("click", showGreeting);

function showGreeting (){
  var output = "WDI 13 speaks " + $(this).attr('id');
  $('p').text(output);
}