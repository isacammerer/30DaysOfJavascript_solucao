//assigment operators - sinal de igual

let firstName = 'Isabella'
let country = 'Brasil'

//+= Ex: x += y, x+y resultado guardado em x
//-= Ex: x -= y, x-y resultado guardado em x
//*= Ex: x *= y, x*y resultado guardado em x
// /= Ex: x /= y, x/y resultado guardado em x
//%= Ex: x %= y, x % y, resultado guardado em x
//**= Ex: x **= y, x ** y resultado guardado em x

//arithmetic operators - opradores matemáticos

let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let sub = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo


//comparison operators - comparação de valores, checando se o valor é maior ou menor ou igual a outro valor

//==, igual somente em valor, equal
//===, igual em valor e tipo de dado, equal
//!=, não igual, not equal
//>, maior que, greater than
//<, menor que, less than
//>=, maior que ou igual a, greater than or equal to
//<=, menor que ou igual a, less than or equal to 

console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false, because 3 is greater than 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true


//logical operators

//  && - true somente se os dois valores comparados são verdadeiros
const check = 4 > 3 && 10 > 5       //true && true -> true
const checkOne = 4 > 3 && 10 < 5    //true && false -> false
const checkTwo = 4 < 3 && 10 < 5    //false && false -> false

//  || - true se qualquer um dos parametros é true
const checkThree = 4 > 3 || 10 > 5  //true || true -> true
const checkFour = 4 > 3 || 10 < 5   //true || false -> true
const checkFive = 4 < 3 || 10 < 5   //false || false -> false

// != negação de true para false e false para true
let checkSix = 4 > 3                //true
let checkSeven = !(4 > 3)           //false


//increment operator - aumentar o valor designado a variável

//post-increment - mais utilizado
let count = 0
console.log(count++)                //0
console.log(count)                  //1


//decrement operator - diminuir o valor designado a variável

//post-increment - mais utilizado
console.log(count--)                //0
console.log(count)                  //-1



//ternary operators - possibilita colocar uma condição
let isRaining = true                                
isRaining                                           //condição, se está chuvendo
    ? console.log('you need a rain coat')           //se for verdadeiro
    : console.log('no need for a rain coat')        //se for falso
isRaining = false

isRaining
    ? console.log('you need a rain coat')
    : console.log('no need for a rain coat')