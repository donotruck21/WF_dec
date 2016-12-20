function numbersOnly(arr){
  var newarr = [];
  for (var i = 0; i < arr.length; i++)
  {
    if (typeof arr[i] === "number")
    {
      newarr.push(arr[i]);
    }
  }
  console.log(newarr);
  return newarr;
}

function removeNonNumbers(arr){
  for (var i = 0; i < arr.length; i++)
  {
    if (!(typeof arr[i] === "number"))
    {
       arr[i] = undefined;
    }
  }
  console.log(arr);
}

numbersOnly([3, "salomi", 42, "jared", -37]);
removeNonNumbers([3, "salomi", 42, "jared", -37])
