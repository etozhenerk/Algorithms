function minOperations(nums: number[]): number {
  const n = nums.length;
  const uniqueArr = [...new Set(nums)];
  uniqueArr.sort((a, b) => a - b);

  let ans = n;

  for (let i = 0; i < uniqueArr.length; i++) {
    const left = uniqueArr[i];
    const right = left + n - 1;
    const j = binSearch(uniqueArr, right);
    const count = j - i;
    ans = Math.min(ans, n - count);
  }

  return ans;
}

const binSearch = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};
