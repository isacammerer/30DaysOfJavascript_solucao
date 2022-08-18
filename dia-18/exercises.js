//Read the countries API using fetch and print the name of country, capital, languages, population and area.

const countriesAPI = 'https://restcountries.com/v2/all?fields=name,capital,languages,population,area'

fetch(countriesAPI)
    .then(res => res.json())
    .then((data) => console.log(data))
    .catch(error => console.error(error))

