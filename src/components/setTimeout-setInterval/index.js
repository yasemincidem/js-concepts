export const TIMERS = [{
  code: `
  function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
`,
  explanation: `
  - passed arguments to the callback through setTimeout
  - Output is " Hello, John"
`},{
  code: `
  function sayHi(phrase, who) {
  console.log( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
`,
  explanation: `
  - passed arguments to the callback through setTimeout
  - Output is " Hello, John"
`},{
  code: `
function displayTime() {
   let date = new Date();
   let time = date.toLocaleTimeString();
   document.getElementById('demo').textContent = time;
}

const createClock = setInterval(displayTime, 1000);
`,
  explanation: `
- creating the effect of a digital clock 
- The "displayTime" function creates a new Date() object, extracts a time string out of it using toLocaleTimeString()
- It then runs the function once per second using setInterval()
- Output: 
  2.35.36
  2.35.37
  2.35.38
  2.35.39
  so on
`},{
  code: `
// nested setTimeout  
let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);

// setInterval
let i = 1;
setInterval(function() {
  func(i++);
}, 100);
`,
  explanation: `
- The difference between nested setTimeout and setInterval is that the fixed delay.
- The nested setTimeout guarantees the fixed delay (100ms).(That’s because a new call is planned at the end of the previous one.)
- The real delay between func calls for setInterval is less than in the code(100ms).
`},{
  code: `
const dog = {
  sound: 'woof',
  bark() {
    console.log(\`Rover says ${this.sound}!\`);
  }
};

dog.bark();
// Outputs: Rover says woof!

setTimeout(dog.bark, 50);
// Outputs: Rover says undefined!
`,
  explanation: `
- Output is undefined because the dog points to the global object(window) inside the setTimeout
- Because of this reason, "dog.bark" shows this output "Rover says undefined!"
- In order to avoid this problem, "bind" method can be used.
- "bind" method creates a new function that, when called, has its this keyword set to the provided value (in our case, the dog object).
- "setTimeout(dog.bark.bind(dog), 50);" => this will return "Rover says woof!"
`},{
  code: `
// Question: In what order will the numbers 1-4 be logged to the console when the code below is executed ?  
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
`,
  explanation: `
- Output is "1 4 3 2".
- Because of the function is IIFE, it will be executed immideatly.  
- "console.log(1)" get pushed into the callstack. 
- "1" will shown in the console.
- "console.log(1)" get popped off the stack.
- "setTimeout(function(){console.log(2)}, 1000);" get pushed into the stack. 
  When stack sees the setTimeout, it will immidieatly moved into the web api container. 
  ("setTimeout(function(){console.log(2)}, 1000);" will get popped off the stack)
  After the given time(1000) is expired, the callback get moved into the queue
- "setTimeout(function(){console.log(3)}, 0);" get pushed into the stack. 
  When stack sees the setTimeout, it will immidieatly moved into the web api container.
  ("setTimeout(function(){console.log(3)}, 0);" will get popped off the stack)
  The callback get moved into the queue because there is no delay in settTimeout function.
- "console.log(4)" get pushed into the callstack. 
- "4" will shown in the console.
- "console.log(4)" get popped off the stack.
- When call stack is empty, the callback from queue get moved into the call stack based on (FIFO)
- Callbacks get popped off the stack respectively.
`},{
  code: `
// Nested timeout
console.log("zero");

//Outer setTimeout
setTimeout(() => {
  console.log("one");
  console.log("two");

//Inner setTimeout
  setTimeout(() => {
    console.log("three");
    console.log("four");
  },2000)

  console.log("five");

},1000)

console.log("six");
`,
  explanation: `
- Output is 
"zero
six
one
two
five
three
four"
- In the above example blocking code is executed first, so we get “zero” and “six” as our output in the beginning
- The outer setTimeout waits for 1s in the event loop. 
- It goes to the event queue and then come out and executes so, now “one” and “two” and "five" are printed. 
- When the runtime env sees the nested setTimeout, it get moved into web api until the given delay time is expired.
- After the delay time is up, nested function callback get pushed into the call stack.
- "three" and "four" are printed
- The nested callback get popped off the stack.
`}
];
