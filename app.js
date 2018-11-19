// Array Helpers

// forEach ---------------------------------------------------------
var colors = ['red', 'blue', 'green'];

// for(var i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// colors.forEach(color => console.log(color));

// Create an array of numbers
var numbers = [1,2,3,4,5];

// Create a variable to hold the sum
var sum = 0;

// Loop over the array, incrementing the sum variable
numbers.forEach(number => {
    sum += number;
});

// Print the sum variable
console.log(sum);