// Faulty calculator 

// This faulty calculator takes two input from the user
// It performs wrong operation as follows 
// It performs wrong operation 10% of the time

// + ---> - 
// * ---> + 
// - ---> /
// / ---> ** 


////////////////////////////////////////////////////////////

let random = Math.random()

let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("Enter operation")


let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if(random > 0.1){
    // Perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

