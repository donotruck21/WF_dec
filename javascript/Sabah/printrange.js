function printrange(min,max,skip){

//  for (min; min <= max; min += skip){

while (min <= max){
    console.log(min);
    min += skip;
  }
}
printrange(2,10,2);
