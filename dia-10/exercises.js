//create an empty set

const drinks = new Set()
console.log(drinks)
//Set(0) {}

//Create a set containing 0 to 10 using loop

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
setOfNumbers = new Set()
for (number in numbers) {
    setOfNumbers.add(numbers)
}
console.log(setOfNumbers)
//Set(1) {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}

//Remove an element from a set

const foods = new Set()
foods.add('chocolate')
foods.add('orange juice')
foods.add('rice')
foods.add('meat')
console.log(foods.delete('chocolate'))
console.log(foods.size)
//3

//Clear a set

foods.clear()
console.log(foods)
//Set(0) {}

//Create a set of 5 string elements from array

let stringOne = ['hello,']
let stringTwo = [`it's me,`]
let stringThree = ['how ']
let stringFour = ['are you?']
let stringFive = [...stringOne, ...stringTwo, ...stringThree, ...stringFour]

let string_One = new Set(stringOne)
let string_Two = new Set(stringTwo)
let string_Three = new Set(stringThree)
let string_Four = new Set(stringFour)
let string_Five = new Set(stringFive)
console.log(string_Five)
//Set(4) { 'hello,', "it's me,", 'how ', 'are you?' }

//Create a map of countries and number of characters of a country

const countries = new Map()
countries.set('finland', 7)
countries.set('sweden', 6)
countries.set('norway', 6)
console.log(countries)
//Map(3) { 'finland' => 7, 'sweden' => 6, 'norway' => 6 }

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const c = [...a, ...b]

//Find a union b

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C)
//Set(6) { 4, 5, 8, 9, 3, 7 }

//Find a intersection b

let d = a.filter((number) => B.has(number))
let D = new Set(d)
console.log(D)
//Set(2) { 4, 5 }

//Find a with b

let e = a.filter((number) => !B.has(number))
let E = new Set(e)
console.log(E)
//Set(2) { 8, 9 }

