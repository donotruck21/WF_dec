function tellTime(hour, minute, period) {
  var message = "";
  if (minute === 5) {
    message = "It's five after " + hour;
  }
  else if (minute === 15) {
    message = "It's quarter after " + hour;
  }
  else if (minute === 30) {
    message = "It's half past " + hour;
  }
  else if (minute === 45) {
    message = "It's fifteen till " + (hour + 1);
  }
  else if (minute === 55) {
    message = "It's five till " + (hour + 1);
  }
  else if (minute < 30) {
    message = "It's just after " + hour;
  }
  else {
    message = "It's almost " + (hour + 1);
  }

  if(period == "AM") {
    message += " in the morning."
  }
  else if(period == "PM" && (hour === 12 || hour < 5)) {
    message += " in the afternoon."
  }
  else if(period == "PM" && hour >= 5 && hour <= 8) {
    message += " in the evening."
  }
  else {
    message += " at night."
  }
  console.log(message)
}
