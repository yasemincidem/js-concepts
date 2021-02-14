# Double equals vds Triple Equals
In js you can test equality with == or ===.
# Triple Equals:
When using triple equals === in JavaScript, we are testing for strict equality.
This means both the type and the value we are comparing have to be the same.
Example:
```
7 === '7' => false;
false === 0 => false;
```
# Double Equals:
When using double equals in JavaScript we are testing for loose equality. Double equals also performs type coercion.
Type coercion means that two values are compared only after attempting to convert them into a common type.
Example:
```
7 == '7' => true;
false == 0 => true;
```
