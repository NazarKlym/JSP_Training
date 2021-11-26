
// submit homework to the repository that you created for git lecture

// 1. Compute the exponent of a number (using recursion);
//8^2 = 8 x 8 = 64

function pow(x, n) {
    return (n != 1) ? x*pow(x, n-1) : x;
}
console.log( pow(8, 2) )

// 2. Write functions min and max that will find min and max number in array using apply

let numbers = [3, 10, 43, 6, 7];

let max = Math.max.apply(null, numbers);
let min = Math.min.apply(null, numbers);

console.log(max);
console.log(min);

// 3. write a function displayCarDetails that will receive as argument ownerName
//    and return a string with car registration number, branch and color.
//    Please make examples for three different cars

class Car {
    constructor(registrationNumber, brand, color, ownerName) {
        this.registrationNumber = registrationNumber;
        this.brand = brand;
        this.color = color;
        this.ownerName = ownerName;
    }
}
const car1 = new Car("AT 9909 EI", "VW", "red", "Oleg");
const car2 = new Car("BC 7281 OA", "Ford", "green", "Anton");
const car3 = new Car("ZT 1909 EI", "MAZDA", "red", "Alex");

const cars = [car1, car2, car3];

function displayCarDetails(ownerName) {
    const car = cars.find((car) => car.ownerName === ownerName);

    return `registrationNumber: ${car.registrationNumber}, brand: ${car.brand}, color: ${car.color}`;
}

displayCarDetails("Anton");
displayCarDetails("Alex");
displayCarDetails("Oleg");



// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that

// function greet (person) {
//   if (person.name ==  'amy' ) {
//     return 'hey amy'
//   } else {
//     return 'hey arnold'
//   }
// }
// const amy = {name: 'amy'}
// greet(amy)

// code already logs “hey amy”!

// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn’t do what we expect - fix that(find two solutions)

// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0)
// }

for (let i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 0)
}

for (var i = 0; i < 4; i++) {
    console.log(i)
}

function setDelay(i) {
    setTimeout(() => console.log(i), 0);
}
for (var i = 0; i < 4; i++) {
    setDelay(i);
}
