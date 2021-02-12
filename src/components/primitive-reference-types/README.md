# What are the primitve types in javascript
- Number
- Boolean
- Symbol
- String
- Undefined
- Null ???????
Primitive types does not have no methods of its own. All primitive types immutable.
In js everything that is not a primitve type is an object. It means that function and array are also object.
# The differences between primitive type and object
- Primitive types are immutable. Objects value can change but the reference of object is immutable.
- Primitive types are passed by value. Objects are passed by reference.

Example:
let test = 2;
let test2 = test;

test = 10;
test2 => 2;

let test = {car: 'red'};
let test2 = test;

test.car = 'blue';
test2 => {car: 'blue'};

let test1 = {car: 'red'};
let test2 = {car: 'red'};
if (test1 === test2 ) => return false;


# Does Js have types ?
Some may argue that JS is untyped or that it shouldn’t call its type system types.
It doesn’t require you to declare a type when making a variable like in some other strongly typed languages i.e int x = 10 I
( and the JS specs ) would argue that JS does have types.

Js is both dynamically typed and weakly typed.
## Statically typed:
- Js is not statically typed unless you are using flow or typescript.
Statically typed means the type is enforced and won't change easily. All variables must be declared with a type.
 int x = 5;
 string y = 'abc';
## Dynamically Typed:
Dynamically typed languages infer variable types at runtime. This means once your code is run,
the compiler/interpreter will see your variable and its value then decide what type it is.
var a = 1; // int
b = 'test' // string
## Weakly typed:
Weakly typed languages allow types to be inferred s another type.
For example, 1 + '2' // '12' In JS it sees
you’re trying to add a number with a string — an invalid operation —
so it coerces your number into a string and results in the string ‘12’.


## Important Guidelines
- All primitive values are immutable
- Be aware of type coercion
- There is no static typing i.e int num = 5
- The JavaScript engine decides what type it is

## Why is Null an Object?

The documentation lists it as a primitive type, yet its typeof returns ‘object’.
Basically, this is a bug that isn’t fixed because it would break existing code. This bug has been around since the first version of JavaScript.
The bug comes from the typeof function in the JS source — I’ll use some pseudo code to simplify it.

if (is_undefined) {
return 'undefined';
} else if (is_Object) {
   if (is_Function) {
     return 'function';
   }
} else {
   return 'Object';
}
They didn’t check for null.

## Is Nan(Not a number) Primitive type ?
 This is a primitive type just like 1,2.


## A primitive is not an object and has no methods of its own
“You said primitives have no methods but then explain how 'abc'.length works!”
First, do not confuse constructors with primitives — every primitive has a constructor or parent object.
JS knows when you’re trying to access a method on a primitive and behind the scenes,
it will use the constructor to make an object out of your primitive.
Once it runs the method that object is then garbage collected. ( removed from memory )


Strings are in fact primitives as described in the article, not entire objects.
JS knows when you try to access a method on the String object and coerces your primitive into a string object.
When it’s done the temporary object is garbage collected and life continues as usual.

## Where are they stored ?
Primitive types are stocked in the stack which does not hold much more information and not much space. It is very fast.
Reference values are stored in the heap.
Unlike the stack it take a little bit longer to be accessed. but therefore it is able to hold much more information.
This types of memory is perfect for bigger amounts of data.

# Basic Interview Questions ?
- What are the different data types present in javascript?
- Is javascript a statically typed or a dynamically typed language?
- What is NaN property in JavaScript?
- Explain passed by value and passed by reference ?
