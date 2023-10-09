function searchRange(nums: number[], target: number): number[] {
  const ans = [-1, -1];

  let l = 0;
  let r = nums.length - 1;

  while (l <= r && r < nums.length && r < nums.length) {
    if (nums[l] < target) {
      l++;
    }

    if (nums[r] > target) {
      r--;
    }

    if (nums[l] === target && nums[r] === target) {
      ans[0] = l;
      ans[1] = r;
      break;
    }
  }

  return ans;
}

console.log(searchRange([1], 1));
