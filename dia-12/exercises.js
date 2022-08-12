//Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const findNumber = text.match(/\d+/g)
console.log(findNumber)
const sumOfNumbers = (+findNumber[0] + +findNumber[2] * 12 + +findNumber[1])
console.log(sumOfNumbers)

//The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
const sortedPoints = points.sort(function(a, b) {
    return a - b
})
console.log(sortedPoints)

//sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
//distance = 12

//Write a pattern which identify if a string is a valid JavaScript variable

function is_valid_variable(variable) {
    const variableformat = /^[a-z][^0-9]/g
    if(variableformat.test(variable)) {
        return true
    } else {
        return false
    }
}

console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))

//is_valid_variable('first_name') # True
//is_valid_variable('first-name') # False
//is_valid_variable('1first_name') # False
//is_valid_variable('firstname') # True