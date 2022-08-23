//variables
let firstName = 'Isabella'
let lastName = 'A. Cammerer'
let country = 'Brazil'

const PI = Math.PI
const gravity = 9.81


//arrays - nomes das arrays em plural
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const languages = ['Amharic', 'Arabic', 'English', 'French', 'Spanish']
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python']
const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']


//functions

//função retornando o nome completo da pessoa
const printFullName = (firstName, lastName) => firstName + ' ' + lastName

//função que retorna ao quadrado de um número
const square = (n) => n * n

//função que gera cores aleatórias
const hexaColor = () => {
    const str = '0123456789abcdef'
    let hexa = '#'
    let index
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length)
        hexa += str[index]
    }
    return hexa
}

//função que mostra data e hora
const showDateTime = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    const dateMonthYear = date + '.' + month + '.' + year
    const time = hours + ':' + minutes
    const fullTime = dateMonthYear + ' ' + time
    return fullTime
}

//new Dat().toLocaleString() também mostra a hora atual


//loops
for (let i = 0; i < n; i++){
    console.log()
}

//declarando uma variável de array
const namesTwo = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

//iterando uma array usando o for loop
let len = namesTwo.length;
for(let i = 0; i < len; i++){
    console.log(namesTwo[i].toUpperCase())
}


//iterando uma array usando o for of
for( const name of namesTwo) {
    console.log(name.toUpperCase())
}

//iterando uma array usando forEach 
namesTwo.forEach((name) => name.toUpperCase())


const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
  isMarried: true
}
for(const key in person) {
    console.log(key)
}


//objects - declara objects com const

//declarando object
const personTwo = {
    firstName: 'Isabella',
    lastName: 'A. Cammerer',
    age: 26,
    country: 'Brazil',
    skills: ['HTML','CSS','JavaScript','Node','MongoDB'],
}

//iterando pelas keys do object
for(const key in personTwo) {
    console.log(key, personTwo[key])
}


//conditional

//if else
let num = 3
if (num > 0) {
 console.log(`${num} is a positive number`)
} else {
 console.log(`${num} is a negative number`)
}
//3 is a positive number

//if else if else if else
let a = 0
if(a > 0) {
    console.log(`${a} is a positive number`)
} else if (a < 0) {
    console.log(`${a} is a negative number`)
} else if (a == 0) {
    console.log(`${a} is zero`)
} else {
    console.log(`${a} is not a number`)
}

//switch
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
    case 'monday':
        console.log('Today is Monday')
        break
    case 'tuesday':
        console.log('Today is Tuesday')
        break
    case 'wednesday':
        console.log('Today is Wednesday')
        break
    case 'thursday':
        console.log('Today is Thursday')
        break
    case 'friday':
        console.log('Today is Friday')
        break
    case 'saturday':
        console.log('Today is Saturday')
        break
    case 'sunday':
        console.log('Today is Sunday')
        break
    default:
        console.log('It is not a week day.')
}

//ternary
let isRaining = true
isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')



//Class - declaração começa com letra maiuscula
class Person {
    constructor(firstName, lastName) {
      console.log(this) // verifica o outpit aqui
      this.firstName = firstName
      this.lastName = lastName
    }
}



