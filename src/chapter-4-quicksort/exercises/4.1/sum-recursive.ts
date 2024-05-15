const sum = (list: number[]): number => {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sum(list.slice(1));
};

console.log(sum([3, 7, 9, 14]));
