function numIdenticalPairs(nums: number[]): number {
  const list: Record<number, number> = {};
  let pairs = 0;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (list[element]) {
      pairs += list[element];
      list[element]++;
    } else {
      list[element] = 1;
    }
  }

  return pairs;
}
