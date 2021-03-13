# Classes and Factories
- JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called [[Prototype]]
  that can be used to extend object properties and methods
- Until Es6 introduced the classes to javascript, industrious developers used constructor functions to mimic an object-oriented design pattern in JavaScript.
- Classes in JavaScript do not actually offer additional functionality, and are often described as providing “syntactical sugar”
  over prototypes and inheritance in that they offer a cleaner and more elegant syntax
# Classes are functions
- A JavaScript class is a type of function.
- Classes are declared with the class keyword.
- We will use function expression syntax to initialize a function and class expression syntax to initialize a class.
```
// Initializing a function with a function expression
const x = function() {}
```
```
// Initializing a class with a class expression
const y = class {}
```
# Constructor Functions:
- Since Javascript is a functional programming language where everything is just a function,
  in order to have a class like (creating a blueprint for the objects to be created) functionality in javascript,
  constructor functions are used, lets see how constructor functions work:
```
function Vehicle(make, model, color) {
this.make = make,
this.model = model,
this.color = color,
this.getName = function () {
return this.make + " " + this.model;
}
}
```
