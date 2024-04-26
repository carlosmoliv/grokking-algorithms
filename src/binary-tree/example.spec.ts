import assert from "node:assert";
import test, { describe } from "node:test";

const binarySearch = (list: number[], item: number): number | undefined => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = low + high;
    const guess = list[mid];
    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return undefined;
};

describe("Binary Search Tree", () => {
  test("", () => {
    const numbers = [1, 3, 5, 7, 9];

    const number = binarySearch(numbers, 3);

    assert.strictEqual(number, 1);
  });
});
