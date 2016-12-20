

function slotMachine(numQuarters, leaveAt){
var quarters = numQuarters
  while(quarters > 0) {
    quarters--;
    console.log("You have " + quarters + " quarters remaining.")
    if(Math.floor(Math.random() * 100) == 1){
      var winnings = Math.floor(Math.random() * 50) + 50;
      console.log("You won " + winnings + " quarters!");
      quarters += winnings
      console.log("You now have " + quarters + " quarters!");
      if (quarters > leaveAt) {
        return "You are leaving with " + quarters + " quarters!";
      } else {
        console.log("Let's keep playing until we get to " + leaveAt + " quarters!");
      }

    }
  }
  return "Damn, you are leaving with " + 0 + " quarters. Better luck next time!";
}

console.log(slotMachine(50, 120));
