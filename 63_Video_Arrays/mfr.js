

let arr = [1, 7, 5, 13, 11];

let newArr = []

for (let element of arr) {
    newArr.push(element * element);
}


console.log(newArr);




// let arr = [1, 7, 5, 13, 11];

// let newArr = [];

// // Using a for loop to iterate over the array and square each element
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * arr[i]);
// }

// console.log(newArr); // Output the new array with squared elements


////////////////////////////////////////////////////////////////////////////////



// Arrow function

let arr2 = [1, 7, 5, 13, 11];
let newArr2 = arr2.map((element) => {
    return element * element;
});
console.log(newArr2);



// Arrow functions are a concise way to write functions in JavaScript
// Basic syntax: (parameters) => { statements }

// Example 1: Simple arrow function with one parameter
let square = x => x * x;
console.log(square(5)); // Output: 25

// Example 2: Arrow function with multiple parameters
let add = (a, b) => a + b;
console.log(add(3, 4)); // Output: 7

// Example 3: Arrow function with function body
let greet = name => {
    let greeting = "Hello ";
    return greeting + name;
};
console.log(greet("John")); // Output: Hello John

// In the map example above:
// element => element * element
// is a short way of writing:
// function(element) {
//     return element * element;
// }
