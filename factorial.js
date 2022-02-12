function calculateFactorial(number) {
  if (number < 2) {
    return 1;
  }
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}

function calculateFactorialRecursively(number) {
  debugger;
  if (number < 3) {
    return number;
  }
  return number * calculateFactorialRecursively(number-1);
}
console.log(calculateFactorial(10));
console.log(calculateFactorialRecursively(10));