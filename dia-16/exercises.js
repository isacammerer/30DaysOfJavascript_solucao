const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`

//Change skills array to JSON using JSON.stringify()

const changeSkills = JSON.stringify(skills, undefined, 4)
console.log(changeSkills)
/*[
    "HTML",
    "CSS",
    "JS",
    "React",
    "Node",
    "Python"
]*/

//Stringify the age variable

const ageVariable = JSON.stringify(age, undefined)
console.log(ageVariable)
//250

//Stringify the isMarried variable

const isMarriedVariable = JSON.stringify(isMarried, undefined)
console.log(isMarriedVariable)
//true

//Stringify the student object

const studentObject = JSON.stringify(student, undefined, 4)
console.log(studentObject)
/*{
    "firstName": "Asabeneh",
    "lastName": "Yetayehe",
    "age": 250,
    "isMarried": true,
    "skills": [
        "HTML",
        "CSS",
        "JS",
        "React",
        "Node",
        "Python"
    ]
}*/

//Stringify the students object with only firstName, lastName and skills properties

const students = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.log(students)
/*{
    "firstName": "Asabeneh",
    "lastName": "Yetayehe",
    "skills": [
        "HTML",
        "CSS",
        "JS",
        "React",
        "Node",
        "Python"
    ]
}*/