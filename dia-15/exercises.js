//Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    getFullInfo() {
        let info = `${this.name} and is ${this.age} years old, has ${this.legs} legs and his fur is ${this.color}`
        return info
    }
}
const animal = new Animal('oliver', 15, 'black', 4)
console.log(animal.getFullInfo())
//Animal { name: 'oliver', age: 15, color: 'black', legs: 4 }

//Create a Dog and Cat child class from the Animal Class.
class twoAnimals extends Animal {
    constructor(name, type, age, color, legs) {
        super(name, age, color, legs)
        this.type = type
    }
}
const dog = new twoAnimals('oliver', 'dog', 15, 'black', 4)
const cat = new twoAnimals('leia', 'cat', 3, 'grey', 4)
console.log(dog)
console.log(cat)
