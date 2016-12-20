function dont_mind(MINUTE, HOUR, PERIOD){
  if(MINUTE>30){
    HOUR = HOUR+1
    console.log(" It's almost "  +  HOUR +" " +PERIOD)
  }
  else {
    console.log("It's almost")
  }
}

dont_mind(50, 8, "AM")
