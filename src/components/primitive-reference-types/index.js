exports.PRIM_REF_TYPES = [
  {
    code: `let name = "Carlos";
let firstName = name;
name = "Carla";
console.log(name); // "Carla"
console.log(firstName); // "Carlos"`
    , explanation: `
     The result is pretty straightforward : that’s the = operator working by value. What really happens here can be simplified as follows :

 - A variable name is created and given the value of "Carlos". JavaScript allocates a memory spot for it.
 - A variable firstName is created and is given a copy of name's value.
 - firstName has its own memory spot and is independent of name . At this moment in the code, firstName also has a value of "Carlos".
 - We then change the value of name to "Carla". But firstName still holds its original value, because it lives in a different memory spot.
    `
  },
  {
    code: `
  var myName = {
  firstName: "Carlos"
};
var identity = myName;
myName.firstName = "Carla";
console.log(myName.firstName); // "Carla"
console.log(identity.firstName); // "Carla"`,
    explanation: `
   Here the output is the same for the variables containing objects.
 That happens because, when dealing with objects, the =operator works by reference. What is really happening can be described as follows:

 - A variable myName is created and is given the value of an object which has a property called firstName.
 - firstName has the value of "Carlos". JavaScript allocates a memory spot for myName and the object it contains.
 - A variable identity is created and is pointed to myName. There is no dedicated memory space to identity's value'. It only points to myName's value.
 - We change the value of myName's firstName property to "Carla" instead of "Carlos".
 - When we log myName.firstName it displays the new value, which is pretty straightforward.
 But when we log identity.firstName its also displays myName.firstName's new value "Carla".
 This happens because identity.firstName only points to myName.firstName’s place in the memory.
  `
  },
  {
    code: `
    var myName = "Carlos";

function myNameIs(aName) {
  aName = "Carla";
}

myNameIs(myName);
console.log(myName); // "Carlos"`,
    explanation: ` * We are passing a copy of myName: anything you do to myName inside
 * the body of the function won't affect the myName variable in the global scope because
 * you are passing a copy of myName, and not the original myName variable.`
  },
  {
    code: `var myName = {};

function myNameIs(aName) {
  aName.firstName = "Carla";
}

myNameIs(myName);
console.log(myName); // Object {firstName: "Carla"}`,
    explanation: `
    /**
 * Now if I log the myName variable after having invoked the function myNameIs,
 * it logs an object with a key of firstName with a value equal to "Carla".
 * The object did change in the global scope when we passed it to the function.
 * This is because when you pass an object into the function,
 * you are not passing a copy. You are passing something that points to the myName object.
 * So when you change a property of that object in the function, you are changing the property of the object in the outer scope.
 **/
    `
  },
  {
    code: `
var myName = {
  firstName: "Carla"
};

function myNameIs(aName) {
  aName = {
    nickName: "Carlita"
  };
}

myNameIs(myName);
console.log(myName); // Object {firstName: "Carla"}
    `, explanation: `    /**
 * Here it prints the value of the variable myName in the outer scope and didn't add a nickName property to the object this time.
 * Why is that ? If you look carefully, what we are doing in the function is trying to reassign the myName object a new value.
 * But you can’t change what myName points to, you can only change a property of myName to something else, like above example.
 **/`
  },
  {
    code: `
    function f(a, b, c) {
  // Argument a is re-assigned to a new value.
  // The object or primitive referenced by the original a is unchanged.
  a = 3;
  // Calling b.push changes its properties - it adds
  // a new property b[b.length] with the value "foo".
  // So the object referenced by b has been changed.
  b.push("foo");
  // The "first" property of argument c has been changed.
  // So the object referenced by c has been changed (unless c is a primitive)
  c.first = false;
}

var x = 4;
var y = ["eeny", "miny", "mo"];
var z = {first: true};
f(x, y, z);
console.log(x, y, z.first);`,
    explanation: `
    `
  },
  {
    code: `
    var a = ["1", "2", {foo: "bar"}];
var b = a[1]; // b is now "2";
var c = a[2]; // c now references {foo:"bar"}
a[1] = "4";   // a is now ["1", "4", {foo:"bar"}]; b still has the value
              // it had at the time of assignment
a[2] = "5";   // a is now ["1", "4", "5"]; c still has the value
              // it had at the time of assignment, i.e. a reference to
              // the object {foo:"bar"}
console.log(b, c.foo); // "2" "bar"`,
    explanation: ``,
  },
  {
    code: `
    var a = ["1", "2", {foo: "bar"}];
var b = a[1]; // b is now "2";
var c = a[2]; // c now references {foo:"bar"}
a[1] = "4";   // a is now ["1", "4", {foo:"bar"}]; b still has the value
              // it had at the time of assignment
a[2] = "5";   // a is now ["1", "4", "5"]; c still has the value
              // it had at the time of assignment, i.e. a reference to
              // the object {foo:"bar"}
console.log(b, c.foo); // "2" "bar"
    `, explanation: ``
  },
  {
    code: `
  var personObj1 = {
  name: 'Alex',
  age: 30
};
var person = personObj1;
person.age = 25;
person = {
  name: 'john',
  age: 50
};
var personObj2 = person;
  `, explanation: ` * The only difference is that when we use the function, person is no longer in scope once the function ends.
 * console.log(personObj1); // -> { name: 'Alex', age: 25 }
 * console.log(personObj2); // -> { name: 'John', age: '50' }`
  }
];
