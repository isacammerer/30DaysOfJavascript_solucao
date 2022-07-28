//numbers são integers e valores decimais (floats)

//Declarando number data types

let age = 26;
const gravity = 9.81        //utilizamos const para valores qu não mudam
let mass = 61               //massa em kilogramas
//const PI = 3.14           //pi é uma constante geométrica
const boilingPoint = 100    //temperatura em celsius, valor constante
const bodyTemp = 37         //média de temperatura em celsius do ser humano, valor constante

console.log(age, gravity, mass, boilingPoint, bodyTemp);


//Math objects

const PI = Math.PI

console.log(PI);            //3.141592653589793

//Arredodando para o número mais próximo
//Se acima de .5 arredonda para cima e abaixo de .5 arredonda para baixo

console.log(Math.round(PI))             //3, valor arredonado mais próximo
console.log(Math.round(9.81))           //10, arredonda
console.log(Math.floor(PI))             //3, retorna o menor valor inteiro
console.log(Math.ceil(PI))              //3, arredonda para cima
console.log(Math.min(-5, 3, 1, 9))      //-5, retorna o menor valor
console.log(Math.max(-5, 3, 1, 9))      //9, retorna o maior valor

const randNum = Math.random()   //cria uma número aleatório de 0 até 0.99999
console.log(randNum);

//Criando um valor aleatório entre 0 e 10

const num = Math.floor(Math.random() * 11)  //cria um valor aleatório entre 0 e 10
console.log(num)


//Random number generator

let randomNum = Math.random()           //gera um númeto entre 0 e 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)           //mínimo de 0 e máximo 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)      //entre 0 e 10

