//methods to manipulate arrays

//array constructor - para criar uma array
const arr = Array()                         //cria uma array vazia
console.log(arr)

const eightEmptyValues = Array(8)           //cria uma array com 8 valores vazios
console.log(eightEmptyValues)               //[ <8 empty items> ]


//fill - coloca todos os elementos da array com valores estáticos
const eightXvalues = Array(8).fill('X')     //cria 8 elementos com o valor 'X
console.log(eightXvalues)                   //['X', 'X','X','X','X','X','X','X']


//concat - concatenando duas arrays
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)                      //[ 1, 2, 3, 4, 5, 6 ]


//length - saber o tamanho da array
const numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers.length)                 //6


//indexOf - para checar se um item existe em uma array, se existir retorna o index se não retorna -1
console.log(numbers.indexOf(0))             //-1
console.log(numbers.indexOf(3))             //2
console.log(numbers.indexOf(2))             //1
console.log(numbers.indexOf(4))             //3


//checar se um item está em uma lista
const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')        //0

if(index === -1) {
    console.log('this fruit does not exist in the array')
} else {
    console.log('this fruit does exist in the array')       //existe na array
}


//pode ser usado ternary
index === -1 ? console.log('this fruit does not exist in the array'): console.log('this fruit does exist in the array')


//lastIndexOf - informa a posição do último item da array, se existe retorna o index se não retorna -1
const number = [1, 2, 3, 4, 4, 3, 2, 1]
console.log(number.lastIndexOf(2))              //6
console.log(number.lastIndexOf(0))              //-1
console.log(number.lastIndexOf(4))              //4


//includes - para checar se existe o item na array, se existir retorna true se não retorna false
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
console.log(webTechs.includes('Node'))          //true
console.log(webTechs.includes('SQL'))           //false


//toString - convertendo array para string
const animals = ['dogs', 'cats', 'birds']
console.log(animals.toString())                 //dogs,cats,birds



//join - juntar elementos da array, o argumento informado no método join vai ser juntado na array e retornará como uma string
console.log(webTechs.join())                    //HTML,CSS,JavaScript,React,Redux,Node,MongoDB
console.log(webTechs.join(' # '))               //HTML # CSS # JavaScript # React # Redux # Node # MongoDB


//slice array - remover múltiplos itens, recebe dois parâmetros posição inicial e posição final 
const numbersTwo = [1, 2, 3, 4, 5]
console.log(numbersTwo.slice())                         //copia todos os itens
console.log(numbersTwo.slice(0))                        //copia todos os itens
console.log(numbersTwo.slice(0, numbersTwo.length))     //copia todos os itens
console.log(numbersTwo.slice(1,4))                      //[2,3,4] não inclui a posição final


//splice array - recebe 3 parametros: posição inicial, número de itens a serem removidos e número de itens adicionados
numbersTwo.splice()
console.log(numbersTwo)                                 //remove todos os itens

numbersTwo.splice(0,1)
console.log(numbersTwo)                                 //remove o primeiro tem

numbersTwo.splice(3, 3, 7, 8, 9)
console.log(numbersTwo.splice(3, 3, 7, 8, 9))           //[ 7, 8, 9 ]


//push -adicionando um item no final da array 
const arrOne = ['item1', 'item2', 'item3']
arrOne.push('new item')
console.log(arrOne)                                     //[ 'item1', 'item2', 'item3', 'new item' ]

//pop - removendo um item do final da array
const fruit = ['banana', 'orange', 'mango', 'lemon']
fruit.pop()
console.log(fruit)                                      //[ 'banana', 'orange', 'mango' ]


//shift - removendo um item do início do array
arrOne.shift()
console.log(arrOne)                                     //[ 'item2', 'item3', 'new item' ]


//unshift - adicionando um item no início da array
arrOne.unshift('item0')
console.log(arrOne)                                     //[ 'item0', 'item2', 'item3', 'new item' ]

//reverse - reverter a ordem da array
fruits.reverse()
console.log(fruits)                                     //[ 'lemon', 'mango', 'orange', 'banana' ]

//sort - organiza os elementos da array em uma ordem ascendente, usa uma call back function
webTechs.sort()
console.log(webTechs)                                   //[ 'CSS', 'HTML', 'JavaScript', 'MongoDB', 'Node', 'React', 'Redux' ]