# What is "this" keyword ?
- The value of "this" is decided based on how the code is being executed.
- When you start having functions, you might have different levels of your program and this represents where you are, what object called the function.
- "This" keyword allows you to reuse functions with different contexts or with different objects.
- Every function, while executing has a reference to its current execution context called "this".
- The first thing we’ll look at is how to tell what the this keyword is referencing.
- The first and most important question you need to ask yourself when you’re trying to answer this question is ”Where is this function being invoked?”.
# Execution Context
- The environment (or scope) in which the line is being executed is known as the execution context.
  The JavaScript runtime maintains a stack of these execution contexts, and the execution context present at the top of this stack
  is the one currently being executed. The object "this" refers to changes every time the execution context is changed.
# Global Context
- In the global context, the "this" references the global object, which is the window object on the web browser or global object on Node.js.
- "this" behavior is consistent whether the strict mode is applied or not.
# Function Context
- Each function invocation defines its own context, therefore, the this behaves differently than you may expect.
- In JavaScript, you can invoke a function in the following ways:
1. Simple Function invocation
- In the non-strict mode, the this references the global object when the function is called as follows:
```
function show() {
console.log(this === window); // true
}
show();
```
- in the strict mode, JavaScript sets the this to undefined.
Note:
- If you want to apply the strict mode to a specific function only, you place it at the top of the function body.
- the strict mode has been available since ECMAScript 5.1. The strict mode applies to both function and inner functions within the function.
Here is an example:
```
function foo() {
"use strict";
console.log(this === undefined); // true

function display() {
console.log(this === undefined); // true
}
bar();
}

foo();
```
2. Method invocation
- When you call a method of an object, JavaScript sets "this" to the object that owns the method.
```
let car = {
brand: 'Honda',
getBrand: function () {
return this.brand;
}
}

console.log(car.getBrand()); // Honda
```
- Since a method is a property of an object which is a value, you can store it in a variable.
```
let brand = car.getBrand;
console.log(brand()); // undefined
```
- You get undefined instead of "Honda" because when you call a method without specifying its object,
- JavaScript sets this to the global object in non-strict mode and undefined in the strict mode.
- To fix this issue, you use the "bind()" method of the "Function.prototype" object.
- The "bind()" method creates a new function whose the this keyword is set to a specified value.
```
let brand = car.getBrand.bind(car);
console.log(brand()); // Honda
```
3. Constructor invocation
- When you use the "new" keyword to create an instance of a function object, you use the function as a "constructor".
```
function Car(brand) {
this.brand = brand;
}

Car.prototype.getBrand = function () {
return this.brand;
}

var car = new Car('Honda');
console.log(car.getBrand());
```
- The expression new Car('Honda') is a constructor invocation of the "Car" function.
- JavaScript creates a new object and sets "this" to the newly created object. This pattern works great with only one potential problem.
- Now, you can invoke the Car() as a function or as a constructor. If you omit the "new" keyword as follows:
```
var bmw = Car('BMW');
console.log(bmw.brand);
// => TypeError: Cannot read property 'brand' of undefined
```
- Since the this value in the "Car()" sets to the global object, "the bmw.brand" returns "undefined."
- To make sure that the "Car()" function is always invoked using constructor invocation,
  you add a check at the beginning of the "Car()" function as follows:
```
function Car(brand) {
if (!(this instanceof Car)) {
throw Error('Must use the new operator to call the function');
}
this.brand = brand;
}
```
This is the es6 solution:
```
function Car(brand) {
if (!new.target) {
throw Error('Must use the new operator to call the function');
}
this.brand = brand;
}
```
4. Indirect invocation
- In JavaScript, functions are first-class citizens. In other words, functions are objects, which are instances of the Function type.
- The Function type has two methods: call() and apply().
- These methods allow you to set the "this" value when calling a function.
For example:
```
function getBrand(prefix) {
console.log(prefix + this.brand);
}

let honda = {
brand: 'Honda'
};
let audi = {
brand: 'Audi'
};

getBrand.call(honda, "It's a ");
getBrand.call(audi, "It's an ");
// Output
// It's a Honda
// It's an Audi
```
- In this example, we called the "getBrand()" function indirectly using the call() method of the getBrand function.
- We passed "honda" and "audi" object as the first argument of the call() method, therefore, we got the corresponding brand in each call.
- The apply() method is similar to the call() method except that its second argument is an array of arguments.
```
getBrand.apply(honda, ["It's a "]); // "It's a Honda"
getBrand.apply(audi, ["It's an "]); // "It's a Audi"
```
# Arrow functions

# “this” Refers to a Global Object ?
- By default, the execution context for an execution is global — which means if a code is being executed as part of a simple function call,
  then this refers to a global object.
Note: since in strict mode the value of "this" in a global-execution context is undefined.
# “this” Refers to a New Instance
- When a function is invoked with the new keyword, then the function is known as a constructor function and returns a new instance.
  In such cases, the value of "this" refers to a newly created instance.
```
function Person(fn, ln) {
this.first_name = fn;
this.last_name = ln;

this.displayName = function() {
console.log(`Name: ${this.first_name} ${this.last_name}`);
}
}

let person = new Person("John", "Reed");
person.displayName();  // Prints Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName();  // Prints Name: Paul Adams
```
In the case of "person.displayName", this refers to a new instance person, and in case of "person2.displayName()",
this refers to "person2" (which is a different instance than Person).
# “this” Refers to an Invoker Object (Parent Object)
- In JavaScript, the property of an object can be a method or a simple value.
  When an object’s method is invoked, then this refers to the object which contains the method being invoked.
```
function foo () {
'use strict';
console.log("Simple function call")
console.log(this === window);
}

let user = {
count: 10,
foo: foo,
foo1: function() {
console.log(this === window);
}
}

user.foo()  // Prints false because now “this” refers to user object instead of global object.
let fun1 = user.foo1;
fun1() // Prints true as this method is invoked as a simple function.
user.foo1()  // Prints false on console as foo1 is invoked as a object’s method
```
- "user.foo()" prints false because now "this" refers to the user object instead of the global object.
- The function definition of "foo1" is the same, but when it’s being called as a simple function call,
  then "this" refers to a global object. And when the same definition is invoked as an object’s method,
  then "this" refers to the parent object.
**** So the value of "this" depends on how a method is being invoked.
# “this” With the Call and Apply Methods
- A function in JavaScript is also a special type of object. Every function has call, bind, and apply methods.
- These methods can be used to set a custom value to "this" in the execution context of the function.
```
function Person(fn, ln) {
this.first_name = fn;
this.last_name = ln;

this.displayName = function() {
console.log(`Name: ${this.first_name} ${this.last_name}`);
}
}

let person = new Person("John", "Reed");
person.displayName(); // Prints Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Prints Name: Paul Adams

person.displayName.call(person2); // Here we are setting value of this to be person2 object
//Prints Name: Paul Adams
```
- The only difference between the "call" and "apply" methods is the way an argument is passed.
- In the case of "apply", the second argument is an array of arguments, whereas in the case of the call method, the arguments are passed individually.
# “this” With the Bind Method
- The "bind" method returns a new method with "this" referring to the first argument passed.
We’re going to use the above example to explain the bind method.
# “this” With the Fat-Arrow Function
- As part of ES6, a new way was introduced to define a function.
```
let displayName = (fn, ln) => {
console.log(Name: ${fn} ${ln});
};
```
- When a fat arrow is used, it doesn’t create a new value for "this".
- "this" keeps on referring to the same object it’s referring to outside of the function.
Let’s look at some more examples to test our knowledge of this.
# Key Takeaways:
- By default, this refers to a global object, which is global in the case of NodeJS and a window object in the case of a browser
- When a method is called as a property of an object, then this refers to the parent object
- When a function is called with the new operator, then this refers to the newly created instance
- When a function is called using the call and apply methods, then this refers to the value passed as the first argument of the call or apply method
