export const binarySearch = (
  list: number[],
  item: number
): number | undefined => {
  // Starting
  // Low and high keep track of which part of the list will be search in.
  let low = 0;
  let high = list.length - 1;

  // While
  while (low <= high) {
    // Check the middle element each time
    const mid = Math.round(low + high / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      // If the guess is too high, high is update accordingly
      high = mid - 1;
    } else {
      // If the guess is too low, low is update accordingly
      low = mid + 1;
    }
  }

  // When item doesn't exists
  return undefined;
};
