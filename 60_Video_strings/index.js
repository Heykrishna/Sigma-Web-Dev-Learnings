// JavaScript Strings

// Strings are immutable 
// We are always creating a new string 



console.log("This is strings tuturial")

let a = "Harry"


console.log(a)

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])


console.log(a.length)

/////////////////////////////////////////////////////


let real_name = "Harry"
let friend = "Rohan"

console.log("His name is " + real_name + " and his friend name is " + friend)

console.log(`His name is ${real_name} and his friend name is ${friend}`)    // template literals - developers ki life ko easy krne ke liye 


// Escape sequences in JavaScript are used to represent special characters within strings. They allow you to include characters that are otherwise difficult to type directly into the code, such as newline characters, tab characters, or quotation marks

let b = "Shivam"

console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1, 4))      // hiv
console.log(b.slice(1))     // hivam 


console.log(b.replace("Sh", "77"))


console.log(b.concat(a, "Raj", "Rahul", "Priya"))


///////////////////////////////////////////////////////////



let name = " Harry "

let newName = name.trim()     // this will remove white spaces 

console.log(newName)