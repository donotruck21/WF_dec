function birthdayCountdown(daysLeft) {
  while (daysLeft > 30) {
    console.log(daysLeft, "days until my brithday - what a bummer...");
    daysLeft--;
  }
  while (daysLeft > 5) {
    console.log(daysLeft, "days until my birthday - get HYPE!");
    daysLeft--
  }
  while (daysLeft > 1) {
    console.log("ONLY " + daysLeft + " DAYS UNTIL MY BDAYYYYYY");
    daysLeft--;
  }
  console.log("ONLY 1 DAY UNTIL MY BDAYYYYYY")
  console.log("TODAY IS MY BIRTDAY WHOOOOOOT WHOOOT WHOOOOT");
  console.log("Airhorn Airhorn Airhorn");
  console.log("Bring me my gifts!");
}

birthdayCountdown(45);
