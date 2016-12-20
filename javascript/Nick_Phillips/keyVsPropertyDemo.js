var obj = {
  name: 'nick',
  key: 'I am the key PROPERTY'
}

for(var key in obj){
  console.log(obj[key]);
  console.log(obj.key);
  break;
}
