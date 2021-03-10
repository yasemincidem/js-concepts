const PURE_FUNCTIONS = [{
  code: `
  // This is the impure implementation of onSubmit method
  const onSubmit = event => {

  event.preventDefault();

  let healthMessage;

  const result = form.querySelector('.result');
  const health = form.querySelector('.health');

  const weight = parseInt(form.querySelector('input[name=weight]').value, 10);
  const height = parseInt(form.querySelector('input[name=height]').value, 10);

  const bmi = (weight / (height /100 * height / 100)).toFixed(1);

  if (bmi = 18.5 && unit  25) {
    healthMessage = 'considered overweight';
  }

  result.innerHTML = bmi;
  health.innerHTML = healthMessage;

};
  `,
  explanation: `
  // We need to decide which functions will be pure
  // Parse values to numbers and calculate the BMI
  // Return us the correct message for binding to the DOM
  // This is the pure function
   const getHealthMessage = unit => {
    let healthMessage;
    if (unit = 18.5 && unit  25) {
      healthMessage = 'considered overweight';
    }
    return healthMessage;
  };

  const getBMI = (weight, height) => {
    let newWeight = parseInt(weight, 10);
    let newHeight = parseInt(height, 10);
    return (newWeight / (newHeight /100 * newHeight / 100)).toFixed(1);
  };

  const onSubmit = event => {

    event.preventDefault();

    const result = form.querySelector('.result');
    const health = form.querySelector('.health');

    const weight = form.querySelector('input[name=weight]').value;
    const height = form.querySelector('input[name=height]').value;

    const bmi = getBMI(weight, height);

    result.innerHTML = bmi;
    health.innerHTML = getHealthMessage(bmi);

  };
  `
},
  {
    code: `
  // This is the impure function
  var values = { a: 1 }

function impureFunction(items) {
  var b = 1

  items.a = items.a * b + 2

  return items.a
}

var c = impureFunction(values)
// Now "values.a" is 3, the impure function modifies it
  `, explanation: `
  // This is the pure function
  var values = { a: 1 }

function pureFunction(a) {
  var b = 1

  a = a * b + 2

  return a
}

var c = pureFunction(values.a)
// "values.a" has not been modified, it's still 1
  `
  }
]
