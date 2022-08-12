//test(): procurando o valor correpondente em uma string, retorna true ou false
const str = 'i love javascript'
const pattern = /love/
const result = pattern.test(str)
console.log(result)
//true

//match(): retorna uma array contendo todos os valores correspondentes, se não é utilizado o g (global), match() retorna uma array com o padrão, index, input e group
const resultTwo = str.match(pattern)
console.log(resultTwo)
//[ 'love', index: 2, input: 'i love javascript', groups: undefined ]

const patternTwo = /love/g
const resultThree = str.match(patternTwo)
console.log(resultThree)
//['love']

//search(): testa os valores correspondentes em uma string, retorna o index do valor correspondente ou -1 se falhar
const resultFour = str.search(patternTwo)
console.log(resultFour)
//2

//replace(): executa a procura para valores correspondentes em uma string e substitui com outra substring
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'
matchReplaced = txt.replace(/Python|python/, 'javascript')
console.log(matchReplaced)
//javascript is the most beautiful language that a human begin has ever created.I recommend python for a first programming language

const txtTwo = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
matches = txtTwo.replace(/%/g, '')
console.log(matches)
//I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.

//[]: A set of characters
    //[a-c] means, a or b or c
    //[a-z] means, any letter a to z
    //[A-Z] means, any character A to Z
    //[0-3] means, 0 or 1 or 2 or 3
    //[0-9] means any number 0 to 9
    //[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
// \: uses to escape special characters
// \d mean: match where the string contains digits (numbers from 0-9)
// \D mean: match where the string does not contain digits
// . : any character except new line character(\n)
// ^: starts with
// r'^substring' eg r'^love', a sentence which starts with a word love
// r'[^abc] mean not a, not b, not c.
// $: ends with
// r'substring$' eg r'love$', sentence ends with a word love
// *: zero or more times
// r'[a]*' means a optional or it can occur many times.
// +: one or more times
// r'[a]+' means at least once or more times
// ?: zero or one times
// r'[a]?' means zero times or once
// \b: word bounder, matches with the beginning or ending of a word
// {3}: Exactly 3 characters
// {3,}: At least 3 characters
// {3,8}: 3 to 8 characters
// |: Either or
// r'apple|banana' mean either of an apple or a banana
// (): Capture and group

//square bracket

//incluir lower e upper case
const patternThree = /[Aa]pple/g //[] significa A ou a
const text = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away.'
const txtMatches = text.match(patternThree)
console.log(txtMatches)
//[ 'Apple', 'apple' ]

//procurar pela banana
const patternFour = /[Aa]pple|[Bb]anana/g
const txtMatch = text.match(patternFour)
console.log(txtMatch)
//[ 'Apple', 'banana', 'apple', 'banana' ]

// \ - pega caracteres especiais
const padrao = /\d/g    // d pega os dígitos na string
const texto = 'This regular expression example was made in January 12,  2020.'
const achado = texto.match(padrao)
console.log(achado)
//[ '1', '2', '2', '0', '2', '0' ]

// + - one or more times
const padraoTwo = /\d+/g
const achadoTwo = texto.match(padraoTwo)
console.log(achadoTwo)
//[ '12', '2020' ]

// . significa qualquer caracter menos o caracter do new line (/n)
const padraoThree = /[a]./g
const txtThree = 'Apple and banana are fruits'
const achadoThree = txtThree.match(padraoThree)
console.log(achadoThree)
//[ 'an', 'an', 'an', 'a ', 'ar' ]

// * signica zero ou mais de uma vez que aparece o padrao
const patternFive = /[a].*/g    // . qualquer caracter, + qualquer caracter uma ou mais vezes
const matchesOne = txtThree.match(patternFive)
console.log(matchesOne)
//[ 'and banana are fruits' ]

// ?? zero ou mais vezes, o padrao pode não acontecer ou somente uma vez
const txtFour = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const patternSix = /[Ee]-?mail/g    // ? significa opcional
matches = txtFour.match(patternSix)
console.log(matches)
//[ 'e-mail', 'email', 'Email', 'E-mail' ]

//quantifier - especificar o tamanho da substring que estamos procurando
const txtFive = 'This regular expression example was made in December 6, 2019.'
const patternSeven = /\b\w{4}\b/g    //dentro do {} está o número exato de caracteres
const matchesTwo = txtFive.match(patternSeven)
console.log(matchesTwo)
//[ 'This', 'made', '2019' ]

// ^ - começa com ou negação 
//começa com
const patternCartIni = /^This/g
const matchedCartIni = txtFive.match(patternCartIni)
console.log(matchedCartIni)
//[ 'This' ]

//negação
const patternCartFin = /[^A-Za-z,. ]+/g  //significa negação dentro do set, sem A a Z, a a z, sem espaço, sem virgula e sem ponto
const matchedCartFin = txtFive.match(patternCartFin)
console.log(matchedCartFin)
//[ '6', '2019' ]


//exact match - deve ter ^ no começo e $ no fim
let patternExact = /^[A-Z][a-z]{3,12}$/;
let food = 'chocolate'
let resultFive = patternExact.test(food)
console.log(resultFive)
//false

