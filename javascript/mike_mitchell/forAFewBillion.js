var reward = .01;

for(var days = 2; days <=30; days++){
  reward = reward * 2;

  if (reward < 10000){
    daysTo10000 = days;
  }

  if (days <= 30){
    console.log("On day " + days + " the servant's reward is $" + reward);
  }
}

console.log("It took the servant " + (daysTo10000 + 1) + " days to reach $10,000.");

while(reward < 1000000000){
  reward = reward * 2;
  days++;
}

console.log("It takes the servant " + days + " days to make one billion dollars!");

while (reward < Infinity){
  reward = reward * 2;
  days++;
}

console.log("It takes the servant " + days + " days to reach infinite money!");
