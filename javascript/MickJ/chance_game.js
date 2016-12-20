function chance_game(quarters, leave_with) {
  if (leave_with != undefined && typeof leave_with == "number") {
    while (quarters > 0) {
      quarters--;
      if ((Math.trunc(Math.random() * 100)) == 1) {
        quarters += (Math.trunc(Math.random() * 51) + 50);
      }
      if (quarters >= leave_with) {
        return quarters;
      }
    }
    return 0;
  }
  else {
    while (quarters > 0) {
      quarters--;
      if ((Math.trunc(Math.random() * 100)) == 1) {
        quarters += (Math.trunc(Math.random() * 51) + 50);
        return quarters;
      }
    }
    return 0;
  }
}
