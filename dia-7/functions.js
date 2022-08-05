//function - bloco de código reutilizavel designados a fazer uma tarefa. Declarada pela palavra function seguida de um nome e seguida por (). O () pode receber um parametro, que será chamado de argumento. Para armazenar dados a uma função, ela deve retornar certos data types

//function declaration - sem parâmetro
//function functionName() {
    //code
//}
//functionName()

//function without parameter and return
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
}
square()


//function returning value - também pode retornar valores, se a função não retornar valores ela é undefined
function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total
}
console.log(addTwoNumbers())


//function with a parameter - parametros podem ser diferentes data types (números, strings, booleans, objeto e função)
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(10))


//function with two parameters 
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
}
sumTwoNumbers(10, 20)


//function with many parameters
//esta function pega uma array como parâmetro e soma os números na array
function sumArrayValues(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i ++) {
        sum = sum + i
    }
    return sum
}
const numbers = [1, 2, 3, 4, 5]
console.log(sumArrayValues(numbers))


//function with unlimited numbers of parameters
//unimited number of parameters in regular function 
function sumAllNums() {
    let sum = 0
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(sumAllNums(10, 20, 12, 40, 30))
console.log(sumAllNums(15, 20, 25, 30))


//unlimited number of parameters in arrow function - necessário usar (...parameterName)
const sumNums = (...args) => {
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}
console.log(sumNums(5, 6, 7, 8))


//arrow functions
const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}
const countries = ['Brazil', 'Germany', 'Denmark']
console.log(changeToUpperCase(countries))


//function with default parameters - se não é passado um argumento o default value será passado a função
function greetings(name = 'Isabella') {
    let message = `${name}, welcome to 30 days of javascript`
    return message
}
console.log(greetings())
console.log(greetings('you'))