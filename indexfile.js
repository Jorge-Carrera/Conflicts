
function fn(...array) {
  if (!array.every((a) => Number.isNumber(a)))
    throw "All arguments must be numbers.";
  return array.reduce((a, b) => a + b);
}

fn(1, 2, 3); //> 6


fn(10, "B", 20); //>  shoul return error All arguments must be numbers.

