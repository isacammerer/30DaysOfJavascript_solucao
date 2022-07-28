//Primitive data types - imutáveis

//Números - integers, floats
//Strings - qualquer dado usando '', "" ou ``
//Booleans - true ou false
//Null - sem valor ou valor vazio
//Undefined - variável declarada sem um valor
//Symbol - um valor único que pode ser gerado por um symbol constructor

let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo) //true

let js = 'Javascript';
let py = 'Python';

console.log(js == py) //false

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff) //false


//Non-primitive data types - modificável, não podem ser comparados como os primitives data types, somente com comparados por referência e não pelo seu valor

//Objects - lista de dados dentro de {}, são somente iguais se eles conectados ao mesmo objeto

let userOne = {
    name: 'Isabella',
    role: 'studying',
    country: 'Brazil'
}

/*let userTwo = {
    name: 'Isabella',
    role: 'studying',
    country: 'Brazil'
}*/

console.log(userOne == userTwo); //false

let userTwo = userOne

console.log(userOne == userTwo); //true

//Arrays - lista de dados dentro de [], pode conter o mesmo ou diferentes tipos de dados, referenciado por index

let nums = [1, 2, 3, 4];
nums[0] = 10;

console.log(nums); //[10, 2, 3, 4]

let numbers = [4, 5, 6];

console.log(nums == numbers) //false

