function printRange(start, end, skip){
  if(!skip) { skip = 1 }
  if(!end) {
    var temp = start;
    start = 0;
    end = temp;
  }
  for (start; start < end; start+=skip) {
    console.log(start);
  }
}

printRange(4);
