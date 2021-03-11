# What is pure function ?
- The function always returns the same result if the same arguments are passed in.
  It does not depend on any state, or data, change during a program’s execution.
  It must only depend on its input arguments.
- A pure function will not cause side effects. A side effect is any change in the system that is observable to the outside world.
```
const add = (x, y) => x + y // A pure function
```
- "add" is a pure function because it’s output is solely dependent on the arguments it receives. Therefore, given the same values,
  it will always produce the same output.
```
const magicLetter = '*'
const createMagicPhrase = (phrase) => `${magicLetter}abra${phrase}`
```
- Something about this one is fishy.The "createMagicPhrase" function is dependent on a value which is external to its scope. Therefore, it is not pure!
# What is an impure function ?
```
const fetchLoginToken = externalAPI.getUserToken
```
Is fetchLoginToken a pure function? Does it return the same value every single time?
- Absolutely not! Sometimes it will work, sometimes the server will be down and we will get a 500 error
  and at some point in the future the API may change so that this call is no longer valid!
  So, because the function is non-deterministic, we can safely say that it is an impure function.
# What are side effects ?
- An observable side effect is any interaction with the outside world from within a function.
  That could be anything from changing a variable that exists outside the function, to calling another method from within a function.,
Note: If a pure function calls a pure function this isn’t a side effect and the calling function is still pure.
Side effects include, but are not limited to:
- Making a HTTP request
- Mutating data
- Printing to a screen or console
- DOM Query/Manipulation
- Math.random()
- Getting the current time
Note: Side effects themselves are not bad and are often required. Except, for a function to be declared pure it must not contain any.
      Not all functions need to be, or should be, pure. I will discuss use cases for pure functions in a moment.
# Why should our functions be pure ?
1. Readability:
- Side effects make our code harder to read. Since a non pure function is not deterministic it may return several different values for a given input.
  We end up writing code that needs to account for the different possibilities. Let’s look at another http based example:
```
async function getUserToken(id) {
const token = await getTokenFromServer(id);
return token;
}
```
- This snippet can fail in so many different ways. What if the id passed to the getTokenFromServer was invalid?
  What if the server crashed and returned an error, instead of the expected token?
  There are a lot of contingencies that need to be planned for, and forgetting one (or several!) of them is very easy.
- Additionally, a pure function is easier to read, as it requires no context. It receives all of its needed parameters up front,
  and does not talk / tamper with the state of the application.
2. Testability:
- Because pure functions are deterministic by nature, writing unit tests for them is a lot simpler. Either your function works or it doesn’t.
3. Parallel Code:
- Since pure functions only depend on their input, and will not cause side effects, they are great for scenarios where parallel threads
  run and use shared memory.
4. Modularity and Reusability:
- Think of pure functions as little units of logic. Because they only depend on the input you feed them,
  you can easily reuse functions between different parts of your codebase or different projects altogether.
5. Referential Transparency:
- This one sounds so complicated. When I first read the title I wanted a coffee break! Simply put,
  referential transparency means that a function call could be replaced by its output value, without changing the overall behavior of our program.
  This is mostly useful as a framework of thought when creating pure functions.
# How to convert impure code to pure code ?
```
// This impure code snippet
let a = 4;
let b = 5;
let c = 6;
const updateTwoVars = (a) => {
b++;
c = a * b;
}

updateTwoVars(a);
console.log(b,c); // b = 6, c = 24
```
- Let’s start by reviewing why this function is impure. Our function is impure because it depends on a and b, which are external to its scope.
- In addition, it is also directly mutating (changing) the values of the variables. The quickest way to refactor this function is
1. First ensure that all the variables that the function depends on are passed as arguments
2. Instead of mutating (manipulating) b and c, we can return new values which will reflect the new values.
```
let a = 4;
let b = 5;
let c = 6;
const updateTwoVars = (a, b, c) => [b++, a * b];

const updateRes = updateTwoVars(a,b,c);
b = updateRes[0]
c = updateRes[1]

```
# Why are pure functions are important ?
- Not all functions need to be , or should be, pure. For example, an event handler for a button press that manipulates the DOM
  is not a good candidate for a pure function.
- But, the event handler can call other pure functions which will reduce the number of impure functions in your application.
