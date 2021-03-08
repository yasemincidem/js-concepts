# What is closure ?
- Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.
- Closures are exposed functions which can access the scope of their parent even if we call them from the outside.
- Accessing variables outside of the immediate lexical scope creates a closure
- In other words, a closure is formed when a nested function is defined inside of another function, allowing access to the outer functions variables.
- Returning the nested function allows you to maintain access to the local variables, arguments, and inner function declarations of its outer function.
- This encapsulation allows us to hide and preserve the execution context from outside scopes
  while exposing a public interface and thus is subject to further manipulation.
# Modules and encapsulation with closures ?
- Encapsulation is one of the basic principles of programming.
- Those who have studied OOP are familiar with the concept but for those who are not--this is essentially a hiding mechanism
  which allows us to keep some of our data private.
- Often we don’t want to expose all the contents of a function to the global scope,
  we want most of it to remain private and untouchable.
- This is where closures are really handy.
- We can utilise their power to access the parent scope even when they are called outside of it to achieve proper encapsulation.
- We can have many functions and variables inside our parent function and by using a closure we can expose to the world only the functionality that we desire.
- With closures we can define a public API for our function and keep everything else private.
# A simple example of this looks like the following:
```
function foo() {
var localVariable = 'private variable';
return function() {
return localVariable;
}
}

var getLocalVariable = foo();
getLocalVariable() // "private variable"
```
One of the most popular types of closures is what is widely known as the module pattern; it allows you to emulate public, private, and privileged members:
```
var Module = (function() {
var privateProperty = 'foo';

function privateMethod(args) {
// do something
}

return {

publicProperty: '',

publicMethod: function(args) {
// do something
},

privilegedMethod: function(args) {
return privateMethod(args);
}
};
})();
```
Another type of closure is what is called an immediately-invoked function expression (IIFE) which is nothing more than a self-invoked anonymous
function executed in the context of the window:
```
(function(window) {

var foo, bar;

function private() {
// do something
}

window.Module = {

public: function() {
// do something
}
};

})(this);
```
This expression is most useful when attempting to preserve the global namespace as any variables declared within the function body will be local
to the closure but will still live throughout runtime. This is a popular means of encapsulating source code for applications and frameworks,
typically exposing a single global interface in which to interact with.
# It’s important to note that every function in JavaScript has a closure.
