//class - é como se fosse um object constructor, a class define atributos e o comportamento do object, criando um object de uma class se chama class instantiation, ajuda a criar multiplus objects, reduzindo a quantidade e repetição de código

//class instantiation
class PersonOne {

}
const personOne = new PersonOne()
console.log(personOne)
//PersonOne {}

//class constructor - habilita que seja criado uma blueprint para o objeto, dentro dos parenteses passamos as propriedades do object como parametro, usando o this para conectar o parenteses constructor com a classe
class Person {
    constructor(firstName, lastName) {
        console.log(this)   //Person {}
        this.firstName = firstName
        this.lastName = lastName
    }
}
const person = new Person()
console.log(person)
//Person { firstName: undefined, lastName: undefined }

class PersonTwo {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}
const person1 = new PersonTwo('Isabella', 'A. Cammerer')
const person2 = new PersonTwo('Lidiya', 'Tekle')
const person3 = new PersonTwo('Abraham', 'Yetayeh')
console.log(person1)
console.log(person2)
console.log(person3)
//PersonTwo { firstName: 'Isabella', lastName: 'A. Cammerer' }
//PersonTwo { firstName: 'Lidiya', lastName: 'Tekle' }
//PersonTwo { firstName: 'Abraham', lastName: 'Yetayeh' }


//default values with constructor
class PersonThree {
    constructor(
      firstName = 'Asabeneh',
      lastName = 'Yetayeh',
      age = 250,
      country = 'Finland',
      city = 'Helsinki'
    ) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
} 
const person4 = new PersonThree() // it will take the default values
const person5 = new PersonThree('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
console.log(person4)
console.log(person5)
//PersonThree {
    //firstName: 'Asabeneh',
    //lastName: 'Yetayeh',
    //age: 250,
    //country: 'Finland',
    //city: 'Helsinki'
//}
//PersonThree {
    //firstName: 'Lidiya',
    //lastName: 'Tekle',
    //age: 28,
    //country: 'Finland',
    //city: 'Espoo'
//}

//class methods
class PersonFour {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
}
const person6 = new PersonFour('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person7 = new PersonFour('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
console.log(person6.getFullName())
console.log(person7.getFullName())
//Asabeneh Yetayeh
//Lidiya Tekle


//getter - habilita acessar valores do object
class PersonFive {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
}
const person8 = new PersonFive('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person9 = new PersonFive('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
console.log(person8.getScore) // não precisa de parenteses para chamar o método get
console.log(person9.getScore)
console.log(person8.getSkills)
console.log(person9.getSkills)
//0
//0
//[]
//[]


//setter - habilita modificar os valores de certas propriedades
class PersonSix {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
      let formattedSkills = skills ? `He knows ${skills}` : ''
  
      let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
}
const person10 = new PersonSix('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person11 = new PersonSix('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
const person12 = new PersonSix('John', 'Doe', 50, 'Mars', 'Mars city')
  
person10.setScore = 1
person10.setSkill = 'HTML'
person10.setSkill = 'CSS'
person10.setSkill = 'JavaScript'
  
person11.setScore = 1
person11.setSkill = 'Planning'
person11.setSkill = 'Managing'
person11.setSkill = 'Organizing'
  
console.log(person10.getScore)
console.log(person11.getScore)
  
console.log(person10.getSkills)
console.log(person11.getSkills)
console.log(person12.getSkills)
  
console.log(person10.getPersonInfo())
console.log(person11.getPersonInfo())
console.log(person12.getPersonInfo())
//1
//1
//[ 'HTML', 'CSS', 'JavaScript' ]
//[ 'Planning', 'Managing', 'Organizing' ]
//[]
//Asabeneh Yetayeh is 250. He lives Helsinki, Finland. He knows HTML, CSS and JavaScript
//Lidiya Tekle is 28. He lives Espoo, Finland. He knows Planning, Managing and Organizing
//John Doe is 50. He lives Mars city, Mars. 


//static method - function para criar ou clonar objects, como exemplo o Date.now() o método now() é chamado diretamente da class
class PersonSeven {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
  
      let formattedSkills = skills ? `He knows ${skills}` : ''
  
      let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
    static favoriteSkill() {
      const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
      const index = Math.floor(Math.random() * skills.length)
      return skills[index]
    }
    static showDateTime() {
      let now = new Date()
      let year = now.getFullYear()
      let month = now.getMonth() + 1
      let date = now.getDate()
      let hours = now.getHours()
      let minutes = now.getMinutes()
      if (hours < 10) {
        hours = '0' + hours
      }
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      let dateMonthYear = date + '.' + month + '.' + year
      let time = hours + ':' + minutes
      let fullTime = dateMonthYear + ' ' + time
      return fullTime
    }
}
console.log(PersonSeven.favoriteSkill())
console.log(PersonSeven.showDateTime())
//JS
//15.8.2022 10:36
