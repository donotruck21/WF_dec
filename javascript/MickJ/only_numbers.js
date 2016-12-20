function onlyNumbers(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function onlyNumbersNotNew(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "number") {
      arr.splice(i, 1);
    }
  }
}

// TESTS:
// var array = [1, "apple", -3, "orange", 78];
// console.log(onlyNumbers(array));
// onlyNumbersNotNew(array);
// console.log(array);
