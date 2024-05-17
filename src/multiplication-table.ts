// Time complexity is O(n^2)
const createMultiplicationTable = (numbers: number[]) => {
  const multiplicationTable: number[][] = [];
  for (let i = 0; i < numbers.length; i++) {
    const row = [];
    for (let j = 0; j < numbers.length; j++) {
      const current = numbers[i] * numbers[j];
      row.push(current);
    }
    multiplicationTable.push(row);
  }
  return multiplicationTable;
};

const result = createMultiplicationTable([2, 3, 7, 8, 10]);
console.log(result);

// [ 4, 6, 14, 16, 20 ],
// [ 6, 9, 21, 24, 30 ],
// [ 14, 21, 49, 56, 70 ],
// [ 16, 24, 56, 64, 80 ],
// [ 20, 30, 70, 80, 100 ]