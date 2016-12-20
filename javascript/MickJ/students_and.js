function printObj(arr) {

  for (var i = 0; i < arr.length; i++) {
      console.log(arr[i].first_name, arr[i].last_name)
    }
}

var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

printObj(students);

function studAndTeach(obj) {
  for (var personType in obj) {
    console.log(personType);
    for (var i = 0; i < obj[personType].length; i++) {
      console.log((i + 1) + " - " + obj[personType][i].first_name.toUpperCase(), obj[personType][i].last_name.toUpperCase() + " - " + (obj[personType][i].first_name.length + obj[personType][i].last_name.length));
    }
  }
}

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

 studAndTeach(users);
