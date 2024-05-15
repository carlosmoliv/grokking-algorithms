const factorial = (x: number): number => {
  if (x === 1) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
};

const result = factorial(5);
console.log(result);
