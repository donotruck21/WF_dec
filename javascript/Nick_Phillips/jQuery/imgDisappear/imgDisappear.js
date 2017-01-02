function createPage(){
  var html = '<div class="container">';
  for(var i=0;i<8;i++){
    html += '<div class="col-xs-12 col-sm-6 col-md-4"><img class="img-responsive" src="http://www.jameswatling.com/blog/content/images/2016/07/Yellow_square_happy_smiley.jpg" alt="Smiley pic"' + i + '"></div>'
  }
  html += '<div id="buttonDiv"><button class="btn btn-success">Restore</button><div></div>';
  $('body').html(html);
}

function addEventListeners(){
  $('.container img').click(function(){
    $(this).fadeOut(function(){
      $(this).parent().css('min-height', 0);
    });
  });

  $('button').click(function(){
    createPage();
    addEventListeners();
  });
}

function initialize(){
  createPage();
  addEventListeners();
}

$(document).ready(function(){
  initialize();
})
