// Number(..) and +(..) do the same thing
// They convert the value to an integer 
alert ("Sum or Concatenate?")

let a = "5"
let b = "64"

let concatenate = a+b
let sum = +a + +b

let x = 1;
let y = 2;

let z = 3 - (x = y + 1);

alert( x ); // 3
alert( z ); // 0

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14

let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3