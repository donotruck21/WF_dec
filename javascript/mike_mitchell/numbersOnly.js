var testArray = ["hi", 2, "bye", "test", false, 13, 15, true, 100]
function numbersOnlyAgain(arr){
  var j = 1;
  var popCount = 0;
  for (var i = 0; i < arr.length; i++){
    if (typeof arr[i] !== "number"){
      while(arr[j] !== "number" && j < arr.length){
        j++;
        console.log(j);
      }
      arr[i] = arr[j];
      console.log(arr);
    }
    j++;
    console.log(j);
    if (j >= arr.length){
      break;
    }
  }
  popCount = j - i;
  console.log(popCount);
  for (popCount; popCount > 0; popCount--){
    arr.pop();
  }

  console.log(arr);
}

console.log(numbersOnlyAgain(testArray));
