function divide(num) {
  num /= 4;
  return num;
}

function multiply(num) {
  num *= 3;
  return num;
}


function add(num) {
  num += 50;
  return num;
}

divide(multiply(add(4)));

console.log(divide(multiply(add(4))));
