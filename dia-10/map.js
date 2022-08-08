//creating an empty map
const map = new Map()
console.log(map)
//Map(0) {}

//creating an map from array
countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
const mapOne = new Map(countries)
console.log(mapOne)
//Map(3) {
    //'Finland' => 'Helsinki',
    //'Sweden' => 'Stockholm',
    //'Norway' => 'Oslo'
//}
console.log(mapOne.size)
//3


//adding values to the map
const countriesMap = new Map()
console.log(countriesMap.size)//0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Olso')
console.log(countriesMap)
//Map(3) {
    //'Finland' => 'Helsinki',
    //'Sweden' => 'Stockholm',
    //'Norway' => 'Olso'
//}
console.log(countriesMap.size)
//3


//getting a value from map
console.log(countriesMap.get('Finland'))
//Helsinki


//checking key in map - checa se uma key existe, retorna true ou false
console.log(countriesMap.has('Finland'))
//true


//getting all the values from map using loop
for (const country of countriesMap) {
    console.log(country)
}
//[ 'Finland', 'Helsinki' ]
//[ 'Sweden', 'Stockholm' ]
//[ 'Norway', 'Olso' ]

for (const [country, city] of countriesMap) {
    console.log(country, city)
}
//Finland Helsinki
//Sweden Stockholm
//Norway Oslo
  