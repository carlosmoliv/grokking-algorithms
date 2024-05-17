import { quickSort } from "./quick-sort";

describe("quickSort()", () => {
  it("", async () => {
    const result = quickSort([10, 5, 2, 3]);

    expect(result).toEqual([2, 3, 5, 10]);
  });
});
