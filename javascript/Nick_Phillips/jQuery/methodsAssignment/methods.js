$(document).ready(function(){
  $('#click button').click(function(){
    alert('Button has been clicked!');
  })
  $('#hide button').click(function(){
    $(this).hide();
  })
  $('#show button').click(function(){
    $('#image').show();
  })
  $('#toggle button').click(function(){
    $('#toggle p').toggle();
  })
  $('#slideDown button').first().click(function(){
    $('#siblingP').slideDown();
  })
  $('#slideDown button').last().click(function(){
    $('#siblingP').slideUp();
  })
  $('#slideToggle button').click(function(){
    $('#siblingPToggle').slideToggle();
  })
  $("#fadeIn button:first").click(function(){
    $('#siblingPFade').fadeIn();
  })
  $('#fadeIn button:eq(1)').click(function(){
    $('#siblingPFade').fadeOut();
  })
  $('#addClass button').click(function(){
    $('#addClass .methodDescription').addClass('addClass');
  })
  $('#before button').click(function(){
    $('#before .methodDescription').before('<span>1</span>');
    $(this).off('click');
  })
  $('#after button').click(function(){
    $('#after .methodDescription').after('<span>2</span>');
    $(this).off('click');
  })
  $('#append button').click(function(){
    $('#append .methodDescription').append('<span>3</span>');
    $(this).off('click');
  })
  $('#html button').click(function(){
    $('#html .methodDescription').html('<h3>Header3</h3>');
    $(this).off('click');
  })
  $('#attr button').click(function(){
    $($(this).siblings('img')).attr('src', 'http://www.jameswatling.com/blog/content/images/2016/07/Yellow_square_happy_smiley.jpg');
  })
  $('#submit').click(function(event){
    event.preventDefault();
    $('#text').val('Told you so!');
  })
  $('#text button').click(function(){
    $('#badText').text("Excuse me sir, please watch where you are going");
  })
  $('#data button').click(function(){
    var numOfIterations = parseInt($('#number').data('options'));
    var randomNum = Math.floor(Math.random() * numOfIterations);
    $('#number').text(randomNum);
  })
})
