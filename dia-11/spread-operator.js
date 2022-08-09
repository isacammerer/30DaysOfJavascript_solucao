//spread or rest operator - usado para pegar o resto dos elementos da array, também usado para colocar em outra array

//spread operator to get the rest of array elements
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3)
console.log(rest)
//1 2 3
//[4, 5, 6, 7, 8, 9, 10]


//spread oprator to copy array
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]
console.log(evenNumbers)
//[ 0, 2, 4, 6, 8, 10 ]
console.log(oddNumbers)
//[ 1, 3, 5, 7, 9 ]
console.log(wholeNumbers)
//[ 0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9 ]

//spread operator to copy object
const user = {
    name: 'isabella',
    title: 'programmer',
    country: 'brazil'
}
const copiedUser = {...user}
console.log(copiedUser)
//{ name: 'isabella', title: 'programmer', country: 'brazil' }


//modifying or changing the object while copying
const copiedUserTwo = {...user, title: 'student'}
console.log(copiedUserTwo)
//{ name: 'isabella', title: 'student', country: 'brazil' }


//spread operator with arrow function - se usar spread operator como parametro, o argumento passado quando iniciarmos a function vai mudar para uma array
const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args){
      sum += num
    }
    return sum
}
console.log(sumAllNums(1, 2, 3, 4, 5))
//15


