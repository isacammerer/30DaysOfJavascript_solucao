//async e await - async em frente de uma função significa que uma function vai retorna uma promise, a function abaixo ao inves de retorna um valor retorna uma promise
const square = async function (n) {
    return n * n
}
console.log(square(2))
//Promise { 4 }

//acessar o valor da promise, usasse await
const url = 'https://restcountries.com/v2/all' // countries api
const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.error(err)
    }
  }
console.log('===== async and await')
fetchData()