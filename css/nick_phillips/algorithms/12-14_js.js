function popFront(arr){
  for(var i =0; i<arr.length-1; i++){
    arr[i] = arr[i+1];
  }
  arr.length = arr.length -1;
  return arr;
}


function pushFront(arr, val){
  for(var i=arr.length; i>0; i--){
    arr[i] = arr[i-1];
  }
  arr[0] = val;
  return arr;
}

function removeAt(arr, index){
  for(var i=index; i<arr.length;i++){
    arr[i] = arr[i+1];
  }
  arr.pop();
  return arr;
}

function insertAt(arr, index, value){
  for(var i=arr.length; i>index; i--){
    arr[i] = arr[i-1];
  }
  arr[index] = value;
  return arr;
}
