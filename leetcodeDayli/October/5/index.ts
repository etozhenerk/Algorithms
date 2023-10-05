function majorityElement(nums: number[]): number[] {
  const list: Record<number, number> = {};

  const ans: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (!list[element]) {
      list[element] = 0;
    }

    list[element]++;
  }

  for (const key in list) {
    const element = list[key];
    if (element > nums.length / 3) {
      ans.push(parseInt(key));
    }
  }

  return ans;
}
