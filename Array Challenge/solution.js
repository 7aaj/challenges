/*
Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.reverse().slice(my.indexOf("Osama"))); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(zero - counter, my.indexOf(""))); // ["Elham", "Mazero"]

console.log(my[counter].slice(my.indexOf("") - my.indexOf(""), -my.indexOf("") - my.indexOf("")) +
    my[counter - my.indexOf("")].slice(-my.indexOf("") + -my.indexOf(""))); // "Elzero"

console.log(my[my.indexOf("Mazero")].slice(my.indexOf("Mazero"), my.indexOf("")) +
    my[my.indexOf("Mazero")].slice(my.indexOf("Ahmed")).toUpperCase()); // "rO"