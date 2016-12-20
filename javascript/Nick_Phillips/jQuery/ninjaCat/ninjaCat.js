$(document).ready(function(){
  function createPage(){
    var html = '<div class="container"><h1>The Ninja Cat is Hiding!</h1><h3>Can You Find Him?</h3>';
    for(var i=0;i<5;i++){
      html += '<div class="col-xs-12"><img src="img/ninja' + i + '.png" data-alt-src="img/cat' + i + '.png"/></div>';
    }
    html += '</div>';
    $('body').html(html);
  }

  function addEventListeners(){
    $('.container').on('click', 'img', function(){
      var alternateImgSrc = $(this).data('alt-src');
      var currentSrc = $(this).attr('src');
      $(this).attr('src', alternateImgSrc);
      $(this).data('alt-src', currentSrc);
    });
  }

  function initialize(){
    createPage();
    addEventListeners();
  }

  initialize();
});
