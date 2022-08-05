//diferentes métodos para manipular um objeto

//object.assign - para copiar um object sem moficar o objeto original
const person = {
    firstName: 'isabella',
    age: 26,
    country: 'Brazil',
    title: 'Student and Software developer',
    getPersonInfo: function() {
        return `I am ${this.firstName} and I live in ${this.country}`
    }
}
const copyPerson = Object.assign({}, person)
console.log(copyPerson)

//object.keys - para pegar as keys (designação) ou propriedades de um object como uma array
const keys = Object.keys(copyPerson)
console.log(keys)                       //[ 'firstName', 'age', 'country', 'title', 'getPersonInfo' ]

//object.values - para pegar os values de um object como uma array
const values = Object.values(copyPerson)
console.log(values)                     //['isabella', 26, 'Brazil', 'Student and Software developer', [Function: getPersonInfo]]

//object.entries - para pegar as keys (designação) e values em uma array
const entries = Object.entries(copyPerson)
console.log(entries)

//hasOwnProperty - para checar se uma key (designação) específica ou propriedade existe em uma objeto
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))