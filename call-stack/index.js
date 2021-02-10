/**
 * Call stack looks like that
 * Call stack list:
 - average
 * Call stack list:
 - add
 - average
 * Call stack list:
 - average
 * Call stack list:
 - EMPTY
 * Returns: 15;
 */
function add(a, b) {
  return a + b;
}

function average(a, b) {
  return add(a, b) / 2;
}

let x = average(10, 20);

/**
 * It throws an error "the number of the execution contexts exceeds the size of the stack"
 * foo function is being added to top of the stack. Nothing is being removed.
 * The number of the execution contexts exceeds the size of the stack
 */
function foo() {
  foo();
}

foo(); // stack overflow
