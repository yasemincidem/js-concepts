## IIFE and modules
# What is a module?
- A modules is a reusable piece of code that encapsulates implementation details and
exposes a public api that can be easily loaded and used by other code.
# Why do we need modules?
Technically we can write code without modules. But modules allow us to write the code with the following benefits.
- abstract code: to give functionality to specialised libraries so that we don't have to understand the complexity of their actual implementation.
- encapsulate code: to hide the code inside the module if we don't want the code to be changed
- reuse code: to avoid to write the code over and over again.
- manage dependencies: to easily change dependencies without rewriting our code.
# Module patterns in ES5
Unfortunately javascript did not come out with modular system.
Over time the developers come up with new ideas to integrate the modular design in Javascript.
There are two common modular pattern that was used in Javascript. (Immediately Invoked Function Expressions and Revealing Module.)
# What is Immediately Invoked Function Expressions (IIFE) ?
An Immediately Invoked Function Expressions(IIFE) is an anonymous function that is executed when it is declared.
# What is the syntax of IIFE ?
Example:
```
// Function declaration
function(){
console.log('test');
}
// Immediately Invoked Function Declaration
function(){
console.log('test');
}()

// => Uncaught SyntaxError: Unexpected token )
```
In javascript we cannot execute the function declaration immediately when they are declared.
There is one way to invoke function immediately when the function is declared. (Declared function expression instead of function declaration)
```
// Function expression
(function(){
console.log('test');
})

// => returns function(){ console.log('test') }
```
Whenever javascript sees a `function` keyword as the first word in a valid statement,
javascript accepts that a function declaration will going to take place.
So stop this from happening, we are prefixing `!`, `+`, `-`, `~`, void, putting parentheses around the function declaration.
All that first character is doing here is to make the function into an expression instead of a function declaration.
And then we execute function immediately. There are couple of example what IIFE looks like.
```
// They are not common indications for IIFE
!function() {
alert("Hello from IIFE!");
}();
void function() {
alert("Hello from IIFE!");
}();
+function() {
alert("Hello from IIFE!");
}();
~function() {
alert("Hello from IIFE!");
}();
-function() {
alert("Hello from IIFE!");
}();
```
```
// they are common indications for IIFE
// Variation 1
(function() {
alert("I am an IIFE!");
}());

// Variation 2
(function() {
alert("I am an IIFE, too!");
})();
```
# What Immediately Invoked Function Expressions allow us to do ?
- encapsulates the code inside the IIFE so we don't need to understand what the IIFE code does.
- define a variables inside the IIFE so they won't pollute the global scope.
Note: they don't provide a mechanism for dependency management.
# What is revealing module pattern ?
-The revealing module pattern is similar to an IIFE, but we assign the return value to a variable.
```
// Expose module as global variable
var singleton = function(){

// Inner logic
function sayHello(){
console.log('Hello');
}

// Expose API
return {
sayHello: sayHello
}
}()
```
We can now access the module's API through the variable.
```
// Access module functionality
singleton.sayHello();
// => Hello
```
The Revealing Module pattern offers similar benefits as an IIFE, but again does not offer a mechanism for dependency management
# Module Format:
A module format is the syntax we can use to define a module.
Before EcmaScript 6 or ES2015, JavaScript did not have an official syntax to define modules.
Therefore, smart developers came up with various formats to define modules in JavaScript.
Some of the most widely adapted and well known formats are:
- Asynchronous Module Definition (AMD)
- CommonJS
- Universal Module Definition (UMD)
- System.register
- ES6 module format
# Asynchronous Module Definition (AMD):
The AMD format is used in browsers and uses a define function to define modules:
```
//Calling define with a dependency array and a factory function
define(['dep1', 'dep2'], function (dep1, dep2) {

//Define the module value by returning a value.
return function () {};
});
```
# CommonJS format:
The CommonJS format is used in Node.js and uses require and module.exports to define dependencies and modules:
```
var dep1 = require('./dep1');
var dep2 = require('./dep2');

module.exports = function(){
// ...
}
```
# ES6 module format:
As of ES6, JavaScript also supports a native module format.
It uses an export token to export a module's public API:
```
// lib.js

// Export the function
export function sayHello(){
console.log('Hello');
}

// Do not export the function
function somePrivateFunction(){
// ...
}
```
and an import token to import parts that a module exports:
```
import { sayHello } from './lib';

sayHello();
// => Hello
```
# Module loaders:
A module loader interprets and loads a module written in a certain module format.
A module loader runs at runtime:
- you load the module loader in the browser
- you tell the module loader which main app file to load
- the module loader downloads and interprets the main app file
- the module loader downloads files as needed
If you open the network tab in your browser's developer console, you will see that many files are loaded on demand by the module loader.
A few examples of popular module loaders are:
- RequireJS: loader for modules in AMD format
- SystemJS: loader for modules in AMD, CommonJS, UMD or System.register format
# Module bundlers:
Module bundlers are tools frontend developers used to bundle JavaScript modules into a single JavaScript files that can be executed in the browser.
Also a module bundler replaces a module loader.
But, in contrast to a module loader, a module bundler runs at build time:
- you run the module bundler to generate a bundle file at build time (e.g. bundle.js)
- you load the bundle in the browser
If you open the network tab in your browser's developer console, you will see that only 1 file is loaded. No module loader is needed in the browser. All code is included in the bundle.
Examples of popular module bundlers are:
- Browserify: bundler for CommonJS modules
- Webpack: bundler for AMD, CommonJS, ES6 modules
- Parcel
- Rollup
Note: Module bundlers helped us to combine multiple JavaScript modules into 1 JavaScript file.
# Why is module bundle required ?
- It helps you manage the dependency relationship of your code, it will load modules in dependency order for you.
- It helps you to load your assets in dependency order, image asset, css asset, etc.
To illustrate, imagine you are building a web application, which is made up of multiple JavaScript files.
You add JavaScript files into html via script tags:
```
<html>
<script src="/src/foo.js"></script>
<script src="/src/bar.js"></script>
<script src="/src/baz.js"></script>
<script src="/src/qux.js"></script>
<script src="/src/quux.js"></script>
</html>
```
Each file requires a separate http requests, which is 5 round trip requests in order to get your application started.
So it would be better if you can combine all 5 files into 1:
```
<html>
<script src="bundle.js"></script>
</html>
```
# How do we generate the bundle.js ?
Several challenges arise in the process:
- How do we maintain the order of the "files" to be included? (It would be great that it is some sort of dependency order amongst the "files")
- How do we prevent naming conflicts between "files"?
- How do we determine any unused "file" within the bundle?
All of these can be solved if we know the relationship amongst each files, such as:
- Which file is depended on another?
- What are the interface exposed from a file?
- Which exposed interfaces are being used by another?
So, what we need is a declarative method to describe the relationship between files, which led us to the JavaScript Module System.
CommonJS or ES6 Modules provides way for us to specify what files we are dependening on, and which of their interface we are using in our file.
```
// CommonJS
const foo = require('./foo');
module.exports = bar;

// ES Modules
import foo from './foo';
export default bar;
```
With the information gathered from the module system, we link the files together and generate the bundle file through module bundlers.
