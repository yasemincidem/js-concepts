export const IIFE_AND_MODULES = [
  {code: `
!function() {
    console.log("Hello from IIFE!");
}();
// Shows the alert "Hello from IIFE!"`, explanation: `
- we are prefixing “!” in-front of the function keyword on line 1
- it basically enforces JavaScript to treat whatever that’s coming after “!” as an expression.
- we execute that function expression immediately through parenthesis "()"
- Output: Hello from IIFE!
`} ,
  {code: `
void function() {
    console.log("Hello from IIFE!");
}();`, explanation: `
- we are putting “void” in-front of the function keyword on line 1
- it basically enforces JavaScript to treat whatever that’s coming after “!” as an expression.
- we execute that function expression immediately through parenthesis "()"
- Output: Hello from IIFE!
`},
  {code: `
+function() {
    console.log("Hello from IIFE!");
}();`, explanation: `
- we are putting “+” in-front of the function keyword on line 1 (All of the unary operators('+', '-') and '~' can be used to turn function declartion into expression)
- it basically enforces JavaScript to treat whatever that’s coming after “!” as an expression.
- we execute that function expression immediately through parenthesis "()"
- Output: Hello from IIFE!
`},
  {code: `
(function() {
    console.log("I am an IIFE!");
}());`, explanation: `
- we are putting parentheses "()" in-front of the function keyword on line 1. (This is an one of the classical IIFE style)
- it basically enforces JavaScript to treat whatever that’s coming after “!” as an expression.
- we execute that function expression immediately through parenthesis "()"
- Output: I am an IIFE!
`},
  {code: `
(function() {
    alert("I am an IIFE, too!");
})();`, explanation: `
- we are putting parentheses "()" in-front of the function keyword on line 1. (This is an one of the classical IIFE style)
- it basically enforces JavaScript to treat whatever that’s coming after “!” as an expression.
- we execute that function expression immediately through parenthesis "()"
- Output: I am an IIFE, too!
`},
  {code: `
(function($, global, document) {
    // use $ for jQuery, global for window
}(jQuery, window, document));`, explanation: `
- we are passing jQuery, window, and document as arguments to the IIFE on line 3.
- The code inside the IIFE can refer to them as $, global, document respectively.
- IIFE provides couple of advantages here.
1. JavaScript always does scope lookups from the current function’s scope and keeps searching in higher scopes until it finds an identifier.
   When we pass document on line 3, that’s the only time when we are doing a scope lookup beyond local scope for the document. 
   Any references in the IIFE to document will never need to be looked up beyond the local scope of the IIFE
2. This will provide the performance gain by this may not be huge based on how trivial or complex the IIFE code is, but still it’s a useful trick to know.
3. Also, JavaScript minifiers can safely minify the parameter names declared in a function. 
   If we did not pass these as parameters, minifiers don’t minify direct references to 
   document or jQuery as they are outside the scope of this function.
`},
  {code: `
var Sequence = (function sequenceIIFE() {
    
    // Private variable to store current counter value.
    var current = 0;
    
    // Object that's returned from the IIFE.
    return {
    };
    
}());

console.log(typeof Sequence); //  "object"`, explanation: `
- this is a classical module pattern in js
- we have an IIFE that returns an object. See line 7 and 8.
- We also have a local variable in the IIFE named current.
- The return value of the IIFE, which is an object in this example is assigned to the Sequence variable.
- Line 12 properly logs “object” since we are returning an object from the IIFE.
`},
  {code: `
var Sequence = (function sequenceIIFE() {
    
    // Private variable to store current counter value.
    var current = 0;
    
    // Object that's returned from the IIFE.
    return {
        getCurrentValue: function() {
            return current;
        },
        
        getNextValue: function() {
            current = current + 1;
            return current;
        }
    };
    
}());

console.log(Sequence.getNextValue()); // 1
console.log(Sequence.getNextValue()); // 2
console.log(Sequence.getCurrentValue()); // 2`, explanation: `
- we add two functions on the object that we return from the IIFE.
- add getCurrentValue function that returns the value in current variable
- add getNextValue function that increments the value in current by 1 and then returns the value in current.
- since "current" variable is private to the IIFE, no one but the functions that have access to it through closure can modify or access the current variable.
`},
  {code: `
// myModule.js

let counter = 0;

export function increment() {
    counter++;
}    

// logic.js

import {increment} from 'myModule.js';

increment();`, explanation: `
- "myModule.js" modules is created with ES6
- In order to access the increment function, importing it in an another module named "logic.js"
`},
  {code: `
//Calling define with a dependency array and a factory function
define(['dep1', 'dep2'], function (dep1, dep2) {

    //Define the module value by returning a value.
    return function () {};
});`, explanation: `
- This is an Asynchronous Module Definition (AMD) module format.
- In order to define modules, using "define" function
`},
  {code: `
var dep1 = require('./dep1');  
var dep2 = require('./dep2');

module.exports = function(){  
  // ...
}`, explanation: `
- This is a CommonJS module format.
- The CommonJS format is used in Node.js and uses require and module.exports to define dependencies and modules.
`},
  {code: `
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
      define(['b'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('b'));
  } else {
    // Browser globals (root is window)
    root.returnExports = factory(root.b);
  }
}(this, function (b) {
  //use b in some fashion.

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return {};
}));`, explanation: `
- This is a UMD format.
- The UMD format can be used both in the browser and in Node.js.
`},
  {code: `
// lib.js

// Export the function
export function sayHello(){  
  console.log('Hello');
}

// Do not export the function
function somePrivateFunction(){  
  // ...
}`, explanation: `
- This is a ES6 format(As of ES6, JavaScript also supports a native module format)
- It uses an "export" token to export a module's public API
- "import" token to import parts that a module exports
`}
]
