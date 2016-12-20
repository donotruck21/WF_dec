function birthdayTime(days){
  for (days; days >=0; days--) {
    if (days === 0){
      console.log('PARTY TIME MANG!');
    } else if (days>30){
      console.log(days + " until my birthday. Such a long time... :(");
    } else if(days<=5){
      console.log("We going to get wild up in this place!! " + days + " to go!");
    } else if (days<30){
      console.log(days + " UNTIL MY BIRTHDAY!");
    }
  }
}

birthdayTime(60);
