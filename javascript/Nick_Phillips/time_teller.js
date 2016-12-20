function time_teller(hour, minute, period){
  switch(period = period.toLowerCase()){
    case 'am':
      period = " in the morning";
      break;
    case 'pm':
      period = " in the evening";
      break;
  }
  if(minute >= 45){
    console.log("It is almost " + (hour+1) + period);
  } else if(minute <= 15){
    console.log("It is just after " + hour + period);
  } else {
    console.log("It is around " + hour + " thirty" + period);
  }
}

time_teller(5, 00, "Am");
