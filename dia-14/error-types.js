//ReferenceError - aparece se uma variável executada naõ foi declarada
let firstName = 'Isabella'
let fullName = firstName + ' ' + lastName
console.log(fullName)
//ReferenceError: lastName is not defined

//SyntaxError - erro de syntax
//let square = 2 x 2
console.log(square)

//console.log('Hello, world")
//SyntaxError: Unexpected identifier

//TypeError - erro de digitação
let num = 10
console.log(num.toLowerCase())
//Uncaught TypeError: num.toLowerCase is not a function