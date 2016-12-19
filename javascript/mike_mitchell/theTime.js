var HOUR = 12, MINUTE = 45, PERIOD = "PM";
var toHour, ampm;


if (MINUTE == 0) {
  toHour = "It is exactly "
} else if (MINUTE < 15) {
  toHour = "It's almost a quarter after ";
} else if (MINUTE < 30) {
  toHour = "It's almost half past ";
} else if (MINUTE <= 59) {
  toHour = "It's almost ";
    if (HOUR === 12) {
    HOUR = 1;
    }
}

if(PERIOD == "AM" && HOUR == 12) {
  ampm = " midnight.";
} else if (PERIOD == "PM" && MINUTE == 0 && HOUR == 12) {
  ampm = " noon.";
} else if (PERIOD == "PM" && (HOUR == 12 || HOUR <= 4)) {
  ampm = " in the afternoon.";
} else if (PERIOD == "PM" && (HOUR >= 5 && HOUR < 12)) {
  ampm = " in the evening.";
} else if (PERIOD == "AM") {
  ampm = " in the morning.";
}


console.log(toHour + HOUR + ampm);
