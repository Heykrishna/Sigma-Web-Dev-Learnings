// JavaScript Conditionals: if, else if, else ladder


console.log("Hello I am conditional statement")

let age = 5
let grace = 2

age += grace 
console.log(age)

console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)



if(age > 18 ){
    console.log("You can drive")
}

else if(age == 0){
    console.log("Are you kidding")
}

else if(age == 1){
    console.log("Are you kidding again")
}

else {
    console.log("You cannot drive")
}


/////////////////////////////////////////////////////////////////////////

a = 6
b = 7

console.log(a != b)

console.log(a !=b && b != a)        // logical and 
console.log(a !=b || b != a)        // logical or 


///////////////////////////////////////////////////////////////////////////


// ternary operator

a = 6
b = 8

console.log(c = a > b ?  ( a - b ) : ( b - a ) )

