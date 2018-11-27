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

// let advancedFilter = products.filter(product => {
//     return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
// });

// // console.log(advancedFilter);

// var post = { id: 4, title: 'New Post'};

// var comments = [
//     { postId: 4, content: 'awesome post' },
//     { postId: 3, content: 'it was ok' },
//     { postId: 4, content: 'neat' },
// ];

// function commentsForPost(post, comments) {
//     return comments.filter(comment => {
//         return comment.postId === post.id;
//     })
// };

// console.log(commentsForPost(post, comments));

// Find ----------------------------------------------------------->

// var users = [
//     { name: 'Jill' },
//     { name: 'Alex' },
//     { name: 'Bill' },
// ];

// var user;

// // for (var i = 0; i < users.length; i++) {
// //     if (users[i].name === 'Alex') {
// //         user = users[i];
// //         break;
// //     }
// // }



// const test = users.find(user => {
//     return user.name ==='Alex';
// });

// console.log(test);

// function Car(model) {
//     this.model = model;
// }

// var cars = [
//     new Car('Buick'),
//     new Car('Camaro'),
//     new Car('Focus')
// ];

// const selectedCar = cars.find(car => {
//     return car.model === 'Focus';
// });

// console.log(selectedCar);

// var posts = [
//     { id: 1, title: 'New Post' },
//     { id: 2, title: 'Old Post' },
// ];

// var comment = { postId: 1, content: 'Great Post'};

// function postForComment(posts, comment) {
//     return posts.find((post) => {
//         return post.id === comment.postId;
//     });
// };

// console.log(postForComment(posts, comment));

// Every and Some ----------------------------------------------------------->

var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

// var allComputersCanRunProgram = true;
// var onlySomeComputersCanRunProgram = false;

// for (var i = 0; i < computers.length; i++) {
//     var computer = computers[i];

//     if (computer.ram < 16) {
//         allComputersCanRunProgram = false;
//     } else {
//         onlySomeComputersCanRunProgram = true;
//     }
// }

// console.log(allComputersCanRunProgram);
// console.log(onlySomeComputersCanRunProgram);

// const comp = computers.every(computer => {
//     return computer.ram > 16;
// });

// const comp = computers.some(computer => {
//     return computer.ram > 16;
// });


// console.log(comp);

// var names = [
//     'Alexandria',
//     'Matthew',
//     'Joe'
// ];

// // const namesOutput = names.every(name => {
// //     return name.length > 4;
// // });

// const namesOutput = names.some(name => {
//     return name.length > 4;
// });

// console.log(namesOutput);

function Field(value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
};

var username = new Field('2cool');
var password = new Field('my_password');
var birthdate = new Field('10/10/2010');

console.log(username.validate());

var fields = [username, password, birthdate];

var formIsValid = fields.every(field => {
    return field.validate();
});

console.log(formIsValid);

if(formIsValid) {
    // allow user to submit
} else {
    // show error message
}
