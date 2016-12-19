sum = .01;
for (var days = 2; days < 31; days++){
    sum *=2;

    /*if (sum > 10000){
      break;
    }*/
}
console.log("it took the peasant " + days + " days to accumulate " + sum);
