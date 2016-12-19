 for (var days = 60; days > 0; days--){
    if(days > 30){
      console.log(days + " until my birthday, too long to wait!");
    }
    else if (days < 30 && days >= 5){
      console.log("only " + days + " until my birthday!");
    }
    else if (days < 5){
      console.log(days + " days until my it's my birthday!");
    }
}

console.log("It's my birthday!");
