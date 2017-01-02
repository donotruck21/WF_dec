function buildPokemon(data){
  var name = data.pokemon.name;
  var spriteUrl = data.image;
  var div = "<div class='col-xs-4 col-md-3'><h4>" + name.capitalizeFirstLetter() + "</h4><img src='" + "https://pokeapi.co" + spriteUrl + "'></div>";
  $('.container').append(div);
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

$(document).ready(function(){
  for (var i = 1; i < 152; i++) {
    $.ajax({
      url: "https://pokeapi.co/api/v1/sprite/" + i,
      type: "GET",
      success: function(data) {
        buildPokemon(data);
      }
    });
  }
})
