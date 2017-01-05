var testArray = ["hi", 2, "bye", "test", false, 13, 15, true, 100];

//create a new array using only numbers from existing array
function numbersOnly(arr){
    var numberArray = [];
    for (var i = 0; i < arr.length; i++){
      if(typeof arr[i] === "number"){
        numberArray.push(arr[i]);
      }
    }
    return numberArray;
}

console.log("The new array created from the numbers contained within your array is " + numbersOnly(testArray));

console.log("That function created a new array, so our original array is still " + testArray);

//remove non-number entries from array passed to function
function numbersOnlyAgain(arr){
  var popCount = 0;
  for (var i = 0; i < arr.length; i++){
    if (typeof arr[i] !== "number"){
      for (var j = i + 1; j < arr.length; j++){
        if (typeof arr[j] === "number"){
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          break;
        }
      }
    }
    if (typeof arr[i] !== "number"){
      popCount++;
    }
  }
  for (popCount; popCount > 0; popCount--){
    arr.pop();
  }
}

//different method of removing non-number items from array using .splice() method.
function numbersOnlySplice(arr){
  for (var i = arr.length; i >= 0; i--){
    if (typeof arr[i] !== "number"){
      arr.splice(i, 1);
    }
  }
}

numbersOnlySplice(testArray);
console.log("That function modified the original array, so it is now " + testArray);


var testArray2 = [1, 2, 3, "hi", 4, 5, 6];
var testArray3 = ["hi", "", "", "", 1, "", 2, ""]
numbersOnlyAgain(testArray2);
console.log(testArray2);
numbersOnlySplice(testArray3);
console.log(testArray3);
