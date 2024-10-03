// The call stack works based on the last-in-first-out (LIFO) principle.

// JavaScript is a single-threaded programming language. This means that the JavaScript engine 
// has only one call stack. 
// Therefore, it only can do one thing at a time.

function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);

// When the JavaScript engine executes this script, it places the global execution context 
// (denoted by main() or global() function on the call stack.

// The global execution context enters the creation phase and moves to the execution phase.

// The JavaScript engine executes the call to the average(10, 20) function and 
// creates a function execution context for the average() function and pushes it on 
// top of the call stack, to fir average fxn execute hone lgta h 

// abhi istime avg upar h uske neeche mainfxn, ab avg k andar add vala hai to vo add ko apne upar
// krleta h, now its add>avg>mainfxn. ab add fxn execute hoga, vo call stack se hat jayega
// and then avg hat jayega. ab call stack empty hogya