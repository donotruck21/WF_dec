function studentPrinter(arr){
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].first_name + ' ' + arr[i].last_name);
  }
}

function studentInstructorPrinter(obj){
  for (var key in obj) {
    console.log(key);
    for (var i = 0; i < obj[key].length; i++) {
      console.log((i+1) + ' - ' + obj[key][i]["first_name"] + ' ' + obj[key][i]["last_name"] + ' - ' + (obj[key][i]["first_name"].length + obj[key][i]["last_name"].length));
    }
  }
}

studentPrinter([
 {first_name:  'Michael', last_name : 'Jordan'},
 {first_name : 'John', last_name : 'Rosales'},
 {first_name : 'Mark', last_name : 'Guillen'},
 {first_name : 'KB', last_name : 'Tonel'}
])

studentInstructorPrinter(
{
 'Students': [
   {first_name:  'Michael', last_name : 'Jordan'},
   {first_name : 'John', last_name : 'Rosales'},
   {first_name : 'Mark', last_name : 'Guillen'},
   {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
   {first_name : 'Michael', last_name : 'Choi'},
   {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }
);
