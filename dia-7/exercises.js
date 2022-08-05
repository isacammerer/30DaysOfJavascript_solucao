//Declare a function fullName and it print out your full name.

function fullName() {
    let firstName = 'isabella'
    let lastName = ' A. Cammerer'
    let fullName = firstName + lastName
    return fullName
}
console.log(fullName())

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullNameAgain(firstName, lastName) {
    let fullName = firstName + lastName
    return fullName
}
console.log(fullName('isabella', ' A. Cammerer'))

//Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(sumOne, sumTwo) {
    let sum = sumOne + sumTwo
    return sum
}
console.log(addNumbers(12, 4))

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
    return length * width
}
console.log(areaOfRectangle(5,6))

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
    return (2 * (length + width))
}
console.log(perimeterOfRectangle(4, 6))

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, height) {
    return  (length * width * height)
}
console.log(volumeOfRectPrism(5, 6, 7))

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(r) {
    return Math.PI * r ** 2
}
console.log(areaOfCircle(3))
//** expoenencial

//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(r) {
    return 2 * Math.PI * r
}
console.log(circumOfCircle(6))

//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function density(mass, volume) {
    return mass/volume
}
console.log(density(4, 6))

//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speed(distance, time) {
    return distance/time
}
console.log(speed(4, 30))

//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weight(mass, gravity = 9.81) {
    return mass * gravity + ' N'
}
console.log(weight(100))

//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32
    return fahrenheit
}
console.log(convertCelsiusToFahrenheit(32))

//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

//The same groups apply to both men and women.
//Underweight: BMI is less than 18.5
//Normal weight: BMI is 18.5 to 24.9
//Overweight: BMI is 25 to 29.9
//Obese: BMI is 30 or more

function bmi(weight, height) {
    let bmiCalculated = weight/(height * height)
    if(bmiCalculated <= 18.5) {
        console.log('underweight: BMI is less than 18.5')
    } else if (bmiCalculated = 18.5 && bmiCalculated <= 24.9) {
        console.log('normal weight: BMI is 18.5 to 24.9')
    } else if (bmiCalculated >= 25 && 29.9) {
        console.log('overweight: BMI is 25 to 29.9') 
    } else if (bmiCalculated >= 30) {
        console.log('obese: BMI is 30 or more')
    }
    return bmiCalculated
}
console.log(bmi(62, 1.70))

//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
    if (month == 9 && 10 && 11) {
        return 'autumn';
    }
    if (month == 12 && 1 && 2) {
        return 'winter';
    }
    if (month == 3 && 4 && 5) {
        return 'spring';
    }
    if (month == 6 && 7 && 8) {
        return 'summer'
    }
}
console.log(checkSeason(6))

//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum without using Math.max method.

function findMax(number1, number2, number3) {
    let maxNumber = 0
    if(number1 > number2) {
        maxNumber = number1
    } else {
        maxNumber = number2
    }
    if(number3 > maxNumber) {
        maxNumber = number3
    }
    return maxNumber
}
console.log(findMax(0, 10, 5))
//10
console.log(findMax(0, -10, -2))
//0