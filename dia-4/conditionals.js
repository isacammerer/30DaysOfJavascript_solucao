//conditonals - utilizadas para realizar decisões baseadas em diferentes condições
//conditional execution - um bloco de código de um ou mais argumentos serão executados se certa expressão é verdadeira
//repetitive execution - um bloco de código de um mais argumentos serão executados enquanto uma expressão seja verdadeira

//if - checar se a condição é verdadeira e executar o código
let num = 3
if (num > 0) {
    console.log(`${num} is a positive number`)
}

//if else - se a condição for verdadeira então o primeiro bloco será executado, se não a condição else será executada

if (num > 0) {
    console.log(`${num} is a positive number`)
} else {
    console.log(`${num} is a negative number`)
}

num = -3
if (num > 0) {
    console.log(`${num} is a positive number`)
} else {
    console.log(`${num} is a negative number`)
}

//if else if else - usado se há múltiplas condições
let a = 0
if(a > 0) {
    console.log(`${a} is a positive number`)
} else if (a < 0) {
    console.log(`${a} is a genative number`)
} else if (a == 0) {
    console.log(`${a} is zero`)
} else {
    console.log(`${a} is not a number`)
}

//switch - alternativa para if else if else else, o bloco de código executa se o valor no parenteses bate com o valor do case, o break é usado para que o código pare de funcionar caso a condição seja true

let weather = 'sunny'
switch (weather){
    case 'rainy':
        console.log('you need a rain coat')
        break
    case 'sunny':
        console.log('go out freely')
        break
    case 'cloudy':
        console.log('it might be cold, you need a jacket')
        break
    default:
        console.log('no need for a rain coat')
}

let numOne = prompt('Enter number');
switch (true) {
  case num > 0:
    console.log('Number is positive');
    break;
  case num == 0:
    console.log('Numbers is zero');
    break;
  case num < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}

//ternary operators

let isRaining = true
isRaining
    ? console.log('you need a rain coat')
    : console.log('no need for a rain coat')