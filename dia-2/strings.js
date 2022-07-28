//Strings

//textos que usam '', "" ou ``
//para declarar uma string é necessário um nome para a variável, = e valor sendo uma frase ou palavra

let space = ' '      //string vazia
let firstName = 'Isabella'
let lastName = 'A. Cammerer'
let country = 'Brasil'
let language = 'javascript'
let age = 26

//concatenação - conectando duas ou mais strings juntas

let fullName = firstName + space + lastName;
console.log(fullName)

//concatenação usando +

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country
console.log(personInfoOne)

//string longa - usar \ no final de cada linha para dizer que a string vai continuar na próxima linha

//Escape sequences in strings

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') //\n nova linha
console.log('Days\tTopics\tExercises')  //Days  Topics  Exercises
console.log('Day 1\t3\t5')              //Day 1 3 5
console.log('This is a backslash  symbol (\\)') // To write a backslash, This is a backslash  symbol (\)
console.log('In every programming language it starts with \"Hello, World!\"')   //In every programming language it starts with "Hello, World!"
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2022')        //The saying 'Seeing is Believing' isn't correct in 2022


//templates strings - inserir dados, valores ou operações dentro de um template string usando `` e ${}

let a = 2
let b = 3
console.log(`the sum of ${a} and ${b} is ${a + b}`)
console.log(`${a} is greater than ${b}: ${a > b}`) //false


//Métodos strings

//length - retorna o número de caracteres em uma string incluindo os espaços

let js = 'Javascript'
console.log(js.length)      //10
let food = 'watermelon'
console.log(food.length)    //10

//acessando caracteres em uma string - acessando qualquer caracter em uma string usando o seu index, primeiro index é 0 e o último index é length - 1

let string = 'javascript'
let firstLetter = string[0]
console.log(firstLetter)        //j

let secondLetter = string[1]    //a
let thirdLetter = string[2]     //v
let lastIndex = string.length - 1
console.log(lastIndex)          //9

//toUpperCase() - muda as strings para letras maiusculas

console.log(string.toUpperCase())   //JAVASCRIPT

//toLowerCase() - muda as strings para letras minusculas

console.log(string.toLowerCase())   //javascript

//split() - separa uma string em um local específico

let string1 = '30 Days of Javascript'
console.log(string.split())         //muda para uma array ["30 Days Of JavaScript"]
console.log(string.split(' '))      //separa em uma array com espaço ["30", "Days", "Of", "JavaScript"]

//includes() - verifica se o argumento específico já está na string, retornando boolean

console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false - sensível a letras maisculas e minusculas

//replace() - pega um argumento e substitui por outro

console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python
