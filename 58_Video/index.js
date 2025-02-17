// Functions and arrow function 



// console.log("Hey Harry you are nice")
// console.log("Hey Harry you are good")
// console.log("Hey Harry your tshirt is nice")



function nice(name) {   
    console.log("Hey " + name + " you are nice")
    console.log("Hey " + name + " you are good")
    console.log("Hey " + name + " your tshirt is nice")
}


nice("Harry")
nice("Rohan")


///////////////////////////////////////////////////////////////////////////////////////

function sum1(a, b){
    console.log(a + b)
}

sum1(3, 5)

/////////////////////////////////////////////////////////////////////////////////////

function sum(a, b, c = 3){        // default value / parameter
    return a + b;
}

result = sum(3, 5)
result1 = sum(5, 23)
result2 = sum(6, 73)

console.log("The sum of a and b is", result)
console.log("The sum of a and b is", result1)
console.log("The sum of a and b is", result2)


///////////////////////////////////////////////////////////////////////////////////////

// Arrow function 

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(21)
func1(34)
func1(84)



