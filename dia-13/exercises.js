//Display the countries array as a table

const countries = ['brazil', 'germany', 'hong kong', 'sweden']
console.table(countries)

//Display the countries object as a table

const countriesOne = {
    nameOne: 'brazil', 
    nameTwo: 'germany', 
    nameThree:'hong kong', 
    nameFour: 'sweden'
}
console.table(countriesOne)

//Use console.group() to group logs

const countriesTwo = ['brazil', 'germany', 'hong kong', 'sweden']
const countriesThree = {
    nameOne: 'brazil', 
    nameTwo: 'germany', 
    nameThree:'hong kong', 
    nameFour: 'sweden'
}
console.group('countries two')
console.log(countriesTwo)
console.groupEnd()

console.group('countries three')
console.log(countriesThree)
console.groupEnd()