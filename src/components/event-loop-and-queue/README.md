# The Event loop mechanism in Javascript
## How is JavaScript asynchronous and single-threaded ?
The short answer is that JavaScript language is single-threaded and the asynchronous behaviour
is not part of the JavaScript language itself, rather they are built on top of the core JavaScript language in the run time environment.
## What is the call stack ?
- JavaScript has a single call stack in which it keeps track of what function we’re currently executin and what function is to be executed after that.
- But first what’s a stack? A stack is an array-like data structure but with some limitations, you can only add items to the back and only remove the last item.
- Another example is a pile of plates you put them on top of each other and at any time you can only remove the top one.
- When you’re about to execute a function it is added on the call stack.
- Then if that function calls another function, the other function will be on top of the first one in the call stack.
- When you get an error in the console you get a long message that shows you the path of execution,this is what the stack looked in that exact moment.
- But what if we make a request or put a timeout on something?
  In theory that should freeze the entire browser until it is executed so the call stack can continue?
  In practice however, you know that this doesn’t happen, because of the Event Table and Event Queue.
## What is The Event Table ?
- Every time you call a setTimeout function or you do some async operation — it is added to the Event Table
- This is a data structure which knows that a certain function should be triggered after a certain event
- Once that event occurs (timeout, click, mouse move) it sends a notice.
- Keep in mind that the Event Table does not execute functions and does not add them to the call stack on it’s own
- It’s sole purpose is to keep track of events and send them to the Event Queue.
## What is the Event Queue ?
- The Event Queue is a data structure similar to the stack, again you add items to the back but can only remove them from the front.
- It kind of stores the correct order in which the functions should be executed.
- It receives the function calls from the Event Table, but it needs to somehow send them to the Call Stack? This is where the Event Loop comes in.
## What is the Event Loop ?
- This is a constantly running process that checks if the call stack is empty
- Imagine it like a clock and every time it ticks it looks at the Call Stack and if it is empty it looks into the Event Queue.
- If there is something in the event queue that is waiting, it is moved to the call stack. If not, then nothing happens.
# How this code block works ?
```
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
console.log('foo')
setTimeout(bar, 0)
baz()
}

foo()
```
This code prints:
```
foo
baz
bar
```
Here is the execution order for all the functions in our program:
```
- Iteration 1 => foo()
- Iteration 2 => console.log('foo');
- Iteration 3 => setTimeout()
- Iteration 4 => baz()
- Iteration 5 => console.log('baz')
- Iteration 6 => bar()
- Iteration 7 => console.log('bar')`
```
# Why is this happening (The message queue)?
- When setTimeout() is called, the Browser or Node.js start the timer.
- Once the timer expires, in this case immediately as we put 0 as the timeout, the callback function is put in the Message Queue.
- The Message Queue is also where user-initiated events like click or keyboard events, or
  fetch responses are queued before your code has the opportunity to react to them. Or also DOM events like onLoad.
- The event loop gives priority to the call stack, and it first processes everything it finds in the call stack,
  and once there’s nothing in there, it goes to pick up things in the message queue.
- We don’t have to wait for functions like setTimeout, fetch or other things to do their own work,
  because they are provided by the browser, and they live on their own threads.
  For example, if you set the setTimeout timeout to 2 seconds, you don’t have to wait 2 seconds - the wait happens elsewhere.
# What is ES6 Job Queue ?
- ECMAScript 2015 introduced the concept of the Job Queue, which is used by Promises (also introduced in ES6/ES2015).
  It’s a way to execute the result of an async function as soon as possible, rather than being put at the end of the call stack.
- Promises that resolve before the current function ends will be executed right after the current function.
- I find nice the analogy of a rollercoaster ride at an amusement park: the message queue puts you at the back of the queue,
  behind all the other people, where you will have to wait for your turn, while the job queue is the fastpass ticket
  that lets you take another ride right after you finished the previous one.
```
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
console.log('foo')
setTimeout(bar, 0)
new Promise((resolve, reject) =>
resolve('should be right after baz, before bar')
).then(resolve => console.log(resolve))
baz()
}

foo()
```
This prints:
```
foo
baz
should be right after baz, before bar
bar
```
That’s a big difference between Promises (and Async/await, which is built on promises) and
plain old asynchronous functions through setTimeout() or other platform APIs.
