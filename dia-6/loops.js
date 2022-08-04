//for
//estrutura: for(initialization, condition, increment/decrement) {}

for(let i = 0; i <= 5; i++) {                                
    console.log(i)
}
//0 1 2 3 4 5

for(let i = 5; i >= 0; i--) {                               
    console.log(i)
}
//5 4 3 2 1 0

for(let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}
//0 * 0 = 0
//1 * 1 = 1
//2 * 2 = 4
//3 * 3 = 9
//4 * 4 = 16
//5 * 5 = 25

const countries = ['finland', 'brazil', 'sweden', 'germany']
const newArr = []
for(let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr)
//[ 'FINLAND', 'BRAZIL', 'SWEDEN', 'GERMANY' ]


//adicionando todos elementos na array
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
}
console.log(sum)
//15


//criando uma nova array baseada em uma array existente
const newArrTwo = []
let sumTwo = 0
for(let i = 0; i < numbers.length; i++) {
    newArrTwo.push(numbers[i] ** 2)
}
console.log(newArrTwo)
//[ 1, 4, 9, 16, 25 ]


//while

let i = 0
while (i <= 5) {
    console.log(i)
    i++
}
//0 1 2 3 4 5


//do while
do {
    console.log(i)
    i++
} while (i <= 5)
//0 1 2 3 4 5


//for of - usado para arrays, iterando pela array se não está interessado no index de cada elemento da array
//estrutura: for(const element of arr) {}

const number = [1, 2, 3, 4, 5]
for(const num of number) {
    console.log(num)
}
//1 2 3 4 5

for(const num of number) {
    console.log(num * num)
}
//1 4 9 16 25

//adicionando todos os numeros na array
let sumOne = 0
for(const num of numbers) {
    sumOne += num
}
console.log(sumOne)
//15


//break - utilizado para quebrar um loop

//continue - pular certas iterações
for(let i = 0; i <= 5; i++) {
    if(i === 3) {
    }
    console.log(i)
}
//0 1 2 4 5