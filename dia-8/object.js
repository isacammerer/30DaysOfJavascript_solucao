//object - algo que tem uma chave (designação) e seu valor específico, pode ser string, number, boolean, object, null, undefined ou function
const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle)                          //{ length: 20, width: 20 }

//acessando valores de um objeto
const person = {
    firstName: 'Isabella',
    lastName: ' A.Cammerer',
    age: 26,
    country: 'Brazil',
    getFullName: function() {
        return `${this.firstName}${this.lastName}`
    }
}
//acessado values com .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location)                    //undefined

//acessado usando [] e a key (designação)
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['location'])                 //undefined


//creating object methods - a person object tem propriedade getFullName, é uma função dentro do person object e é chamado de object method. A palavra this se refere ao próprio object

//getFullName: function() {
    //return `${this.firstName}${this.lastName}`
//}


//setting new key for an object - o objeto é uma estrutura de dados modificável
person.nationality = 'Brazillian'
person.title = 'Student and a Software developer'
person.getPersonInfo = function() {
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.`
    return statement
}
console.log(person)
console.log(person.getPersonInfo())
