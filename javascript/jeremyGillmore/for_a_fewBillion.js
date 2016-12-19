function doubleuntilday(days){
  var sum = 0;
  var startmoney = .01;
  for (var i = 1; i < days; i++)
  {
    sum += startmoney;
    startmoney = startmoney * 2;
  }
  console.log(sum);
}
function doubleuntilamount(dollar){
  var days = 1;
  var startMoney = .01;
  for (var sum = 0; sum < dollar; startMoney = startMoney * 2)
  {
    sum += startMoney;
    days++;
  }
  console.log("it took", days, "to get to", dollar, "dollars")
}
doubleuntilday(30);
doubleuntilamount(10000);
doubleuntilamount(1000000000);
doubleuntilamount(Infinity);
