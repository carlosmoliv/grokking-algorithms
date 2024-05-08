import { SelectionSort } from "./selection-sort";

describe("Selection Sort", () => {
  test("Find the smallest element in an array", () => {
    const numbers = [5, 3, 6, 2, 10];

    const result = SelectionSort.sort(numbers);

    expect(result).toEqual([2, 3, 5, 6, 10]);
  });
});
