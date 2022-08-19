//closure - funções dentro de funções, as funções de dentro acessam as variáveis de fora

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count ++
        return count
    }
    return innerFunction
}

const innerFunc = outerFunction()
console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
//1
//2
//3

function outerFunctionTwo() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }
    return {
        plusOne: plusOne(),
        minusOne: minusOne()
    }
}
const innerFuncs = outerFunctionTwo()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
//1
//0