var a = 6;
var b = 4;

b^=a;
a^=b;
b^=a;

console.log("a is " + a + " and b is " + b);
