function print_fancy(arr, symbol, reversed) {
  if (reversed == true) {
    for (var i = (arr.length - 1); i >= 0; i--) {
      if (symbol == undefined || symbol == false) {
        console.log(i + " -> " + arr[i])
      }
      else {
        console.log(i + " " + symbol + " " + arr[i]);
      }
    }
  }
  else {
    for (var i = 0; i < arr.length; i++) {
      if (symbol == undefined) {
        console.log(i + " -> " + arr[i])
      }
      else {
        console.log(i + " " + symbol + " " + arr[i]);
      }
    }
  }
}

var array = ["John", 43, "Phil", "Mary"];
print_fancy(array);
print_fancy(array, "------");
print_fancy(array, "=>", false);
print_fancy(array, "::", true);
