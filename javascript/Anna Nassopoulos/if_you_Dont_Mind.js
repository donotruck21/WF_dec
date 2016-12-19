var Hour=6;
var Minute=20;
var period="pm";
var Time="";
if (Minute>30){
  Hour++
  Time="its almost ";
}
else {
Time= "just after ";
}
Time = Time + Hour;
if (period=="AM"){
  Time = Time + "in the morning";
}
else{
  Time = Time + " in the evening";
}
console.log(Time);
console.log(Hour, Minute, period);
var string = Hour+period;
console.log(string);
