function fancyArr(symbol, rev){
  arr = ["james", "jill", "Jane", "Jake"];
  if (rev === undefined){
    rev = false;
  }
  if (rev == true)
  {
    for (var i = arr.length - 1; i >= 0; i--)
    {
      console.log(i, symbol, arr[i]);
    }
  }
  else {
    for (var i = 0; i < arr.length; i++)
    {
      console.log(i, symbol, arr[i]);
    }
  }
}


fancyArr(">>")
fancyArr("->->", false)
fancyArr("-->-->", true)
