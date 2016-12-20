var myArr = ["James", "Jill", "Jane", "Jack"];

function printArr(arr, symbol, reversed){
  for (var i = 0; i < arr.length; i++){
      if (reversed !== true) {
        console.log(i + " " + symbol + " " + arr[i]);
      } else {
        console.log(arr[i] + " " + symbol + " " + i);
      }
  }
}
printArr(myArr, ">>>", false);
