var Hour=6; // declaring number variable
var Minute= 32; //declaring number variable
var period="pm";// declaring a string variable
var Time=""; // declaring a string variable
if (Minute>30){  // if mintues is greater than 30
  Hour++ //  hour increments by one
  Time="its almost ";
}
else {
Time= "just after ";
}
Time = Time + Hour; // (current situation of time 6:32) Time= its almost 7 because 6:32 is greater than 30 therefor the hour incremnts by one and is now 7
if (period=="AM"){ // if period equals to AM
  Time = Time + "in the morning";
}
else{ // only two choices AM or Pm so if its pm it will execute "in the evening"
  Time = Time + " in the evening";
}
console.log(Time);
console.log(Hour, Minute, period);
var string = Hour+period; // cant put it in quotation marks bcz it will print hour and period but hour and period are variables so it will take that and put the value of that
console.log(string);
