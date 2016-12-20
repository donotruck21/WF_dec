function quarterGame(games) {
  for (var i = 0; i < games; i++) {
    var randomTotal = Math.floor(Math.random() * 51) + 50;
    var pull = Math.trunc(Math.random() * 100);

    if(pull === 5){
      games += randomTotal;
      console.log("You win " + randomTotal + "! You now have " + games + " games.");
    } else {
      console.log("You lose!");
    }
  }
  return games;
}

quarterGame(10);
