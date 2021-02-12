# Where the call stack is ?
- it's a data structure that uses the Last in first out principle to temporarily store and manage function invocation,
basically where in the program we are.
- If we call a function to execute it, we push something on to the stack and when we return from a function
we pop off the top off the stack. Since the call stack is single, function execution is done one at a time.
- Think of yourself standing on a queue, in a grocery store cash point. You can only be attended to after the person in front of you have been attended to.
## Example:
```
function firstFunction(){
console.log("Hello from firstFunction");
}
function secondFunction(){
firstFunction();
console.log("The end from secondFunction");
}
secondFunction();
```

## This is explanation of how call stack is working

1. When secondFunction() gets executed, an empty stack frame is created. It is the main (anonymous) entry point of the program.
2. secondFunction() then calls firstFunction()which is pushed into the stack.
3. firstFunction() returns and prints “Hello from firstFunction” to the console.
4. firstFunction() is pop off the stack.
5. The execution order then move to secondFunction().
6. secondFunction() returns and print “The end from secondFunction” to the console.
7. secondFunction() is pop off the stack, clearing the memory.


## In summary
The key takeaways from the call stack are:
1. It is single-threaded. Meaning it can only do one thing at a time.
2. Code execution is synchronous.
3. A function invocation creates a stack frame that occupies a temporary memory.
4. It works as a LIFO — Last In, First Out data structure.

We need to understand what the call stack is to lay foundation for the topics regarding Asynchronous operations.





