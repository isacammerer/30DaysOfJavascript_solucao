//Create a closure which has one inner function

function outerFunction() {
    let count = 10;
    function innerFunction() {
        count++
        return count
    }
    return innerFunction
}
const innerFunc = outerFunction()
console.log(innerFunc())    //11
console.log(innerFunc())    //12
console.log(innerFunc())    //13
console.log(innerFunc())    //14
console.log(innerFunc())    //15

//Create a closure which has three inner functions

function outerFunctionTwo() {
    let count = 5;
    function innerFunctionTwo() {
        count++
        return count
    }
    function innerFunctionThree() {
        count++
        return count
    }
    function innerFunctionFour() {
        count--
        return count
    }
    return {
        innerFunctionTwo: innerFunctionTwo(),
        innerFunctionThree: innerFunctionThree(),
        innerFunctionFour: innerFunctionFour()
    }
}
const innerFuncs = outerFunctionTwo()
console.log(innerFuncs.innerFunctionTwo)    //6
console.log(innerFuncs.innerFunctionThree)  //7
console.log(innerFuncs.innerFunctionFour)   //6