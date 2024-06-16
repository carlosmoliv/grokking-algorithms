import { selectionSort } from "./selection-sort";

describe("Selection Sort", () => {
  test("Sort an Array using a simple Selection Sort Algorithm", () => {
    const numbers = [5, 3, 6, 2, 10];

    const result = selectionSort(numbers);

    expect(result).toEqual([2, 3, 5, 6, 10]);
  });
});
