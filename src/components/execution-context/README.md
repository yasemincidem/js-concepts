# What is the execution context ?
- The engine creates a Global Execution Context every time you run some Javascript code.
- Simply put, an execution context is an abstract concept of an environment where the Javascript code is evaluated and executed.
  Whenever any code is run in JavaScript, it’s run inside an execution context.
# How does the engine reads that code ?
```
var num = 2;
function pow(num) {
return num * num;
}
```
- Engine: Line one. There’s a variable! Cool. Let’s store it in the Global Memory.
- Engine: Line three. I see a function declaration. Cool. Let’s store that in the Global Memory too!
- Engine: Looks like I’m done.
- The above code will translate in some values stored in the Global Memory: a function declaration and a variable.
# What is the Global Memory ?
- The Javascript engine has a Global Memory too.
- The Global Memory contains global variables and function declarations for later use.
# What it creates when the Javascript engine runs your code ?
1. a Global Execution context
2. a Global Memory (also called Global Scope or Global Variable Environment)
# What is the call stack ?
- Let’s first recap what happens when the Javascript engine runs your code.
It creates:
1. a Global Execution context
2. a Global Memory
# What happens if I call the function pow ?
- The act of calling a function in Javascript makes the engine ask for help.
- And that help comes from a friend of the Javascript engine: the Call Stack.
- It might not sound obvious but the Javascript engine needs to keep track of what’s happening. It relies on the Call Stack for that.
- The Call Stack is like a log of the current execution of the program. In reality it’s a data structure: a stack.
# How does exactly the Call Stack work ?
- Unsurprisingly it has two methods: push and pop.
- Pushing is the act of putting something into the stack.
- That is, when you run a function in Javascript the engine pushes that function into the Call Stack.
- Every function call gets pushed into the Call Stack.
- The first thing that gets pushed is main() (or global()), the main thread of execution of your Javascript program.
- Popping on the other end is the act of removing something from the stack.
- When a function ends executing it gets popped from the Call Stack.
# What is the local execution context ?
- We know that the Javascript engine creates a Global Execution context and a Global Memory.
- Then, when you call a function in your code:
1. the Javascript engine asks for help
2. that help comes from a friend of the Javascript engine: the Call Stack
3. the Call Stack keep tracks of what function is being called in your code
- Yet another thing has to happen when you run a function in Javascript.
- First, the function appears in the Global Execution context.
- Then, another mini-context appears alongside the function:
- that little new box is called Local Execution Context.
- During the execution phase a Local Execution Context gets created for holding up local variables.
- During the execution phase a Local Execution Context gets created, alongside a Local Memory for holding up local variables.
# What happens when we run above code ?
- The Javascript engine creates an Execution Context, a Global Memory, and a Call Stack.
- But once you call a function the engine creates a Local Execution Context which has a Local Memory.

# What is the Global Execution Context ?
- This is the default or base execution context.
- The code that is not inside any function is in the global execution context.
- It performs two things: it creates a global object which is a window object (in the case of browsers) and sets the value of this to equal to the global object.
- There can only be one global execution context in a program.
# What is Local (Functional) Execution Context ?
- Every time a function is invoked, a brand new execution context is created for that function.
- Each function has its own execution context, but it’s created when the function is invoked or called.
- There can be any number of function execution contexts.
- Whenever a new execution context is created, it goes through a series of steps in a defined order which I will discuss later in this article.
# What is the Execution(Call) Stack ?
- Execution stack, also known as “calling stack” in other programming languages, is a stack with a LIFO (Last in, First out) structure,
  which is used to store all the execution context created during the code execution.
- When the JavaScript engine first encounters your script, it creates a global execution context and pushes it to the current execution stack
- Whenever the engine finds a function invocation, it creates a new execution context for that function and pushes it to the top of the stack.
- The engine executes the function whose execution context is at the top of the stack.
  When this function completes, its execution stack is popped off from the stack, and the control reaches to the context below it in the current stack.
# Code example:
```
let a = 'Hello World!';
function first() {
console.log('Inside first function');
second();
console.log('Again inside first function');
}
function second() {
console.log('Inside second function');
}
first();
console.log('Inside Global Execution Context');
```
