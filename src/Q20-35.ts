// Q.20
const items: string[] = ["Pakistan", "Switzerland", "England", "Turkey"];

// Q.21
const itemObj = {
    country: "Pakistan",
    city: "Karachi",
    tour: "Turkey"
}

// Q.22
// console.log(items[10]);

// Q.23
let car = "Supra"
console.log(`${car == "Supra" ? "I predicted true" : "I predicted true"}`)

// Q.24
console.log(`${4 === 4 ? "True" : "False"}`)
console.log(`${4 > 5 ? "True" : "False"}`)
console.log(`${4 < 10 ? "True" : "False"}`)

console.log(`${4 === 4 && 4 > 3 || 4 > 2 ? "True" : "False"}`)
const arr = [2, 4, 5, "danish"];
console.log(`${arr.includes(4) ? "True" : "False"}`)
console.log(`${arr.includes("Mudassir") ? "True" : "False"}`)


// Q.25
console.log("\n")
let alienColor: string = "red"

if(alienColor == "green"){
    console.log("You earned 5 points for shooting")
}

// Q.26
if(alienColor != "green"){
    console.log("You earned 10 points")
}

// Q.27
if(alienColor == "green"){
    console.log("You earned 5 points")
}
else if(alienColor == "yellow"){
    console.log("You earned 10 points")
}
else if(alienColor == "red"){
    console.log("You earned 15 points")
}


// Q.28
console.log("\n")
let age: number = 20;

if(age < 2){
    console.log("You are a baby")
}
else if(age >=2 && age < 4){
    console.log("You are a toddler")
}
else if(age >=4 && age < 13){
    console.log("You are a kid")
}
else if(age >=13 && age < 20){
    console.log("You are a teenager")
}
else if(age >=20 && age < 65){
    console.log("You are an adult")
}
else if(age >= 65){
    console.log("You are an elder")
}

// Q.30, 31
console.log("\n")
const users: string[] = ["admin", "mudassir", "danish"]

users?.map(user => {
    if(user == "admin"){
        console.log(`Hello ${user}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
})


// Q.32
console.log("\n")
const currentUsers: string[] = ["Danish", "Mudassir", "Faizan", "Rooma", "Zeyad"];

const newUsers: string[] = ["Wassaf", "Mudassir", "FAIZAN", "Abdulrehman", "Zain"];

// I created my own logic :) , i didn't copy pasted anything from the internet, thank you :)
for(let i = 0; i < currentUsers.length; i++){
    for(let j = i; j < newUsers.length; j++){
        if(currentUsers[i].toLowerCase() == newUsers[j].toLowerCase()){
            console.log(`${newUsers[j]} is already in use. it is unavailable`)
        }
    }
}


// Q.33
console.log("\n")
const numbers: number[] = [1,2,3,4,5,6,7,8,9];

numbers.map(number => {
    if(number == 1){
        console.log(`${number}st,`)
    }
    else if(number == 2){
        console.log(`${number}nd,`)
    }
    else if(number == 3){
        console.log(`${number}rd,`)
    }
    else{
        console.log(`${number}th,`)
    }
})

// Q.34
console.log("\n")
const pizza: string[] = ["Mexican", "Italian", "Pepperoni"];

pizza.map(item => {
    console.log(`I like ${item} pizza`);
})
console.log("Pizza is my absolute favorite! I can't get enough of its delicious flavors and cheesy goodness. It's pure culinary perfection! Words can't describe how much I adore pizza. It's like a symphony of flavors that dances on my taste buds, leaving me craving for more with every bite. I really love pizza!");