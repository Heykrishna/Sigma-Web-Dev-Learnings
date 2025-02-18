// JavaScript Arrays


// Collection of multiple data types 
// Strings are immutable, but arrays are mutable 


let arr = [1, 2, 3, 4, 5]

arr[0] = 10

console.log(arr, typeof arr)        // [ 10, 2, 3, 4, 5 ] object

console.log(arr)        // [ 10, 2, 3, 4, 5 ]
console.log(arr.length)

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])


console.log(arr.toString())       // 10,2,3,4,5

console.log(arr.join(" and "))      // 10 and 2 and 3 and 4 and 5


///////////////////////////////////////////////////////////////////


a = [1, 2, 3, 4, 5, 6]

console.log(a.pop())      // 6

a.push(100)
a.push("Harry")

console.log(a)      // [ 1, 2, 3, 4, 5, 100, 'Harry' ]




a.shift() // removes the first element

console.log(a)      // [ 2, 3, 4, 5, 100, 'Harry' ]

a.unshift("Jack")

console.log(a)      // [ 'Jack', 2, 3, 4, 5, 100, 'Harry' ]


/////////////////////////////////////////////////////////////////////



delete a[6]

console.log(a)      // [ 'Jack', 2, 3, 4, 5, 100, <1 empty item> ]


//////////////////////////////////////////////////////////////////////


let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [7, 8, 9]


console.log(a1.concat(a2))      // [ 1, 2, 3, 4, 5, 6 ]
console.log(a1.concat(a2,a3))       // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]



///////////////////////////////////////////////////////////////////////


let numbers = [1, 2, 3, 4, 5]

numbers.splice(1, 2)

console.log(numbers)       // [ 1, 4, 5 ]


numbers.splice(1, 2, 222, 333, 444)  

console.log(numbers)        // [ 1, 222, 333, 444 ]


///////////////////////////////////////////////////////////////////////////


// slice() -> Slices out a piece from and array. It creates a new array 


const num = [1, 2, 3, 4]

console.log(num.slice(2))    // [ 3, 4 ]

console.log(num.slice(1, 3))


////////////////////////////////////////////////////////////////////////////////


// reverse() -> Reverse the element in the source array 

console.log(num.reverse())      // [ 4, 3, 2, 1 ]




//////////////////////////////////////////////////








