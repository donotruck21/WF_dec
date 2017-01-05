$(document).ready(function(){
  function wipeSlate(){
    $('.weatherDiv').html('');
  }

  $(window).resize(function(){
    if($(window).width()<767 && !$('.weatherDiv').html()){
      $('.container').css({'display': 'flex', 'padding-top': '0%'});
    } else if ($(window).width()<767 && $('.weatherDiv').html()){
      $('.container').css({'display': 'block', 'padding-top': '30%'});
    } else if ($(window).width()>767 && $('.weatherDiv').html()){
      $('.container').css({'display': 'flex', 'padding-top': '0%'});
    } else if ($(window).width()>767 && !$('.weatherDiv').html()){
      $('.container').css({'display': 'flex', 'padding-top': '0%'});
    }
  })

  $('form').submit(function() {
    wipeSlate();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + $('input[name=city]').val() + '&units=imperial&appid=b27f2a8f590807ae517fc056abab6219';

    $.get(url, function(res) {
      var cityName = res.name;
      var country = res.sys.country;
      var temp = Math.floor(res.main.temp);
      var type = res.weather[0].main;
      var html = "<div class='weatherDiv col-xs-12 col-md-6'><h1>" + cityName + ', ' + country + "</h1>";
      html += "<h3>" + temp + '&deg' + ' with ' + type + "</h3></div>";
      $('.container').append(html);
    }, 'json');

    return false;
  });
})
