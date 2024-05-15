const findMaxNumber = (list: number[]): number => {
  if (list.length === 2) {
    return list[0] > list[1] ? list[0] : list[1];
  }
  const subMax = findMaxNumber(list.slice(1));
  return list[0] > subMax ? list[0] : subMax;
};

describe("findMaxNumber", () => {
  it("", async () => {
    const result = findMaxNumber([3, 49, 9, 14]);

    expect(result).toBe(49);
  });
});
