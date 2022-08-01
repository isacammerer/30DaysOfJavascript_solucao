//Check if type of '10' is equal to 10

console.log('10' == 10)

//Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8') == 10)

//Boolean value is either true or false.

let hungry = true
let sleepy = false

//Write three JavaScript statement which provide truthy value.

let comparison = 4 > 3
let comparisonOne = 5 > 7
let comparsionTwo = 9 > 7

//Write three JavaScript statement which provide falsy value.

let comparisonThree = 4 < 3
let comparisonFour = 5 < 7
let comparisonFive = 9 < 7

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3)               //true
console.log(4 >= 3)              //true
console.log(4 < 3)               //false
console.log(4 <= 3)              //false
console.log(4 == 4)              //true
console.log(4 === 4)             //true
console.log(4 != 4)              //false
console.log(4 !== 4)             //false
console.log(4 != '4')            //false
console.log(4 == '4')            //true
console.log(4 === '4')           //false


//Find the length of python and jargon and make a falsy comparison statement.

console.log('python'.length != 'jargon'.length)

//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12)                //true e true = true
console.log(4 > 3 && 10 > 12)                //true e false = true
console.log(4 > 3 || 10 < 12)                //true e true = true
console.log(4 > 3 || 10 > 12)                //true e false = false
console.log(!(4 > 3))                        //false    
console.log(!(4 < 3))                        //true
console.log(!(false))                        //true
console.log(!(4 > 3 && 10 < 12))             //false
console.log(!(4 > 3 && 10 > 12))             //true
console.log(!(4 === '4'))                    //true
//There is no 'on' in both dragon and python    //true


//Use the Date object to do the following activities

//What is the year today?

const now = new Date()
console.log(now.getFullYear())                  //2022

//What is the month today as a number?

console.log(now.getMonth())                     //6

//What is the date today?

console.log(now.getDate())

//What is the day today as a number?

console.log(now.getDay())                       //7

//What is the hours now?

console.log(now.getHours())

//What is the minutes now?

console.log(now.getMinutes())

//Find out the numbers of seconds elapsed from January 1, 1970 to now.

console.log(now.getTime())
