// Array Helpers

// forEach --------------------------------------------------------->
// var colors = ['red', 'blue', 'green'];

// // for(var i = 0; i < colors.length; i++) {
// //     console.log(colors[i]);
// // }

// // colors.forEach(color => console.log(color));

// // Create an array of numbers
// var numbers = [1,2,3,4,5];

// // Create a variable to hold the sum
// var sum = 0;

// // Loop over the array, incrementing the sum variable
// numbers.forEach(number => {
//     sum += number;
// });

// // Print the sum variable
// console.log(sum);

// map ----------------------------------------------------------->
var numbers = [1,2,3];
var doubledNumbers = [];

// for(var i = 0; i < numbers.length; i++) {
//     doubledNumbers.push(numbers[i] * 2);
// }

var doubled = numbers.map(number => number * 2);

console.log(doubledNumbers);
console.log(doubled);

var cars = [
    { model: 'Buick', price: 'CHEAP' },
    { model: 'Camaro', price: 'EXPENSIVE' }
];

var prices = cars.map(car => car.price);

console.log(prices);