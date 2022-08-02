//Declare an empty array;

const arr = []

//Declare an array with more than 5 number of elements

const arrOne = [1, 2, 3, 4, 5, 6]

//Find the length of your array

console.log(arrOne.length)                              //6

//Get the first item, the middle item and the last item of the array

let firstItem = arrOne[0]                               //1
console.log(firstItem)

let middleItem = arrOne[2]                              //3
console.log(middleItem)

let lastItem = arrOne.length - 1                        //5
console.log(lastItem) 

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [1, "two", 3, false, 5, "six"]
console.log(mixedDataTypes.length)                      //6

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'IBM', 'oracle', 'amazon']

//Print the array using console.log()

console.log(itCompanies)

//Print the number of companies in the array

console.log(itCompanies.length)                         //7

//Print the first company, middle and last company

let firstCompany = itCompanies[0]                               //facebook
console.log(firstCompany)

let middleCompany = itCompanies[2]                              //microsoft
console.log(middleCompany)

let lastCompany = itCompanies[6]                                 //amazon
console.log(lastCompany) 

//Print out each company

console.log(itCompanies)

//Change each company name to uppercase one by one and print them out

console.log('facebook'.toUpperCase())
console.log('google'.toUpperCase())
console.log('microsoft'.toUpperCase())
console.log('apple'.toUpperCase())
console.log('IBM'.toUpperCase())
console.log('oracle'.toUpperCase())
console.log('amazon'.toUpperCase())

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(itCompanies.toString())

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let index = itCompanies.indexOf('hello')

if (index === -1) {
    console.log('company is not found')
} else {
    console.log(`company exists`)
}

//Sort the array using sort() method

itCompanies.sort()
console.log(itCompanies)

//Reverse the array using reverse() method

itCompanies.reverse()
console.log(itCompanies)

//Slice out the first 3 companies from the array

console.log(itCompanies.slice(0,3))

//Slice out the last 3 companies from the array

console.log(itCompanies.slice(3,6))

//Slice out the middle IT company or companies from the array

console.log(itCompanies.slice(3,4))

//Remove the first IT company from the array

itCompanies.shift()
console.log(itCompanies)

//Remove the middle IT company or companies from the array

itCompanies.splice(1,1)
console.log(itCompanies)

//Remove the last IT company from the array

itCompanies.pop()
console.log(itCompanies)

//Remove all IT companies

itCompanies.length = 0
console.log(itCompanies)