function showRemainingdays() {
  var daysUntilMyBirthday = 60;
  for (var daysUntilMyBirthday = 60; daysUntilMyBirthday >0; daysUntilMyBirthday--){
    if (daysUntilMyBirthday >30) {
      console.log(daysUntilMyBirthday,"days until my birthday Such a long Time.....");
    }
    else if (daysUntilMyBirthday <31){
       console.log(daysUntilMyBirthday,"days Its getting close to my birthday!");
    }
    else if (daysUntilMyBirthday<5){
       console.log(daysUntilMyBirthday,"OMG its right around the corner!");
    }
  }
  console.log("Happy birthday");
}

showRemainingdays();
