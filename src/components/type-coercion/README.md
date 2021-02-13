# Javascript Type Coercion
Type coercion is the process of converting value from one type to another (such as string to number, object to boolean and so on).
# Implicit vs Explicit Coercion:
- Type coercion can be explicit or implicit.
- When a developer expresses the intention to convert between types by writing the appropriate code,
like Number(value), it’s called explicit type coercion (or type casting).
- Since JavaScript is a weakly-typed language, values can also be converted between different types automatically,
and it is called implicit type coercion It usually happens when you apply operators to values of different types, like
1 == null, 2/’5', null + new Date(), or it can be triggered by the surrounding context, like with if (value) {…},
where value is coerced to boolean.

# What is the difference between === vs == ?
- One operator that does not trigger implicit type coercion is ===, which is called the strict equality operator.
- The loose equality operator == on the other hand does both comparison and type coercion if needed.,

# Three types of conversion:
The first rule to know is there are only three types of conversion in JavaScript:
- to string
- to boolean
- to number
Secondly, conversion logic for primitives and objects works differently, but both primitives and objects can only be converted in those three ways.

# String conversion:
- To explicitly convert values to a string apply the String() function.
- Implicit coercion is triggered by the binary + operator, when any operand is a string:
```
String(123) // explicit
123 + ''    // implicit
```

# Boolean Conversion:
- To explicitly convert a value to a boolean apply the Boolean() function.
- Implicit conversion happens in logical context, or is triggered by logical operators ( || && !) .
```
Boolean(2)          // explicit
if (2) { ... }      // implicit due to logical context
!!2                 // implicit due to logical operator
2 || 'hello'        // implicit due to logical operator
```
Note: Logical operators such as || and && do boolean conversions internally, but actually return the value of original operands, even if they are not boolean.
```
// returns number 123, instead of returning true
// 'hello' and 123 are still coerced to boolean internally to calculate the expression
let x = 'hello' && 123;   // x === 123
```
## This is the list of falsy values. Any value that is not in the list is converted to true, including object, function, Array, Date, user-defined type, and so on.
```
Boolean('')           // false
Boolean(0)            // false
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false
```
# Numeric Conversion:
- For an explicit conversion just apply the Number() function.
- Implicit conversion is tricky, because it’s triggered in more cases:

```
comparison operators (>, <, <=,>=)
bitwise operators ( | & ^ ~)
arithmetic operators (- + * / % ). Note, that binary+ does not trigger numeric conversion, when any operand is a string.
unary + operator
loose equality operator == (incl. !=).
Note that == does not trigger numeric conversion when both operands are strings.
```
```
Number('123')   // explicit
+'123'          // implicit
123 != '456'    // implicit
4 > '5'         // implicit
5/null          // implicit
true | 0        // implicit
```
## How primitive values are converted to numbers:
- When converting a string to a number, the engine first trims leading and trailing whitespace, \n, \t characters,
returning NaN if the trimmed string does not represent a valid number. If string is empty, it returns 0.
- null and undefined are handled differently: null becomes 0, whereas undefined becomes NaN.
```
Number(null)                   // 0
Number(undefined)              // NaN
Number(true)                   // 1
Number(false)                  // 0
Number(" 12 ")                 // 12
Number("-12.34")               // -12.34
Number("\n")                   // 0
Number(" 12s ")                // NaN
Number(123)                    // 123
```
# Special Rules:
1. When applying == to null or undefined, numeric conversion does not happen. null equals only to null or undefined, and does not equal to anything else.
```
null == 0               // false, null is not converted to 0
null == null            // true
undefined == undefined  // true
null == undefined       // true
```
2. NaN does not equal to anything even itself:
`if (value !== value) { console.log("we're dealing with NaN here") }`

# Type coercion for objects:
- When it comes to objects and engine encounters expression like [1] + [2,3], first it needs to convert an object to a primitive value,
which is then converted to the final type. And still there are only three types of conversion: numeric, string and boolean.
- The simplest case is boolean conversion: any non-primitive value is always coerced to true,
no matter if an object or an array is empty or not.
- Objects are converted to primitives via the internal [[ToPrimitive]] method, which is responsible for both numeric and string conversion.
Both numeric and string conversion make use of two methods of the input object: valueOf and toString .

## Pseudo implementation of ToPrimitive method:
1. If input is already a primitive, do nothing and return it.
2. Call input.toString(), if the result is primitive, return it.

3. Call input.valueOf(), if the result is primitive, return it.

4. If neither input.toString() nor input.valueOf() yields primitive, throw TypeError.

Numeric conversion first calls valueOf (3) with a fallback to toString (2). String conversion does the opposite: toString (2) followed by valueOf (3).


