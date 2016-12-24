function divide(num) {
  return num /= 4;
}

function multiply(num) {
  return num *= 3;
}

function add(num) {
  return num += 50;
}

divide(multiply(add(4)));
