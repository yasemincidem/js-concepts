export const DOUBLE_VS_TRIPLE_EQUALS = [{
  code: `'hello world' === 'hello world'`, explanation: `
'hello world' === 'hello world'
=> true (Both Strings, equal values)`
}, {
  code: `true === true`, explanation: `
true === true
=> true (Both Booleans, equal values)`
}, {
  code: `77 === '77'`, explanation: `
77 === '77'
=> false (Number v. String)`
},
  {
    code: `'cat' === 'dog'`, explanation: `
'cat' === 'dog'
=> false (Both are Strings, but have different values)`
  }, {
    code: `false === 0`, explanation: `
false === 0
=> false (Different type and different value)`
  }, {
    code: `77 == '77'`, explanation: `
77 == '77'
=> 77 == 77 (applied type coercion from string to number)
=> true`
  }, {
    code: `false == 0`, explanation: `
false == 0
=> false == false (applied type coercion from number to boolean)
=> true
  `
  },
  {
    code: `0 == ""`, explanation: `
0 == ""
=> false == false (applied type coercion from number to boolean and string to boolean)
=> true
  `
  },
  {
    code: `"" == false`, explanation: `
"" == false
=> false == false (applied type coercion from string to boolean)
=> true
  `
  },
  {
    code: `null == false`, explanation: `
=> null == false (null and undefined are only equal to themselves and each other:)
=> false
  `
  },
  {
    code: `undefined == false`, explanation: `
=> undefined == false (null and undefined are only equal to themselves and each other:)
=> false
  `
  },
  {
    code: `null === 0`, explanation: `
=> null === 0 (They have different type, typeof null => null, typeof 0 => number)
=> false
  `
  },
  {
    code: `undefined === false`, explanation: `
=> undefined === false (They have different type, typeof undefined => undefined, typeof false => boolean)
=> false
  `
  },
  {
    code: `undefined === null`, explanation: `
=> undefined === null (They have different type, typeof undefined => undefined, typeof null => object)
=> false
  `
  },
  {
    code: `null == null`, explanation: `
=> null == null (not need to apply type coercion because they have same type)
=> true
  `
  },
  {
    code: `undefined == undefined`, explanation: `
=> undefined == undefined (not need to apply type coercion because they have same type)
=> true
  `
  },
  {
    code: `null == undefined`, explanation: `
=> null == undefined (not need to apply type coercion because they have same type)
=> true
  `
  },
  {
    code: `NaN == null`, explanation: `
=> NaN == null (NaN is not equivalent to anything)
=> false
  `
  },
  {
    code: `NaN == undefined`, explanation: `
=> NaN == undefined (NaN is not equivalent to anything)
=> false
  `
  },
  {
    code: `NaN == Nan`, explanation: `
=> NaN == Nan (NaN is not equivalent to anything includes itself)
=> false
  `
  },
];
