export const FUNCTION_AND_BLOCK_SCOPES = [
  {code: `
  function myFunc() {  
  var name = 'Luke'
  console.log(name); // 'Luke'
}

myFunc();

console.log(name); // name is not defined  
  `, explanation: `
  => the variable declared with var inside the function.
  => var variable creates a function scope
  => name is not reachable from the outside of the function.
  `},
  {code: `
if(true) {  
  var name = 'Luke'
}

console.log(name); // 'Luke'  
  `, explanation: `
  => the variable declared with var inside the the if statements(block). "var" variable creates function scoping.
  => name is reachable from the outside of the the if statements. (Because they are in the same block)
  `},
  {code: `
function myFunc() {  
  let name = 'Luke'
  console.log(name); // 'Luke'
}

myFunc();

console.log(name); // name is not defined  
  `, explanation: `
  => the variable declared with let inside the the function. "let" variable creates block scoping.
  => name is not reachable from the outside of the the function. Because they are not in the same block.
  `},
  {code: `
if(true) {  
  let name = 'Luke'
}

console.log(name); // name is not defined  
  `, explanation: `
  => the variable declared with let inside the the if statements. "let" variable creates block scoping.
  => name is not reachable from the outside of the the if statements. Because they are not in the same block.
  `},
  {code: `
var name = 'Luke';

const func = () => {  
  var name = 'Phil';
  console.log(name); // 'Phil'
}

func();

console.log(name); // 'Luke'  
  `, explanation: `
  => the variable declared with var inside the the function. "var" variable creates function scoping.
  => name in the outer scope keeps the initial declaration value ‘Luke’ even after func(containing an equally named local variable) has been executed.
  `},
  {code: `
var name = 'Luke';

if (true) {  
  var name = 'Phil';
  console.log(name); // 'Phil'
}

console.log(name); // 'Phil'  
  `, explanation: `
  => the variable declared with var inside the the if statements.
  => both variables are in the same scope, resulting in ‘Phil’ overriding the first variable declaration.
  `},
  {code: `
let name = 'Luke';

const func = () => {  
  let name = 'Phil';
  console.log(name); // 'Phil'
}

func();

console.log(name); // 'Luke'  
  `, explanation: `
  => the variable declared with let inside the the function. 'let' variable creates block scoping.
  => When we try to access the name variable from outside of the function. It will return initial value 'Luke'.
  => the variables outside of the block will not be changed by block scope.
  `},
  {code: `
let name = 'Luke';

if (true) {  
  let name = 'Phil';
  console.log(name); // 'Phil'
}

console.log(name); // 'Luke'  
  `, explanation: `
  => the variable declared with let inside the the if statements. 'let' variable creates block scoping.
  => When we try to access the name variable from outside of the function. It will return initial value 'Luke'.
  => the variables outside of the block will not be changed by block scope.
  `},
  {code: `
for (var i = 0; i < 3; i++) {  
  console.log('inside of the function', i); // 0 , 2 
}
console.log(i); // 3
  `, explanation: `
  => the variable declared with var inside the the loop.
  => Loop is not a scope when using var.
  => Instead of creating a local variable for each increment. It'll end up printing the final value for the variable.
  `},
  {code: `
function A() {
var printsToBeExecuted = [];

for (var i = 0; i < 3; i++) {  
   function B() {
    printsToBeExecuted.push(i)
   }
}
   B();
   return printsToBeExecuted;
}
  `, explanation: `
  => the variable declared with var inside the the loop.
  => Loop is not a scope when using var.
  => Instead of creating a local variable for each increment. It'll end up printing the final value for the variable for all the functions.
  => Output array is [3,3,3]
  `},
  {code: `
var printsToBeExecuted = [];

for (var i = 0; i < 3; i++) {  
  printsToBeExecuted.push(
    ((ii) => () => console.log(ii))(i));
}

printsToBeExecuted.forEach(f => f());  
// Output: 0, 1, 2
  `, explanation: `
  => In order to get expected results from the array like 0, 1, 2. We need to wrap the function within another function.Then execute it immediately.(IIFE)
  => the variable declared with var inside the the loop.
  => Loop is not a scope when using var.
  => 
  `},
  {code: `
function saySomething() {
    var greeting = "Hello";
    {
        greeting = "Howdy";  // error comes from here
        let greeting = "Hi";
        console.log(greeting);
    }
}
  `, explanation: `
=> It demonstrates that JS's scope is determined at compile time
=> The noted ReferenceError occurs from the line with the statement greeting = "Howdy"
=> What's happening is that the greeting variable for that statement belongs to the declaration on the next line,
   let greeting = "Hi", rather than to the previous var greeting = "Hello" statement.
=> The only way the JS engine could know, at the line where the error is thrown, 
   that the next statement would declare a block-scoped variable of the same name (greeting)
   is if the JS engine had already processed this code in an earlier pass, and already set up 
   all the scopes and their variable associations. This processing of scopes and declarations 
   can only accurately be accomplished by parsing the program before execution.
  `},
  {code: `
Example: Compiled vs Interpreted
console.log("Howdy");

saySomething("Hello","Hi");
// Uncaught SyntaxError: Duplicate parameter name not
// allowed in this context

function saySomething(greeting,greeting) {
    "use strict";
    console.log(greeting);
}
  `, explanation: `
=> The "Howdy" message is not printed, despite being a well-formed statement.
=> It throws an error because of duplicate parameters.
=> How does the JS engine know that the greeting parameter has been duplicated? 
=> How does it know that the saySomething(..) function is even in strict-mode while processing the parameter list (the "use strict" pragma appears only later, in the function body)?
=> The only reasonable explanation is that the code must first be fully parsed before any execution occurs.
  `}
  ];
