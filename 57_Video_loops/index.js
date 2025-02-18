console.log("I am a tutorial on loops")

let a = 1 


// consol.log(a)
// consol.log(a + 1 )
// consol.log(a + 2)


// for loop 

for (let i = 0; i < 100; i++) {
    console.log(a + i)  
}

//////////////////////////////////////////////////////////////////////

// for in loop 

let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodewithHarry AI"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

for (const c of "Harry") {
    console.log(c)
}

///////////////////////////////////////////////////////////////////////

let i = 0

while(i < 6){
    console.log(i);
    i++;
}


//////////////////////////////////////////////////////////////////////

// do while 

let k = 10
do {
    console.log(k);
    i++;
} while (k < 6);