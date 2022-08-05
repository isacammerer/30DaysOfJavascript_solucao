//Create an empty object called dog

const dog = {}

//Print the the dog object on the console

console.log(dog)                            //{}

//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

const dogOne = {
    name: 'Oliver',
    legs: 4,
    color: 'black',
    age: 15,
    bark: function () {
        return 'woof woof'
    },
    hisName: function () {
        return `${this.name}`
    }
}

//Get name, legs, color, age and bark value from the dog object

console.log(dogOne.name)
console.log(dogOne.legs)
console.log(dogOne.color)
console.log(dogOne.age)
console.log(dogOne.bark())
//Olive
//4
//black
//15
//woof woof

//Set new properties the dog object: breed, getDogInfo
dogOne.breed = 'stray dog'
dogOne.getDogInfo = function () {
    let hisName = this.hisName()
    let statement = `${hisName} is a ${this.age} years old dog`
    return statement
}
console.log(dogOne)
console.log(dogOne.getDogInfo())
