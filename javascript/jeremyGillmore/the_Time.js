function tellMeTheTime(hour, minute, period){
  var theTime = "It is";
  if (minute > 59 || hour > 12 || (period != "AM" && period != "PM"))
  {
    console.log(hour, ":", minute, period, "is not a real time, please enter a real time!");
    return;
  }
  if (minute < 2)
  {
  }
  else if (minute < 8)
  {
    theTime += " 5 after";
  }
  else if (minute < 13)
  {
    theTime += " 10 after";
  }
  else if (minute < 18)
  {
    theTime += " a quarter after";
  }
  else if (minute < 23)
  {
    theTime += " 20 after";
  }
  else if (minute < 28)
  {
    theTime += " 25 after";
  }
  else if (minute < 33)
  {
    theTime += " half past";
  }
  else
  {
    hour++;
    if (hour == 12 && period == "AM")
    {
      period = "PM";
    }
    else if (hour == 12)
    {
      period = "AM";
    }
    else if (hour > 12)
    {
      hour = 1;
    }
  }
  if (minute > 57)
  {
  }
  else if (minute > 52)
  {
    theTime += " 5 til";
  }
  else if (minute > 47)
  {
    theTime += " 10 til";
  }
  else if (minute > 42)
  {
    theTime += " quarter til";
  }
  else if (minute > 37)
  {
    theTime += " 20 til";
  }
  else if (minute > 32)
  {
    theTime += " 25 til";
  }
  if (hour != 12)
  {
    theTime += " " + hour;
  }
  if (hour < 12 && period == "AM")
  {
    theTime += " in the morning.";
  }
  else if (hour < 5)
  {
    theTime += " in the afternoon.";
  }
  else if (hour < 8)
  {
    theTime += " in the evening.";
  }
  else if (hour < 12)
  {
    theTime += " at night.";
  }
  else if (period == "AM")
  {
    theTime += " Midnight!";
  }
  else
  {
    theTime += " Noon.";
  }
  console.log(theTime);
}

tellMeTheTime(8,32,"AM");
tellMeTheTime(16,32,"AM");
tellMeTheTime(8,78,"AM");
tellMeTheTime(8,32,"DF");
tellMeTheTime(4,15,"PM");
tellMeTheTime(8,59,"PM");
tellMeTheTime(12,1,"AM");
tellMeTheTime(11,59,"AM");
tellMeTheTime(12,48,"PM");
tellMeTheTime(6,7,"PM");
tellMeTheTime(10,24,"PM");
