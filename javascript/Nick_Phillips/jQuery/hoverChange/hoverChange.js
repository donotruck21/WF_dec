$(document).ready(function(){
  $.each($('img'), function(i, value){
    $(this).hover(function(){
      var drunkImage = $(this).data('alt-src');
      var soberImage = $(this).attr('src');
      $(this).attr('src', drunkImage);
      $(this).data('alt-src', soberImage);
    })
  })
})
