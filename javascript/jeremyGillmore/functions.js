function printRange(start, end, skip){
  if (end === undefined)
  {
    end = start;
    start = 0;
  }
  if (skip === undefined)
  {
    skip = 1;
  }
  while (start < end)
  {
    console.log(start);
    start += skip;
  }
}

printRange(2, 10, 2);
printRange(-20, 20);
printRange(10);
