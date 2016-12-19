var daysUntilMyBirthday = 60;

for (var daysUntilMyBirthday; daysUntilMyBirthday > 0; daysUntilMyBirthday--){
  if (daysUntilMyBirthday >= 30){
    console.log(daysUntilMyBirthday + " days until my birthday. Such a long time...")
  } else if (daysUntilMyBirthday <= 30 && daysUntilMyBirthday >= 5) {
    console.log(daysUntilMyBirthday + " days until my birthday! I can't wait!")
  } else if (daysUntilMyBirthday < 5 && daysUntilMyBirthday > 1) {
    console.log("ONLY " + daysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAY! ")
  } else if (daysUntilMyBirthday == 1) {
    console.log("ONLY " + daysUntilMyBirthday + " DAY UNTIL MY BIRTHDAY!!!")
  }
}

if (daysUntilMyBirthday == 0){
  console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«")
}
