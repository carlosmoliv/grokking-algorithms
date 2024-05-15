const countRecursive = (list: number[]): number => {
  if (list.length === 0) return 0;
  return 1 + countRecursive(list.slice(1));
};

describe("", () => {
  it("", async () => {
    const result = countRecursive([3, 7, 9, 14]);

    expect(result).toBe(4);
  });
});
