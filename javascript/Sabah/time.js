var hour = 7;
var minute = 14;
var period = "AM";
var AM = " in the morning";
var PM = " in the afternoon";
var thirty = " half past ";

if (minute > 30 && period == "AM"){
  hour = hour + 1;
  console.log("it is almost " + AM);
}
if (minute < 30 && period == "AM"){
  console.log("it is almost " + hour + ":" + minute + AM);
}
if (minute <= 30 && period == "PM"){
  console.log("It's just after " + hour + PM);
}
if (minute == 30){
  console.log("The time is " + hour + ":" + "30" + period);
}
else {
  console.log("I don't know what time it is")
}
