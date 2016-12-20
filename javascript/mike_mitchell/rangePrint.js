function printRange(min, max, skip) {
  if (skip == undefined){
    skip = 1;
  }

  if (max == undefined){
    if (min > 0){
      max = min;
      min = 0;
    } else {
      max = 0;
    }
  }
  while(min < max){
    console.log(min);
    min += skip;
  }
}

printRange(-50);
