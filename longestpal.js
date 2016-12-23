function longpal(str){
  var current = "";
  var longest = str[0];
  for (var i = 0; i < str.length; i++){
    for(var k = str.length - 1; k > i; k--){
      console.log("i =",i,"k=",k);
      if(str[i] == str[k]){
        var count = 1;
        while(i + count <= k - count){
          if(str[i+count] != str[k-count]){
            break;
          }
          if(i + count >= k-count){
            for(var x = i; x < k + 1; x++){
              current += str[x];
            }
            if(longest.length < current.length){
              longest = current;
              current = "";
            }
          }
          count++;
        }
      }
    }
    console.log(longest, "first for loop");
  }
  return longest;
}

console.log(longpal("My favorite race car exploded"));
console.log(longpal("Myfavoriteracecarexploded"));
// console.log(longpal("my daddy"));
// console.log(longpal("uh..."));
// console.log(longpal("uh.!?"));
// console.log(longpal("daddaddad"));
// console.log(longpal("dad dad dad"));
