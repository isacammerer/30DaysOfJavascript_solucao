//destructing - é uma forma de de extrair dados e criar variáveis com esse mesmos dados

//destructing arrays - os valores da array numbers são iguais a ordem da array let
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers
console.log(numOne, numTwo, numThree)
//1 2 3

const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)
//Asabeneh Brook David John

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack
console.log(frontEnd, backEnd)
//[ 'HTML', 'CSS', 'JS', 'React' ] [ 'Node', 'Express', 'MongoDB' ]


//pular um dos valores, utilizado a , para omitir o index específico
const numbersTwo = [1, 2, 3]
let [numberOne, , numberThree] = numbers    //omitido o número 2
console.log(numberOne, numberThree)
//1 3


//pode ser usado o valor padrão caso o valor do index específico seja undefined
const namesTwo = [undefined, 'Brook', 'David']
let [
    firstPersonOne = 'Asabeneh',
    secondPersonOne,
    thirdPersonOne,
    fourthPersonOne = 'John'
] = namesTwo
console.log(firstPersonOne, secondPersonOne, thirdPersonOne, fourthPersonOne)
//Asabeneh Brook David John


//não é possível designar variável para todos os elementos na array, pode ser feito o destructing para os iniciais e depois é usado o spread ...
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3)
//1 2 3
console.log(rest)
//[4, 5,  6, 7, 8, 9, 10]


//destructuring during iteration
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
for (const [country, city] of countries) {
    console.log(country, city)
}
//Finland Helsinki
//Sweden Stockholm
//Norway Oslo


//destructuring object - quando vai realizar o destructure deve ser exatamente o mesmo key ou property do objeto
const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter)
//20 10 200 undefined (não existe perimeter)


//renaming during structuring
const rectangleTwo = {
    width: 20,
    height: 10,
    area: 200
}
let { width: w, height: h, area: a, perimeter: p} = rectangleTwo
console.log(w, h, a, p)
//20 10 200 undefined

//designando durante declaração um valor para a key
const rectangleThree = {
    widthOne: 20,
    heightOne: 10,
    areaOne: 200
}
let {widthOne, heightOne, areaOne, perimeterOne = 60} = rectangleThree
console.log(widthOne, heightOne, areaOne, perimeterOne)
//20 10 200 60


//object parameter without destructuring
const rect = {
    widthTwo: 20,
    heightTwo: 10
}
const calculatePerimeter = rectangle => {
    return 2 * (rectangle.widthTwo + rectangle.heightTwo)
}
console.log(calculatePerimeter(rect))
//60

//object parameter with destructuring
const calculatePerimeterTwo = ({widthTwo, heightTwo}) => {
    return 2 * (widthTwo + heightTwo)
}
console.log(calculatePerimeterTwo(rect))
//60


//destructuring object during iteration
const todoList = [
    {
        task:'Prepare JS Test',
        time:'4/1/2020 8:30',
        completed:true
      },
      {
        task:'Give JS Test',
        time:'4/1/2020 10:00',
        completed:false
      },
      {
        task:'Assess Test Result',
        time:'4/1/2020 1:00',
        completed:false
    }
]
for (const {task, time, completed} of todoList) {
    console.log(task, time, completed)
}
//Prepare JS Test 4/1/2020 8:30 true
//Give JS Test 4/1/2020 10:00 false
//Assess Test Result 4/1/2020 1:00 false