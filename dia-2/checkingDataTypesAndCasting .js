//typeOf - checar que tipo de variável o dado é

let firstName = 'Isabella'
console.log(typeof(firstName))      //string

//Casting - converter um tipo de dado para outro, quando realizar operações aritméticas as strings números devem ser convertidas para integers ou floats

//String to integer - string numeros (número dentro de "", "5", "10") para numeros

//parseInt()

let num = '10'
let numInt = parseInt(num)
console.log(numInt)         //10

//Number()

let numInt_2 = Number(num)
console.log(numInt_2)       //10

//Plus sign(+)

let numInt_3 = +num
console.log(numInt_3)       //10


//String to float - mesma coisa que o string to integer, também usa o Number e o +

//parseFloat()

let num_2 = '6.14'
let numFloat = parseFloat(num_2)    //6.14


//Float to Int - converte números com vírgula para números inteiros

//parseInt()

let numInt_4 = parseInt(num_2)      //9
