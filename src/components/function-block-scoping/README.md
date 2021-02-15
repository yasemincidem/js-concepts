# What is a function ?
- A function is a subprogram designed to perform a particular task.
- Functions are executed when they are called. This is known as invoking a function.
- Values can be passed into functions and used within the function.
- Functions always return a value. In JavaScript, if no return value is specified, the function will return undefined.
- Functions are objects.
# Define a function
1. Function Declaration:
- It defines a named function.
- To create a function declaration you use the function keyword followed by the name of the function.
- When using function declarations, the function definition is hoisted, thus allowing the function to be used before it is defined.
```
function name(parameters){
statements
}
```
2. Function Expression:
- It defines a named or anonymous function. (An anonymous function is a function that has no name)
- Function Expressions are not hoisted, and therefore cannot be used before they are defined
```
let name = function(parameters){
statements
}
```
3. Arrow Function Expression:
- It is a shorter syntax for writing function expressions.
- Arrow functions do not create their own this value.
```
let name = (parameters) => {
statements
}
```
# Parameters vs. Arguments
- Parameters are used when defining a function, they are the names created in the function definition.
- Arguments are the values the function receives from each parameter when the function is executed (invoked).

```
const param1 = true;
const param2 = false;
function twoParams(param1, param2){
console.log(param1, param2);
}
Arguments: true, false;
Parameters: param1, param2
```
# Scope:
There 2 scope in javascript. Function and Block scope.
1. Function Scope(var):
- A variable being declared using var will be function scoped. (other types of blocks — like if-statements, loops etc — will not be considered as a scope.)
- It will exist within the scope of the function it’s declared inside of or if not created inside a function, they are ‘globally scoped.’
```
function myFunc() {
var name = 'Luke'
console.log(name); // 'Luke'
}

myFunc();

console.log(name); // name is not defined
```
2. Block Scope(let and const):
- In ES6, let and const were introduced as alternative ways of declaring variables — both being blocked scoped.
- In block scope, any block will be a scope.(like function, if statements, loops).
Note: A block is a set of opening and closing curly brackets.
```
function myFunc() {
let name = 'Luke'
console.log(name); // 'Luke'
}

myFunc();

console.log(name); // name is not defined
```
# The difference between const and let ?
- `Const` is exactly like `let`, but defines a constant reference for a variable.
- We can't change the value of constant reference
- If we can put a primitive value in a constant, that value will be protected from getting changed
- If the constant is an object, we can still change the properties of that object. (Note: We can't reassign new object to a constant object)
