import {question} from "readline-sync";

const serectNumber: number = Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
console.log("So bi ma:", serectNumber);
let number: number;
number = Number(question("Hay doan so lan 1:"));

if (number == serectNumber ) {
    console.log("100 diem");
} else {
    if (number > serectNumber) {
        console.log("So cua ban lon qua");
    } else {
        console.log("So cua ban nho qua");
    };

    let number2 = Number(question("Hay doan so lan 2:"));

    if (number2 == serectNumber) {
        console.log("50 diem");
    } else {
        if (number2 > serectNumber) {
            console.log("So cua ban lon qua");
        } else {
            console.log("So cua ban nho qua");
        };

        let number3 = Number(question("Hay doan so lan 3:"));
    
        if (number3 == serectNumber) {
            console.log("30 diem");
        } else {
            console.log("Game over");
        }
    }
}