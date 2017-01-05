function clearFields(){
  $('input, textarea').val('');
}

function formComplete(){
  var complete = true;
  $.each($('input'), function(i, value){
    if(!$(value).val()){
      complete = false;
      $(value).css('border', '1px solid red').attr('placeholder', 'Enter info here');
    }
  })
  if(!$('textarea').val()){
    complete = false;
    $('textarea').css('border', '1px solid red').attr('placeholder', 'Enter info here');
  }
  return complete;
}

function removeErrors(){
  $.each($('input'), function(i, value){
    $(value).css({'border': '', 'background': 'white'}).attr('placeholder', '');
  })
  $('textarea').css({'border': '', 'background': 'white'}).attr('placeholder', '');
}

function flipCard(el){
  var name = $(el).data('name');
  var bio = $(el).data('bio');
  if($(el).data('face') == 'front'){
    $(el).html('<h3>' + bio + '</h3>');
    $(el).data('face', 'back');
  } else if ($(el).data('face') == 'back'){
    $(el).html('<h3>' + name + '</h3><h4>Click here for bio!</h4>');
    $(el).data('face', 'front');
  }
}

function createCard(){
  var newCard = '<div class="card col-xs-12" data-face="front" data-name="' + $("input[name=first_name]").val() + " " + $("input[name=last_name]").val() + '" data-bio="' + $('textarea[name=description]').val() + '">'
  newCard += '<h3>' + $('input[name=first_name]').val() + ' ' + $('input[name=last_name]').val() + '</h3>' + '<h4>Click here for bio!</h4></div>'
  $('.cardDiv').append(newCard);
}

function escapeHtml(string) {
  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };
  return String(string).replace(/[&<>"'\/]/g, function (s) {
    return entityMap[s];
  });
}

$(document).ready(function(){
  $('.cardDiv').on('click', '.card', function(){
    flipCard($(this));
  })

  $(document).on('focusout', 'input', function(){
    $(this).val(escapeHtml($(this).val()));
  })

  $('form').submit(function(event){
    event.preventDefault();
    if(formComplete()){
      createCard();
      clearFields();
      removeErrors();
    } else {
      alert('Please fill in all fields.');
    }
  })
})
