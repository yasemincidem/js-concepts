# What is mutable ?
- Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values.
Note: (You can make a variable name point to a new value, but the previous value is still held in memory. Hence the need for garbage collection.)
# What does immutability really mean here? Because, when I assign a number to a variable and then re-assign it to a different value,
  everything seems to work great. In the example below, a is mutable, right?
```
var a  = 5;
a = 25;
console.log(a) // 25
```
- it is important, not to confuse a primitive itself with a variable assigned a primitive value.
- 5 is a primitive. Whereas the variable "a" which has a primitive value of 5 is not a primitive.
- It's just a variable that supposedly has a primitive value.
- You can in no way change the value of 5.
- It’s always 5 whatever we do with it.
- The fundamental meaning of the value of 5 cannot be changed by you.
```
var animal = 'Cat';
console.log(animal[0]);
animal[0] = 'c';
console.log(animal); // 'Cat'
```
- In the above example, even if we try to modify the string, since its immutable it doesn’t change its value.
- Summing up, Values are immutable. Variables are not. They just hold a reference to their (primitive) values.
# A real-life analogy
- We can easily grasp the concept of a “variable” if we imagine it as a “box” for data, with a uniquely-named sticker on it.
- For instance, the variable message can be imagined as a box labeled "message" with the value "Hello!" in it:
![alt text](variable-assignment.png)
- We can put any value in the box.
- We can also change it as many times as we want:
```
let message;
message = 'Hello!';
message = 'World!'; // value changed
alert(message);
```
![alt text](variable-reassignment.png)
Note: In functional programming, once the value is stored “in the box”, it’s there forever.
If we need to store something else, the language forces us to create a new box (declare a new variable). We can’t reuse the old one.
Note: Modern JavaScript minifiers and browsers optimize code well enough, so it won’t create performance issues.
Using different variables for different values can even help the engine optimize your code.
