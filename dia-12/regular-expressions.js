//reular expression - te ajuda a achar um padrão nos dados, pode checar se um padrão existe em diferentes data types, recebe dois parametros a de padrão de busca e o opcional flag (tipo de busca)

//pattern (padrão) - texto ou padrão do que estamos buscando
//flag - tipo de busca
//g: flag global, significa que estamos procurando o padrão em todo o texto
//i: procura por maiusculo ou minusculo
//m: multilinhas

//creating a pattern with RegExp Constructor 

//declarando a expressão regular sem o g (global) e o i (case insensitive flag)
let pattern = 'love'
let regEx = new RegExp(pattern)

//declarando expressão regular com o g (global) e o i (case insensitive flag)
let flag = 'gi'
let regExTwo = new RegExp(pattern, flag)
console.log(regExTwo)
// /love/gi

//declarando padrão regex usando RegExp objeto, escrevendo o padrão e a flag dentro do constructor
let regExThree = new RegExp('love', 'gi')


//creating a pattern without RegExp Constructor

//declarando expressão regular com o g (global) e o i (case insensitive flag)
let regExFour = /love/gi
