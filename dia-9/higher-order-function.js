//higher order function - são funções que pegam uma function como parametro ou retornam a function como value

//callback - é uma function que pode ser passada como parametro para outra function
//callback function
const callback = (n) => {
    return n ** 2                                   //9
}
//function que pega outra function como parametro
function cube(callback, n) {
    return callback(n) * n
}
console.log(cube(callback, 3))                      //27

//returning function - retorna function como value
const higherOrder = n => {
    const doSomething = m => {
        const doWhatever = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatever
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))                  //23

const numbers = [1, 2, 3, 4, 5]
const sumArrayOne = arr => {
    let sum = 0
    const callback = function(element) {
        sum += element
    }
    arr.forEach(callback)
    return sum
}
console.log(sumArrayOne(numbers))                      //15

//simplificado
const sumArray = arr => {
    let sum = 0
    arr.forEach(element => {
        sum += element
    })
    return sum
}
console.log(sumArray(numbers))                      //15


//setting time - algumas atividades podem ser executadas em um certo período de tempo ou elas podem esperar para serem executadas

//setInterval - realiza uma atividade continuamente em um certo intervalo de tempo
function sayHello() {
    console.log('hello')
}
setInterval(sayHello, 1000)                         //imprime hello a cada 1000ms 

//setTimeout - executa uma atividade em um momento no futuro
setTimeout(sayHello, 2000)                          //imprime hello depois de esperar 2 segundos
