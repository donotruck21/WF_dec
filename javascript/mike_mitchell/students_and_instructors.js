var students = [
  {first_name: 'Michael', last_name: 'Jordan'},
  {first_name: 'John', last_name: 'Rosales'},
  {first_name: 'Mark', last_name: 'Guillen'},
  {first_name: 'KB', last_name: 'Tonel'}
]

function readStudents(arr){
  for(var i = 0; i < students.length; i++){
    console.log(students[i].first_name + " " + students[i].last_name + "\n");
    }
}

readStudents(students);

var users = {
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

 function readUsers(arr){
   for (key in arr){
     console.log(key)
     for (var i = 0; i < users[key].length; i++){
       console.log((i + 1) + " - "  + arr[key][i].first_name + " " + arr[key][i].last_name + " - " + (arr[key][i].first_name.length + arr[key][i].last_name.length));
     }
   }
 }

readUsers(users);
