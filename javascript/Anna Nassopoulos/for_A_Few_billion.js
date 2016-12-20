function Howmuchwastherewardafter30days(){
  var pennies= 0.01;
  var holding = 0.01;
  for (var days=1; days<30; days++){
    pennies = pennies * 2;
    holding = holding + pennies;
    console.log("On day", days+1, "You have", holding);
    }
    return holding;

}


console.log(Howmuchwastherewardafter30days());
