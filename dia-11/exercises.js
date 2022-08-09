//Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const constants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)
//2.72 3.14 9.81 37 100

//Destructure and assign the elements of countries array to fin, est, sw, den, nor

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)
//Finland Estonia Sweden Denmark Norway

//Destructure the rectangle object by its properties or keys.

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter)
//20 10 200 60

//Iterate through the users array and get all the keys of the object using destructuring

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
for (const {name, scores, skills, age} of users) {
    console.log(name, scores, skills, age)
}
//Brook 75 [ 'HTM', 'CSS', 'JS' ] 16
//Alex 80 [ 'HTM', 'CSS', 'JS' ] 18
//David 75 [ 'HTM', 'CSS' ] 22
//John 85 [ 'HTML' ] 25
//Sara 95 [ 'HTM', 'CSS', 'JS' ] 26
//Martha 80 [ 'HTM', 'CSS', 'JS' ] 18
//Thomas 90 [ 'HTM', 'CSS', 'JS' ] 20
