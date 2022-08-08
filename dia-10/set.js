//set - é uma coleção de elementos, que pode conter somente elementos únicos, é um objeto que pode ser iterado por todos os elementos

//empty set
const companiesThree = new Set()
console.log(companiesThree)
//Set(0) {}

//creating a set from array
const languagesOne = [
    //english repete 3 vezes e french repete 2 vezes, quando usado o set estes nomes aparecem somente 1 vez no objeto
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
const setOfLanguages = new Set(languagesOne)
console.log(setOfLanguages)
//Set(4) { 'English', 'Finnish', 'French', 'Spanish' }


//adding an element to a set
const companies = new Set() //criando um set vazio
console.log(companies.size) //0

companies.add('Google') //adicionando elemento para o set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) //5 elementos no set
console.log(companies)      //Set(5) { 'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft' }


//loop to add element to a set
const companiesTwo = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companiesTwo) {
    setOfCompanies.add(company)
}
//Set(5) { 'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft' }


//deleting an element from a set
console.log(companies.delete('Google'))
console.log(companies.size) //4 elementos no set


//checking if an element exist in the set
console.log(companies.has('Apple'))     //false
console.log(companies.has('Facebook'))  //true


//removing all the elements in the set
companies.clear()
console.log(companies)                  
//Set(0) {}


//how to use set
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
const langSet = new Set(languages)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4
  
const counts = []
const count = {}
  
for (const l of langSet) {
const filteredLang = languages.filter((lng) => lng === l)
console.log(filteredLang) // ["English", "English", "English"]
counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)
//[
    //{ lang: 'English', count: 3 },
    //{ lang: 'Finnish', count: 1 },
    //{ lang: 'French', count: 2 },
    //{ lang: 'Spanish', count: 1 }
//]


//count unique items in the array
const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)
console.log(setOfNumbers)
//Set(5) { 5, 3, 2, 9, 4 }


//union of sets - para ter a união de dois sets usasse o spread (...) operator
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C)
//Set(6) { 1, 2, 3, 4, 5, 6 }


//intersection of sets - para achar uma intersection (onde em diferentes arrays é achado as mesmas informações) usasse filter
let d = [1, 2, 3, 4, 5]
let e = [3, 4, 5, 6]

let D = new Set(d)
let E = new Set(e)

let f = d.filter((num) => E.has(num))
let F = new Set(f)
console.log(F)
//Set(3) { 3, 4, 5 }


//difference of sets - para achar uma diferença entre os dois sets usasse filter
let g = [1, 2, 3, 4, 5]
let h = [3, 4, 5, 6]

let G = new Set(g)
let H = new Set(h)
let i = g.filter((num) => !H.has(num))
let I = new Set(i)
console.log(I)
//Set(2) { 1, 2 }