//arrays - guardam múltiplos valores que podem ser acessados pelos seus indexes que iniciam do 0 e o último elemento length - 1, sendo modificável, valores duplicados e diferentes data types, mais comum utilizar const

//empty array
//array constructor
const arr = Array()
console.log(arr)

//square brackets - recomendado para criar uma lista vazia
const arrOne = []
console.log(arrOne)

//array with values- com valores iniciais, length é usado para descobrir o tamanho da array
const numbers = [1, 2, 3, 4, 5]
const fruits = ['banana', 'watermelon', 'lime', 'mango']

console.log('Numbers: ', numbers)
console.log('Number of numbers: ', numbers.length)

console.log('Fruits: ', fruits)
console.log('Number of fruits: ', fruits.length)

//array with different data types
const arrTwo = [
    'isabella',
    true,
    26,
    {country: 'Brasil', city: 'Porto Alegre'}
]
console.log(arrTwo)

//creating an array using split - separar uma string em diferentes posições e pode ser modificado em uma array

let js = 'javascript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript)          //['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

let companiesString = 'facebook, google, microsoft, apple, IBM'
const companies = companiesString.split(',')
console.log(companies)                  //[ 'facebook', ' google', ' microsoft', ' apple', ' IBM' ]

let txt = "hello, it's me"
const words = txt.split(' ')
console.log(words)                      //[ 'hello,', "it's", 'me' ]


//acessing array items using index - acessando cada elemento em uma arrays usando o seu index
const food = ['rice', 'beans', 'meat', 'juice']
let firstFood = food[0]                 //acessando o primeiro item
console.log(firstFood)                  //rice

secondFood = food[1]                    
console.log(secondFood)                 //beans

let lastFood = food[3]
console.log(lastFood)                   //juice

let lastIndex = food.length - 1
lastFood = food[lastIndex]
console.log(lastFood)                   //juice


//modifying array element 
const numberTwo = [0, 1, 2, 3, 4, 5]
numberTwo[0] = 1
let lastIndexAgain = numberTwo.length - 1
numberTwo[lastIndexAgain] = 6
console.log(numberTwo)


