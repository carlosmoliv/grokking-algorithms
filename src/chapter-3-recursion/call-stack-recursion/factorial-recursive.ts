export const factorialRecursive = (x: number): number => {
  if (x === 1) {
    return 1;
  } else {
    return x * factorialRecursive(x - 1);
  }
};
