//console.log() - mostra o output no browser

console.log('30 Days of Javascript')
//30 Days of Javascript

//console.warn() - aviso no browser, para informar ou avisar a versão errada de um package ou problemas no local acessado

console.warn('This is a warning')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')

//console.error() - mostra uma mensagem de erro

console.error('This is an error message')
console.error('We all make mistakes')

//console.table() - visualiza dados em forma de tabela, recebe um argumento, que deve ser array ou objeto, e parametros de colunas opcionais

//duas colunas (index e value dos nomes)
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)
//┌─────────┬────────────┐
//│ (index) │   Values   │
//├─────────┼────────────┤
//│    0    │ 'Asabeneh' │
//│    1    │  'Brook'   │
//│    2    │  'David'   │
//│    3    │   'John'   │
//└─────────┴────────────┘

const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
console.table(user)
//┌─────────┬──────────────┐
//│ (index) │    Values    │
//├─────────┼──────────────┤
//│  name   │  'Asabeneh'  │
//│  title  │ 'Programmer' │
//│ country │  'Finland'   │
//│  city   │  'Helsinki'  │
//│   age   │     250      │
//└─────────┴──────────────┘

//console.time() - iniciar um timer que é usado para saber quanto que a operação demora, retorna o tempo em milisegundos

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')
//Finland Helsinki
//Sweden Stockholm
//Norway Oslo
//Regular for loop: 0.239ms

//console.info() - mostra informações em formato de mensagem no browser

console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')

//console.assert() - escreve uma mensagem de error se a assertion for falsa, se for verdadeira não acontece nada, o primeiro parametro é uma expressão de assertion

console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}
//Assertion failed: 3 is not greater than 4
//the # is 0
//the # is 1
//Assertion failed: [object Object]
//Assertion failed: [object Object]
//the # is 2
//the # is 3
//the # is 4
//Assertion failed: [object Object]
//the # is 5
//the # is 6
//the # is 7
//Assertion failed: [object Object]
//the # is 8
//the # is 9
//the # is 10
//Assertion failed: [object Object]

//console.group() - ajuda a agrupar diferentes console log groups

const namesOne = ['Asabeneh', 'Brook', 'David', 'John']
const countriesOne = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const userOne = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(namesOne)
console.groupEnd()

console.group('Countries')
console.log(countriesOne)
console.groupEnd()

console.group('Users')
console.log(userOne)
console.log(users)
console.groupEnd()

//console.count() - mostra quantas vezes a função foi chamada
const func = () => {
    console.count('Function has been called')
  }
func()
func()
func()
//Function has been called: 1
//Function has been called: 2
//Function has been called: 3

//console.clear() - limpa o console