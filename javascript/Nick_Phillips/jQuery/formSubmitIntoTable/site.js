function clearFields(){
  $('input').val('');
}

function formComplete(){
  var complete = true;
  $.each($('input'), function(i, value){
    if(!$(value).val()){
      complete = false;
      $(this).css('border', '1px solid red').attr('placeholder', 'Enter info here');
    }
  })
  return complete;
}

function removeErrors(){
  $.each($('input'), function(i, value){
    $(this).css({'border': '', 'background': 'white'}).attr('placeholder', '');
  })
}

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    if(formComplete()){
      var $newRow = $('<tr>');
      var fieldEntries = $(this).children('div').children('div').children();
      $.each(fieldEntries, function(i, value){
        $newRow.append('<td>' + $(value).val() + '</td>');
      })
      $('tbody').append($newRow);
      clearFields();
      removeErrors();
    } else {
      alert('Please fill in all fields.');
    }
  })
})
