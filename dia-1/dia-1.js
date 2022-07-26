//Comments

//This is the first comment
//This is the second comment
//I'm a single line comment

/*This is a multiline comment
Multiline comments can take multiple lines
JavaScript is teh language of the web*/ 

//Syntax - estrutura das informações em uma linguagem de programação
//Debugging - identificando e removendo erros de um programa

console.log('Hello, World!')
console.log("Hello, World!")
console.log(`Hello, World!`)

//Arithmetics
console.log(2 + 3) // Adição
console.log(3 - 2) // Subtração
console.log(2 * 3) // Multiplicação
console.log(3 / 2) // Divisão
console.log(3 % 2) // Restante
console.log(3 ** 2) // Expoente

//Adição de javascript a uma página web

//Inline Script - adição da ação na mesma linha do arquivo html
//Internal Script - adição da tag script com a ação do javascript
//External Script - criação de um arquivo separado de javascript
//Multiple External scripts - adição de múltiplos arquivos diferentes de javascript


//Data types

//Numbers - Integers (negativo, positivo e zero) Ex: -3, -1, 0, 1, 3
        //Float-point numbers (números decimais) Ex: -3.5, 0.0, 4,2
//Strings - Um ou mais caracteres entre single quotes, souble quotes e backticks Ex: 'Hello', "Hello" e `Hello`
//Booleans - valor true ou false
//Undefined - variável sem valor designado
//Null - valor vazio


//Checking Data types

console.log(typeof 'hello') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined


//Variables

//Armazenam dados em memória localizada da variável, se a chamarmos vem a informação armazenada na variável
//Declaração de variáveis - var (não recomendado o uso), let, const
//let - dado que pode alterar em outro momento
//const - dado da variável nunca muda
//Ex: firstName, first_name, num1, year_2022

// Declaring different variables of different data types
let firstName = 'Isabella' // first name of a person
let lastName = 'A. Cammerer' // last name of a person
let country = 'Brasil' // country
let age = 26 // age in years

console.log(firstName, lastName, country, age)

// Declaring variables with number values
const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in °C
const PI = 3.14 // geometrical constant
console.log(gravity, boilingPoint, PI)

//Exercises

//Write a single line comment which says, comments can make code readable

//Comments can make a code readable

//Write another single comment which says, Welcome to 30DaysOfJavaScript

//Welcome to 30DaysOfJavascript

//Write a multiline comment which says, comments can make code readable, easy to reuse and informative

/*comments can make code readable, 
easy to reuse 
and informative*/

//Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

//variable.js

//Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

//datatypes.js

//Declare four variables without assigning values

let one;
let two;
let three;
let four;

//Declare four variables with assigned values

let five = 5;
let six = "six";
let seven = 7;
let eight = "eight";

//Declare variables to store your first name, last name, marital status, country and age in multiple lines

let first_name = "Isabella";
let last_name = "A. Cammerer";
let myAge = 26;
let myCountry = "Brasil";

//Declare variables to store your first name, last name, marital status, country and age in a single line

//let first_name = "Isabella", last_name = "A. Cammerer", myAge = 26, myCountry = "Brasil";

//Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

myAge = 26;
let yourAge = "?";

console.log("I am " + myAge + " years old");
console.log("You are " + yourAge + " years old");