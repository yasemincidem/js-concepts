export const CLOSURES = [{
  code: `
 1. function createCounter() {
 2:   let counter = 0
 3:   const myFunction = function() {
 4:     counter = counter + 1
 5:     return counter
 6:   }
 7:   return myFunction
 8: }
 9: const increment = createCounter()
10: const c1 = increment()
11: const c2 = increment()
12: const c3 = increment()
13: console.log('example increment', c1, c2, c3)
}]`,
  explanation: `
- Lines 1–8. We create a new variable createCounter in the global execution context and it gets assigned function definition.
- Line 9. We declare a new variable named increment in the global execution context.
- Line 9 again. We need call the createCounter function and assign its returned value to the increment variable.
- Lines 1–8. Calling the function. Creating new local execution context.
- Line 2. Within the local execution context, declare a new variable named counter. Number 0 is assigned to counter.
- Line 3–6. Declaring new variable named myFunction. The variable is declared in the local execution context. 
  The content of the variable is yet another function definition. Now we also create a closure and include it as part of the function definition.
  The closure contains the variables that are in scope, in this case the variable counter (with the value of 0).
- Line 7. Returning the content of the myFunction variable. Local execution context is deleted. myFunction and counter no longer exist.
  Control is returned to the calling context. So we are returning the function definition and its closure, the backpack with the variables 
  that were in scope when it was created.
- Line 9. In the calling context, the global execution context, the value returned by createCounter is assigned to increment. 
  The variable increment now contains a function definition (and closure). The function definition that was returned by createCounter. 
  It is no longer labeled myFunction, but it is the same definition. Within the global context, it is called increment.
- Line 10. Declare a new variable (c1).
- Line 10 (continued). Look up the variable increment, it’s a function, call it. It contains the function definition returned from earlier,
  as defined in lines 4–5. (and it also has a backpack with variables)
- Create a new execution context. There are no parameters. Start execution the function.
- Line 4. counter = counter + 1. We need to look for the variable counter. Before we look in the local or global execution context,
  let’s look in our backpack. Let’s check the closure. Lo and behold, the closure contains a variable named counter, its value is 0.
  After the expression on line 4, its value is set to 1. And it is stored in the backpack again. The closure now contains the variable 
  counter with a value of 1.
- Line 5. We return the content of counter, or the number 1. We destroy the local execution context.
- Back to line 10. The returned value (1) gets assigned to c1.
- Line 11. We repeat steps 10–14. This time, when we look at our closure, we see that the counter variable has a value of 1. 
  It was set in step 12 or line 4 of the program. Its value gets incremented and stored as 2 in the closure of the increment function. 
  And c2 gets assigned 2.
- Line 12. We repeat steps 10–14, c3 gets assigned 3.
- Line 13. We log the content of variables c1, c2 and c3.
Note: So now we understand how this works. The key to remember is that when a function gets declared, it contains a function definition and a closure. 
      The closure is a collection of all the variables in scope at the time of creation of the function.
Note: You may ask, does any function has a closure, even functions created in the global scope? The answer is yes.
      Functions created in the global scope create a closure. But since these functions were created in the global scope, 
      they have access to all the variables in the global scope. And the closure concept is not really relevant.
Note: When a function returns a function, that is when the concept of closures becomes more relevant. 
      The returned function has access to variables that are not in the global scope, but they solely exist in its closure.      
`
}, {
  code: `
// The function sayHi uses an external variable name. When the function runs, which value is it going to use ?  
let name = "John";  
function sayHi() {
  alert("Hi, " + name);
}
name = "Pete";
sayHi(); // what will it show: "John" or "Pete"?
`,
  explanation:`
The answer is: Pete.  
- A function gets outer variables as they are now, it uses the most recent values.
- Old variable values are not saved anywhere. When a function wants a variable, 
  it takes the current value from its own Lexical Environment or the outer one.
  `
}, {
  code: `
// The function makeWorker below makes another function and returns it. That new function can be called from somewhere else.
// Will it have access to the outer variables from its creation place, or the invocation place, or both?  
function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?`,
  explanation: `
The answer is: Pete.
The work() function in the code below gets name from the place of its origin through the outer lexical environment reference:
So, the result is "Pete" here. But if there were no let name in makeWorker(), then the search would go outside and take the
global variable as we can see from the chain above. In that case the result would be "John".
`
},
  {
    code: `
1. function adder(num1) {
2.    // function scope: BLUE(2)
3.    return function addTo(num2){
4.      // function scope: GREEN(3)
5.        return num1 + num2;
6.    };
7. }
8. var add10To = adder(10);
9. var add42To = adder(42);
10. add10To(15);    // 25
11. add42To(9);     // 51`,
    explanation: `
- Lines 1–7. We create a new variable adder in the global execution context and it gets assigned function definition.
- Line 8. We declare a new variable named "add10To" in the global execution context.
- Line 8 again. We need call the "adder" function and assign its returned value to the "add10To" variable.
- Lines 1–7. Calling the function. Creating new local execution context.
- Line 3–6. Declaring new variable named "addTo". The variable is declared in the local execution context. 
  The content of the variable is yet another function definition. Now we also create a closure and include it as part of the function definition.
  The closure contains the arguments that are in scope, in this case the argument "num1" (with the value of 10).- Line 8. 
  We declare a new variable named "add10To" in the global execution context.
- Line 8. Returning the content of the "addTo" variable. Local execution context is deleted. "addTo" and "num1" no longer exist.
  Control is returned to the calling context. So we are returning the function definition and its closure, the backpack with the arguments 
  that were in scope when it was created.
- Line 9. We declare a new variable named "add10To" in the global execution context.
- Line 9 again. We need call the "adder" function and assign its returned value to the "add10To" variable.
- Lines 1–7. Calling the function. Creating new local execution context.
- Line 3–6. Declaring new variable named "addTo". The variable is declared in the local execution context. 
  The content of the variable is yet another function definition. Now we also create a closure and include it as part of the function definition.
  The closure contains the arguments that are in scope, in this case the argument "num1" (with the value of 42).
- Line 9. Returning the content of the "addTo" variable. Local execution context is deleted. "addTo" and "num1" no longer exist.
  Control is returned to the calling context. So we are returning the function definition and its closure, the backpack with the arguments 
  that were in scope when it was created.
- Line 10. Look up the variable "add10To", it’s a function, call it. It contains the function definition returned from earlier,
  as defined in lines 4–5. (and it also has a backpack with arguments)
- Create a new execution context. 
- We declare a new variable named "num2" with a value of 15 in the local execution context. 
- Line 5. num1 + num2. We need to look for the variable "num1". Before we look in the local or global execution context,
  let’s look in our backpack. Let’s check the closure. Lo and behold, the closure contains a variable named "num1", its value is 10.
- Line 5. We destroy the local execution context.
- Back to line 10. The returned value (25)
- Line 11. Look up the variable "add10To", it’s a function, call it. It contains the function definition returned from earlier,
  as defined in lines 4–5. (and it also has a backpack with arguments)
- Create a new execution context. 
- We declare a new variable named "num2" with a value of 9. in the local execution context. 
- Line 5. num1 + num2. We need to look for the variable "num1". Before we look in the local or global execution context,
  let’s look in our backpack. Let’s check the closure. Lo and behold, the closure contains a variable named "num1", its value is 10.
- Line 5. We destroy the local execution context.
- Back to line 11. The returned value (51)
- Destroy global execution context
`},{
  code: `
1.function lookupStudent(studentID) {
2.    // function scope: BLUE(2)
3.    var students = [
4.        { id: 14, name: "Kyle" },
5.        { id: 73, name: "Suzy" },
6.        { id: 112, name: "Frank" },
7.        { id: 6, name: "Sarah" }
8.    ];
9.    return function greetStudent(greeting){
10.        // function scope: GREEN(3)
11.        var student = students.find(
12.            student => student.id == studentID
13.        );
14.        return \`${greeting}, ${student.name}!\`;
15.    };
16. }
17. var chosenStudents = [
18.    lookupStudent(6),
19.    lookupStudent(112)];
20. // accessing the function's name:
21. chosenStudents[0].name;
22. // greetStudent
23. chosenStudents[0]("Hello");
24. // Hello, Sarah!
25. chosenStudents[1]("Howdy");
26. // Howdy, Frank!
`,
    explanation: `
- Lines 1–16. We create a new variable lookupStudent in the global execution context and it gets assigned function definition.
- Line 17. We declare a new variable named "chosenStudents" in the global execution context.
- Create a 
 `}, {
  code: `const myNumber = '3';
(function (callback) {
  console.log(myNumber);
  const myText = 'hello';
  callback();
})(function () {
    console.log(myNumber);
    console.log(myText);
  })`, explanation: ``
  }]
