//Iterate 0 to 10 using for loop, do the same using while and do while loop

for(let i = 0; i <= 10; i++) {
    console.log(i)
}
//0 1 2 3 4 5 6 7 8 9 10

let i = 0
while (i <= 10) {
    console.log(i)
    i++
}
//0 1 2 3 4 5 6 7 8 9 10

let j = 0
do {
    console.log(j)
    j++
} while (j <= 10)
//0 1 2 3 4 5 6 7 8 9 10

//Iterate 10 to 0 using for loop, do the same using while and do while loop

for(let i = 10; i >= 0; i--) {
    console.log(i)
}
//10 9 8 7 6 5 4 3 2 1 0

let k = 10
while (k >= 0) {
    console.log(k)
    k--
}
//10 9 8 7 6 5 4 3 2 1 0

do {
    console.log(k)
    k--
} while (k >= 0)
//10 9 8 7 6 5 4 3 2 1 0
  
//Iterate 0 to n using for loop
let n = 5
for(let i = 0; i <= n; i++) {
    console.log(i)
}
//0 1 2 3 4 5
  
//Write a loop that makes the following pattern using console.log():
  
    //#
    //##
    //###
    //####
    //#####
    //######
    //#######

//let n = 5
let string = ''
for(let i = 0; i <= n; i++) {
    for(let j = 0; j < i; j++) {
        string += '#'
    }
    string += '\n'
}
console.log(string)
//necessário que seja feito 2 for loops, o loop exterior cuidará das colunas do desenho e o loop interno irá imprimir as fileiras


//Use loop to print the following pattern:
  
    //0 x 0 = 0
    //1 x 1 = 1
    //2 x 2 = 4
    //3 x 3 = 9
    //4 x 4 = 16
    //5 x 5 = 25
    //6 x 6 = 36
    //7 x 7 = 49
    //8 x 8 = 64
    //9 x 9 = 81
    //10 x 10 = 100

for(let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}

//Use for loop to iterate from 0 to 100 and print only even numbers

for(let i = 0; i <= 100; i++) {
    if ((i % 2) == 0) {
        console.log(i)
    }
}

//Use for loop to iterate from 0 to 100 and print only odd numbers

for(let i = 0; i <= 100; i++) {
    if ((i % 2) !== 0) {
        console.log(i)
    }
}
  
//Use for loop to iterate from 0 to 100 and print only prime numbers

let isPrime = true
for(let i = 2; i <= 100; i++) {
    for(let j = 2; j < i - 1; j++) {
        if(i % j == 0) {
            isPrime = false
        }
    }
    if(isPrime) {
        console.log(i)
    }
    isPrime = true
}
//primeiro loop faz a iteração de 1 para 100 e o segundo for loop verifica se i é dividido por qualquer número de 2 para i -1 usando a condição i % j == 0, se for 0 não é número primo 
  
//Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sumThree = 0
for(let i = 1; i <= 100; i++) {
    sumThree = sumThree + i
}
console.log(sumThree)
  
//The sum of all numbers from 0 to 100 is 5050.


//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

//even 
let sumOne = 0 
for(i = 1; i <=100; i++)
{
  if(i % 2 == 0)
  {
    sumOne=sumOne+i
  }
}
console.log(sumOne)

//odds
let sumTwo = 0 
for(i = 1;i <=100 ;i++)
{
  if(i % 2 == 1)
  {
    sumTwo=sumTwo+i
  }
}
console.log(sumTwo)
//The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.


//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
  
const sumEven = []
sumEven.push(sumOne)
console.log(sumEven)

const sumOdd = []
sumOdd.push(sumTwo)
console.log(sumOdd)

//Develop a small script which generate array of 5 random numbers

const arrOne = []
while (arrOne.length < 5) {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    arrOne.push(randomNumber)
}
console.log(arrOne)
  
//Develop a small script which generate array of 5 random numbers and the numbers must be unique

const arr = []
while (arr.length < 5) {
    const randomNumbers = Math.floor(Math.random() * 100) + 1
    if(arr.indexOf(randomNumbers) === - 1) {
        arr.push(randomNumbers)
    }
}
console.log(arr)
//Math.random gera somente números entre 0 e 1, deve-se multiplicar o resultado por 100 arrendodar com Math.floor e adicionar 1. 

  
//Develop a small script which generate a six characters random id:
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
function generateString(length) {
    let randomId = ''
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return randomId
}
console.log(generateString(5))
//Math.random utilizado para gerar caracteres aleatórios
//o for loop é usado para gerar um novo caracter pela function generateString