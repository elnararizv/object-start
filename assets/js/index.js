"use strict"
// Task 1-2-3-4-5
const person = {
    name: 'Elnara',
    age: 21,
    city: 'Sumgait'
}
person.age = 22
person.country = 'Azerbaijan'
delete person.city

function printInfo(person) {
    for (const key in person) {
        console.log(person[key])
    }
}
printInfo(person)

// --------------------------------------------
// Task 6-7
let car = {
    brand: 'BMW',
    model: 'M5',
    year: 2022
}

car.year = 2023
console.log(car)

// ------------------------------------------------
// Task 8-9
let book = {
    title: 'Harry Potter and the Philosopher Stone',
    author: 'J.K.Rowling',
    pages: 223
}
book.pages = 230
console.log(book)

// -----------------------------------------------
// Task 10-11-12-13

const student = {
    name: 'Elnara',
    age: 21,
    grades: [88, 78, 91, 86]
}
student.university = 'SDU'
delete student.university
function getAverageGrade(grade) {
    let sum = 0
    for (var i = 0; i < student.grades.length; i++) {
        sum += student.grades[i]

    } return sum / student.grades.length
}
console.log(getAverageGrade(student))

// ------------------------------------------------
// Task 14-15
const rectangle = {
    width: 30,
    height: 50
}

function calculateArea(obj) {
    return rectangle.width * rectangle.height
}
console.log(calculateArea(rectangle))

// --------------------------------------------------
// Task 16-17

let circle = {
    radius: 6,
    color: 'blue',
    findDiameter: function calculateCircumference() {
        return this.radius * 2
    }
}
console.log(circle.findDiameter())
console.log(circle)

// --------------------------------------------------
// Task 18-19
let employee = {
    name: 'John',
    position: 'Teacher',
    salary: 600
}
console.log(employee.salary * 10 / 100 + employee.salary)

// --------------------------------------------------
// Task 20-21

const product = {
    name: 'T-shirt',
    price: 30,
    quantity: 5
}
function calculateTotalPrice(obj) {
    return product.price * product.quantity
}
console.log(calculateTotalPrice(product))

// -------------------------------------------------
// Task 22-23
const movie = {
    title: 'Titanic',
    director: 'James Cameron',
    year: 1996
}
movie.year = 1997
console.log(movie)

// --------------------------------------------------
// Task 24-25

const bankAccount = {
    balance: 1100,
    currency: 1.8477
}
bankAccount.balance = 900
console.log(bankAccount)

// -------------------------------------------------
// Task 26-27-28
const team = {
    name: 'Team',
    coach: 'John',
    players: ['Jonathan', 'Anthony', 'Cedric']
}
team.players.push('Brendan')
delete team.coach
console.log(team)

function printTeamInfo(obj) {
    for (var [key, value] of Object.entries(team)) {
        console.log(key, value)
    }
}
console.log(printTeamInfo(team))

// ------------------------------------------------------
// Task 30
const city = {
    name: 'Baku',
    population: 964500,
    country: 'Azerbaijan'
}
console.log(city)