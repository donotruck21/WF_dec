function slotMachine(coins, leaveWith){
  var coinsWon = 0;
  if (leaveWith === undefined)
  {
    leaveWith = 1;
  }
  while (coins > 0)
  {
    coins--;
    if (Math.trunc(Math.random()*100) == 1)
    {
      coinsWon = Math.trunc((Math.random()*50) + 50);
    }
    if (coinsWon > leaveWith)
    {
      return coins+coinsWon;
    }
  }
  return 0;
}


slotMachine(100);
slotMachine(50);
slotMachine(200,50);
slotMachine(200,100);
