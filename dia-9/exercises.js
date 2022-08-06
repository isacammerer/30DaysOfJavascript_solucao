const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Explain the difference between forEach, map, filter, and reduce.

//forEach - iteração de elementos de uma array, sendo somente usado para arrays, o index e o array são opcionais
//map - itera pelos elementos das arrays e as modifica, se não quiser que seja modificado necessário criar uma cópia identica da array.
//filter - filtra itens que se encaixam nas condições impostas e retorna uma nova array
//reduce - funciona como um for loop, passa por todos os números da array e os soma, ou qualquer operação que queira fazer, até a array finalizar

//Define a callback function before you use it in forEach, map, filter or reduce.

//callback function - é uma function que pode ser passada como parametro outra function 

//Use forEach to console.log each country in the countries array.

countries.forEach((country) => {
    console.log(country)
})
//Finland Sweden Denmark Norway IceLand

//Use forEach to console.log each name in the names array.

names.forEach((name) => {
    console.log(name)
})
//Asabeneh Mathias Elias Brook

//Use forEach to console.log each number in the numbers array.

numbers.forEach((number) => {
    console.log(number)
})
//1 2 3 4 5 6 7 8 9 10

//Use map to create a new array by changing each country to uppercase in the countries array.

const countriesToUpperCase = countries.map((country) => {
    return country.toUpperCase()
})
console.log(countriesToUpperCase)
//[ 'FINLAND', 'SWEDEN', 'DENMARK', 'NORWAY', 'ICELAND' ]

//Use map to create an array of countries length from countries array.

const countriesArray = countries.map((country) => {
    return country.length
})
console.log(countriesArray)
//[ 7, 6, 7, 6, 7 ]

//Use map to create a new array by changing each number to square in the numbers array

const newArray = numbers.map((number) => {
    return number * number
})
console.log(newArray)
//[ 1,  4,  9, 16,  25, 36, 49, 64, 81, 100 ]

//Use map to change to each name to uppercase in the names array

const namesToUpperCase = names.map((name) => {
    return name.toUpperCase()
})
console.log(namesToUpperCase)
//[ 'ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK' ]

//Use map to map the products array to its corresponding prices.

const productsPrices = products.map(function(element) {
    return `${element.product} ${element.price}`
})
console.log(productsPrices)
//[ 'banana 3', 'mango 6', 'potato  ', 'avocado 8', 'coffee 10', 'tea ' ]

//Use filter to filter out countries containing land.

const countriesWithLand = countries.filter((country) => country.includes('land'))
console.log(countriesWithLand)
//[ 'Finland' ]

//Use filter to filter out countries having six character.

const countriesWithSixLetters = countries.filter((country) => country.length === 6)
console.log(countriesWithSixLetters)
//[ 'Sweden', 'Norway' ]

//Use filter to filter out countries containing six letters and more in the country array.

const countriesWithMoreLetters = countries.filter((country) => country.length >= 7)
console.log(countriesWithMoreLetters)
//[ 'Finland', 'Denmark', 'IceLand' ]

//Use filter to filter out country start with 'E';

const countriesStartWithE = countries.filter((country) => country.startsWith('E'))
console.log(countriesStartWithE)
//[]

//Use filter to filter out only prices with values.

const pricesWithValue = products.filter(function(element) {
    return `${element.price}`
})
console.log(pricesWithValue)
//[
    //{ product: 'banana', price: 3 },
    //{ product: 'mango', price: 6 },
    //{ product: 'potato', price: ' ' },
    //{ product: 'avocado', price: 8 },
    //{ product: 'coffee', price: 10 }
  //]

//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

let arr = ['hello', 'hi', 'yes', 5, 10]
function getStringLists (arr) {
    return arr.filter(item => typeof item === 'string')
}
console.log(getStringLists(arr))
//[ 'hello', 'hi', 'yes' ]

//Use reduce to sum all the numbers in the numbers array.

const sum = numbers.reduce((total, amount) => total + amount, 0)
console.log(sum)
//55

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const stringCountries = countries.reduce((total, amount) => `${total} ${amount}`)
console.log(stringCountries)
//Finland Sweden Denmark Norway IceLand

//Explain the difference between some and every

//some - confere se alguns elementos são similares em data types, retorna boolean
//every - confere se todos os elementos são similares em data types, retorna boolean

//Use some to check if some names' length greater than seven in names array

const namesLength = names.some((names) => names.length > 7)
console.log(namesLength)
//true

//Use every to check if all the countries contain the word land

const allContainLand = countries.every((country) => country.includes('land'))
console.log(allContainLand)
//false

//Explain the difference between find and findIndex.

//find - retorna o primeiro elemento que se encaixa com a condição
//findIndex - retorna a posição do primeiro elemento que se encaixa com a condição

//Use find to find the first country containing only six letters in the countries array

const countryWithSixLetters = countries.find((country) => country.length === 6)
console.log(countryWithSixLetters)
//Sweden

//Use findIndex to find the position of the first country containing only six letters in the countries array

const countriesSixLetters = countries.findIndex((country) => country.length === 6)
console.log(countriesSixLetters)
//1

//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

const position = countries.findIndex((country) => country == 'Norway')
console.log(position)
//3

//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

const positionTwo = countries.findIndex((country) => country == 'Russia')
console.log(positionTwo)
//-1