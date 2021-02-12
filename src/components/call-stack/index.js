exports.CALL_STACK = [
  {
    code: `function add(a, b) {
  return a + b;
}

function average(a, b) {
  return add(a, b) / 2;
}

let x = average(10, 20);`,
    explanation: `
h1. Code description:

Call stack looks like that
* Call stack list:

average

* Call stack list:

add
average

* Call stack list:

average

* Call stack list:

EMPTY

* Returns: 15;`
  },
  {
    code: `function foo() {
  foo();
}

foo();`, explanation: `
h1. Code description:
# It throws an error "the number of the execution contexts exceeds the size of the stack"
# foo function is being added to top of the stack. Nothing is being removed.
# The number of the execution contexts exceeds the size of the stack
`
  }
];
