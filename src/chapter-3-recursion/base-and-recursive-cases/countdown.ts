// Without defining the base case, we have a infinite loop
const countdown1 = (i: number) => {
  console.log(i);
  countdown1(i - 1);
};

const countdown2 = (i: number) => {
  console.log(i);
  // Base case
  if (i <= 0) {
    return;
    // Recursive case
  } else {
    countdown2(i - 1);
  }
};

countdown2(10);
