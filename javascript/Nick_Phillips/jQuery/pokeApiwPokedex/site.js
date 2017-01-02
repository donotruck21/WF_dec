function callAjax(url, callback, i, el){
  $.ajax({
    url: url,
    type: "GET",
    context: this,
    success: function(data) {
      if(i){
        callback(i, data);
      } else {
        callback(el, data);
      }
    }
  });
}

function buildPokemon(i, data){
  var name = data.pokemon.name;
  var spriteUrl = data.image;
  var div = "<div id='" + i + "' class='pokemon col-xs-6 col-sm-4 col-md-3'><h4>" + name.capitalizeFirstLetter() + "</h4><img src='" + "https://pokeapi.co" + spriteUrl + "' alt='" + i + "'></div>";
  $('.imageDiv').append(div);
}

function loopPokemon(){
  for (var i = 1; i < 153; i++) {
    (function(i){
      callAjax("https://pokeapi.co/api/v1/sprite/" + i, buildPokemon, i);
    })(i);
  }
}

function fillPokedex(el, data){
  var types = data["types"];
  var height = data["height"];
  var weight = data["weight"];
  var image = $(el).children('img').attr('src');
  var headerText = $(el).children('h4').text();
  var html = '<h3>' + headerText + '</h3><img src="' + image + '"><h5>Types</h5>';
  $.each(types, function(i, val){
    html += '<p>' + val["name"] + '</p>';
  })
  html += '<h5>Height</h5><p>' + height + '</p><h5>Weight</h5><p>' + weight + '</p>';
  $('.pokedexDiv').html('').html(html);
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

$(document).ready(function(){
  loopPokemon();

  $('.imageDiv').on('click', '.pokemon', function(){
    $('.pokedexDiv').html('<h6>Loading</h6>');
    callAjax("http://pokeapi.co/api/v1/pokemon/" + $(this).attr('id'), fillPokedex, false, $(this));
  })
})
