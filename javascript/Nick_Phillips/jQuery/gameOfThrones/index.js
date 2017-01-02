function buildHTML(name, region, titles){
  var html = '<div class="infoDiv col-xs-offset-3 col-xs-6"><h4>Name:</h4>' + '<p>' + name + '</p>';
  html += '<h4>Region:</h4>' + '<p>' + region + '</p>';
  html += '<h4>Titles:</h4>';
  $.each(titles, function(i, title){
    html+= '<p>' + title + '</p>'
  })
  html += '</div>'
  return html;
}

function callApi(el){
  $.ajax({
    url: 'http://anapioficeandfire.com/api/houses/' + $(el).attr('id'),
    type: 'GET',
    context: el,
    success: function(data){
      var name = data.name;
      var region = data.region;
      var titlesArray = data.titles;
      $(el).data({
        'name': name,
        'region': region,
        'titles': titlesArray
      })
      $('.container').append(buildHTML(name, region, titlesArray));
    }
  })
}

$(document).ready(function(){
  $('img').hover(function(){
    if(!$(this).data('name')){
      callApi($(this));
    } else {
      $('.container').append(buildHTML($(this).data('name'), $(this).data('region'), $(this).data('titles')));
    }
  }, function(){
    $('.infoDiv').remove();
  })
})
