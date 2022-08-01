//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

//Enter your age: 26
//You are old enough to drive.

//Enter your age:17
//You are left with 1 year to drive.

let userAge = prompt('what is your age?')
let userAgeUnd = 18 - userAge
if (userAge > 18) {
    console.log('you are old enough to drive')
} else {
    console.log(`you are left with ${userAgeUnd} year to drive`)
}

//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

//Enter your age: 30
//You are 5 years older than me.

let myAge = prompt('enter your age')
let yourAge = prompt('enter your age')
let difference = myAge - yourAge
let differenceOne = yourAge - myAge
if (myAge > yourAge) {
    console.log(`i am ${difference} years older than you`)
} else {
    console.log(`i am ${differenceOne} years younger than you`)
}

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

//using if else

let a = 4
let b = 3

if (a > b) {
    console.log('a is greater than b')
} else {
    console.log('a is less than b')
}

//ternary operator.

let aGreater = true
aGreater
    ? console.log('a is greater than b')
    : console.log('a is less than b')

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

//Enter a number: 2
//2 is an even number

let number = prompt('enter a number')
if (number % 2 == 0) {
    console.log('the number is even')
} else {
    console.log('the number is odd')
}

//Enter a number: 9



//Exercises: Level 2
//Write a code which can give grades to students according to theirs scores:
//80-100, A
//70-89, B
//60-69, C
//50-59, D
//0-49, F

let grades = prompt('student grade')

if (grades >= 80) {
    console.log('A')
} else if (grades >= 70) {
    console.log('B')
} else if (grades >= 60) {
    console.log('C')
} else if (grades >= 50) {
    console.log('D')
} else {
    console.log('F')
}


//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

//September, October or November, the season is Autumn.
//December, January or February, the season is Winter.
//March, April or May, the season is Spring
//June, July or August, the season is Summer

let season = prompt('what month are we in')

switch(season) {
    case 'september':
        console.log('the season is autumn')
        break
    case 'october':
        console.log('the season is autumn')
        break
    case 'november':
        console.log('the season is autumn')
        break
    case 'december':
        console.log('the season is winter')
        break
    case 'january':
        console.log('the season is winter')
        break
    case 'february':
        console.log('the season is winter')
        break
    case 'march':
        console.log('the season is spring')
        break
    case 'april':
        console.log('the season is spring')
        break
    case 'may':
        console.log('the season is spring')
        break
    case 'june':
        console.log('the season is summer')
        break
    case 'july':
        console.log('the season is summer')
        break
    case 'august':
        console.log('the season is summer')
        break
    default:
        console.log('invalid month')
}

//Check if a day is weekend day or a working day. Your script will take day as an input.
    //What is the day  today? Saturday
    //Saturday is a weekend.

    //What is the day today? saturDaY
    //Saturday is a weekend.

    //What is the day today? Friday
    //Friday is a working day.

    //What is the day today? FrIDAy
    //Friday is a working day.

let dayOfTheWeek = prompt('what day of the week is today')
switch (dayOfTheWeek) {
    case 'monday':
        console.log('monday is a working day')
        break
    case 'tuesday':
        console.log('tuesday is a working day')
        break
    case 'wednesday':
        console.log('wednesday is a working day')
        break
    case 'thursday':
        console.log('thursday is a working day')
        break
    case 'friday':
        console.log('friday is a working day')
        break
    case 'saturday':
        console.log('saturday is a weekend day')
        break
    case 'sunday':
        console.log('sunday is a weekend day')
        break
}