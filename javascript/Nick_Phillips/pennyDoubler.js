function pennyDoubler(){
  var sum = 0.01;
  for (var i = 1; i <=30; i++) {
    sum *= 2;
  }
  return sum;
}

console.log(pennyDoubler()); // returns $10,737,418.24
// It would take 20 days to get $10,000
// It would take 37 days to get $1,000,000,000
