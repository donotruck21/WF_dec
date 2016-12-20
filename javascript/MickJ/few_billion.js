function doublingMoney(days) {
  var amount = .01;
  for (var i = 1; i < days; i++) {
    amount *= 2;
  }
  return amount;
}

console.log(doublingMoney(30)); // $5,368,709.12 after 30 days
console.log(doublingMoney(21)); // 21 days to get past $10,000
console.log(doublingMoney(38)); // 38 days to get past 1 billion
console.log(doublingMoney(1032)); // 1032 days to Infinity
