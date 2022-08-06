//forEach - iteração de elementos de uma array, somente usado para arrays. Index e array opcional

arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
});

//arrow function
arr.forEach((element, index, arr) => {
    console.log(index, element, arr)
})

//arrow function e explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))


let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)                                //1 2 3 4 5

numbers.forEach(num => sum += num)
console.log(sum)                                //15


//map - itera elementos de uma array e modifica os elementos da array
const modifiedArray = arr.map(function (element, index, arr) {
    return element
})
const number = [1, 2, 3, 4, 5]
const numberSquare = numbers.map((num) => num * num)
console.log(numberSquare)                       //[ 1, 4, 9, 16, 25 ]

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)
//['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']

//arrow function
const countriesToUpperCaseTwo = countries.map((country) => {
    return country.toUpperCaseTwo();
})


//filter - filtra itens que se encaixam nas condições e retorna uma nova array
const countriesContainingLand = countries.filter((country) => country.includes('land'))
console.log(countriesContainingLand)            
//['finland', 'ireland' ]

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)
//[ 'Albania', 'Bolivia', 'Ethiopia' ]

const countriesHaveFiveLetters = countries.filter((country) => country.length === 5)
console.log(countriesHaveFiveLetters)
//[ 'Japan', 'Kenya' ]


//reduce - como um for loop passa por todos so números da array e os soma até a array finalizar, utiliza total, amount, index, array
const numberTwo = [1, 2, 3, 4, 5]
const sumTwo = numberTwo.reduce((total, amount) => total + amount, 0)
console.log(sumTwo)
//15


//every - confere se todos os elementos são similares em uma data type, retorna boolean
const fruits = ['banana', 'cherry', 'watermelon', 'lemon']
const areAllStr = fruits.every((fruits) => typeof fruits === 'string')
console.log(areAllStr)
//true


//find - retorna o primeiro elemento que confere com a condição
const ages = [24, 22, 25, 30, 32, 35]
const age = ages.find((age) => age < 24)
console.log(age)
//22


//findIndex - retorna a posição do primeiro elemento que confere com a condição
const ageOne = ages.findIndex((ageOne) => ageOne < 24)
console.log(ageOne)
//1


//some - confere se alguns elementos são similares em um data type, retorna boolean
const areAllStrs = fruits.some((fruits) => typeof fruits === 'number')
console.log(areAllStrs)
//false


//sort - organiza os elementos das arrays de forma ascendente ou descendente. De forma padrão este método organiza os values como strings, funciona melhor para strings e modifica a array original
const products = ['milk', 'coffee', 'honey', 'sugar', 'apple', 'carrot']
console.log(products.sort())
//[ 'apple', 'carrot', 'coffee', 'honey', 'milk', 'sugar' ]


//sorting numeric values 
const numberThree = [9.81, 3.14, 100, 37]
console.log(numberThree.sort())
//[ 100, 3.14, 37, 9.81 ] -> resultado errado
numberThree.sort(function(a, b) {
    return a - b
})
console.log(numberThree)
//[ 3.14, 9.81, 37, 100 ]
numberThree.sort(function(a, b) {
    return b - a
})
console.log(numberThree)
//[ 100, 37, 9.81, 3.14 ]


//sorting object arrays - quando é colocado objects em uma array, é usado o object key para comparar
objArr.sort(function(a, b) {
    if (a.key < b.key) return -1
    if (a.key > b.key) return 1
    return 0
})

const users = [
    { name: 'Isabella', age: 150 },
    { name: 'Isa', age: 50 },
    { name: 'Bella', age: 100 },
]
users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
console.log(users) //ascendente
//[
    //{ name: 'Isa', age: 50 },
    //{ name: 'Bella', age: 100 },
    //{ name: 'Isabella', age: 150 }
//]




