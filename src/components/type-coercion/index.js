exports.TYPE_COERCIONS = [
  {code: `true + false`, explanation: `
true + false
==> 1 + 0
==> 1
Binary + operator triggers numeric conversion for true and false. The output is 1`},
  {code: `12 / "6"`, explanation: `
12 / '6'
==> 12 / 6
==>> 2
Arithmetic division operator / triggers numeric conversion for string '6'. The output is 2`},
  {code: `"number" + 15 + 3`, explanation: `
“number” + 15 + 3 
==> "number15" + 3 
==> "number153"
Operator + has left-to-right associativity, so expression "number" + 15 runs first. Since one operand is a string, + operator triggers string conversion for the number 15. On the second step expression "number15" + 3 is evaluated similarly. The output is "number153"`},
  {code: `15 + 3 + "number"`, explanation: `
15 + 3 + "number" 
==> 18 + "number" 
==> "18number"
Expression 15 + 3 is evaluated first. No need for coercion at all, since both operands are numbers. On the second step, expression 18 + 'number' is evaluated, and since one operand is a string, it triggers a string conversion. The output is "18number"`},
  {code: `[1] > null`, explanation: `
[1] > null
==> '1' > 0
==> 1 > 0
==> true
Comparison operator &gt; triggers numeric conversion for [1] and null. The output is true`},
  {code: `"foo" + + "bar" `, explanation: `
"foo" + + "bar" 
==> "foo" + (+"bar") 
==> "foo" + NaN 
==> "fooNaN"
- Unary + operator has higher precedence over binary + operator. So +'bar' expression evaluates first. 
- Unary plus triggers numeric conversion for string 'bar'. Since the string does not represent a valid number, the result is NaN.
- On the second step, expression 'foo' + NaN is evaluated.
`},
  {code: `'true' == true`, explanation: `
  'true' == true
==> NaN == 1
==> false

false == 'false'   
==> 0 == NaN
==> false

== operator triggers numeric conversion, string 'true' is converted to NaN, boolean true is converted to 1.
`},
  {code: `null == ''`, explanation: `
  null == ''
  ==> false
== usually triggers numeric conversion, but it’s not the case with null .
 null equals to null or undefined only, and does not equal to anything else.
  `},
  {
    code: `!!"false" == !!"true"  `, explanation: `
!!"false" == !!"true"  
==> true == true
==> true
!! operator converts both 'true' and 'false' strings to boolean true, since they are non-empty strings.
 Then, == just checks equality of two boolean true's without any coercion.
    `
  },
  {code: `['x'] == 'x'`, explanation: `
['x'] == 'x'  
==> 'x' == 'x'
==>  true

== operator triggers a numeric conversion for an array. 
Array’s valueOf() method returns the array itself, and is ignored because it’s not a primitive.
Array’s toString() converts ['x'] to just 'x' string.
  `},
  {
    code: `[] + null + 1`, explanation: `
[] + null + 1  
==>  '' + null + 1  
==>  'null' + 1  
==> 'null1'

+ operator triggers numeric conversion for []. 
Array’s valueOf() method is ignored, because it returns array itself, which is non-primitive. Array’s toString returns an empty string.
On the the second step expression '' + null + 1 is evaluated.
    `
  },
  {code: `0 || "0" && {}`, explanation: `
0 || "0" && {}  
==>  (0 || "0") && {}
==> (false || true) && true  // internally
==> "0" && {}
==> true && true             // internally
==> {}

Logical || and && operators coerce operands to boolean, but return original operands (not booleans). 
0 is falsy, whereas '0' is truthy, because it’s a non-empty string. {} empty object is truthy as well.
  `},
  {code: `[1,2,3] == [1,2,3]`, explanation: `
[1,2,3] == [1,2,3]
==>  false

No coercion is needed because both operands have same type. 
Since == checks for object identity (and not for object equality) and the two arrays are two different instances, the result is false.
  `},
  {code: `{}+[]+{}+[1]`, explanation: `
{}+[]+{}+[1]
==> +[]+{}+[1]
==> 0 + {} + [1]
==> 0 + '[object Object]' + [1]
==> '0[object Object]' + [1]
==> '0[object Object]' + '1'
==> '0[object Object]1'
All operands are non-primitive values, so + starts with the leftmost triggering numeric conversion. 
Both Object’s and Array’s valueOf method returns the object itself, so it’s ignored.
toString() is used as a fallback. The trick here is that first {} is not considered as an object literal,
but rather as a block declaration statement, so it’s ignored. Evaluation starts with next +[] expression,
which is converted to an empty string via toString() method and then to 0.
  `}
];
