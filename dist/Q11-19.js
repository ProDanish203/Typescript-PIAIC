"use strict";
// Q.11
const names = ["Faizan", "Mudassir", "Rooma", "Zeyad"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// Q.12
console.log("Hello " + names[0]);
console.log("Hello " + names[1]);
console.log("Hello " + names[2]);
console.log("Hello " + names[3]);
// Q.13
const bikes = ["Yamaha R1", "Ybr 125", "Suzuki 150"];
console.log(`I would like to own ${bikes[0]}`);
console.log(`I would like to own ${bikes[1]}`);
console.log(`I would like to own ${bikes[2]}`);
// Q.14
const guests = ["Faizan", "Mudassir", "Rooma"];
guests.map(name => console.log(`Hello ${name}. you are invited tomorrow for dinner`));
console.log("\n");
// Q.15
console.log(`\n${guests[0]} can't make it for the dinner`);
console.log("Updating the invitations list: \n");
guests[0] = "Zeyad";
guests.map(name => console.log(`Hello ${name}. you are invited tomorrow for dinner`));
console.log("\n");
// Q.16
guests.push("Rafay", "Hammad", "Hafsa");
console.log("\nWe just found a bigger table so: \n");
guests[0] = "Zeyad";
guests.map(name => console.log(`Hello ${name}. you are invited tomorrow for dinner`));
// Q.18
console.log(`\nSorry ${guests[2]}. we cant invite you tomorrow for dinner`);
console.log(`Sorry ${guests[3]}. we cant invite you tomorrow for dinner`);
console.log(`Sorry ${guests[4]}. we cant invite you tomorrow for dinner`);
console.log(`Sorry ${guests[5]}. we cant invite you tomorrow for dinner\n`);
guests.splice(2, 5);
guests.sort();
guests.map(name => console.log(`Hello ${name}. you are invited tomorrow for dinner`));
// Q.19
console.log(`\nNumber of guests: ${guests.length}\n`);
