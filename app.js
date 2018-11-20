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

// // map ----------------------------------------------------------->
// var numbers = [1,2,3];
// var doubledNumbers = [];

// // for(var i = 0; i < numbers.length; i++) {
// //     doubledNumbers.push(numbers[i] * 2);
// // }

// var doubled = numbers.map(number => number * 2);

// console.log(doubledNumbers);
// console.log(doubled);

// var cars = [
//     { model: 'Buick', price: 'CHEAP' },
//     { model: 'Camaro', price: 'EXPENSIVE' }
// ];

// var prices = cars.map(car => car.price);

// console.log(prices);

// filter ----------------------------------------------------------->

var products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
    { name: 'orange', type: 'fruit', quantity: 3, price: 5 },
];

// var filteredProducts = [];

// for (var i = 0; i < products.length; i++) {
//     if (products[i].type === 'fruit') {
//     filteredProducts.push(products[i]);
//     }
// };

// // console.log(filteredProducts);

// let usingFilter = products.filter(product => {
//     return product.type === 'fruit';
// });

// // console.log(usingFilter);

// Type is 'vegetable', quanitity is greater than 0, price is less than 10

let advancedFilter = products.filter(product => {
    return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
});

// console.log(advancedFilter);

var post = { id: 4, title: 'New Post'};

var comments = [
    { postId: 4, content: 'awesome post' },
    { postId: 3, content: 'it was ok' },
    { postId: 4, content: 'neat' },
];

function commentsForPost(post, comments) {
    return comments.filter(comment => {
        return comment.postId === post.id;
    })
};

console.log(commentsForPost(post, comments));





