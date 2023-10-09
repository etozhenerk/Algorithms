const MOD = 1e9 + 7;
function numOfArrays(n: number, m: number, k: number): number {
  if (k > m || k > n) {
    return 0;
  }

  const dp: number[][] = [];
  for (let i = 0; i <= m; ++i) {
    dp.push(new Array(k + 1).fill(0));
    dp[i][0] = 1;
  }

  const sums = new Array<number>(k + 1);
  for (let i = 0; i < n; ++i) {
    sums.fill(0);
    for (let max = 0; max <= m; ++max) {
      let prev = 0;
      for (let remain = 0; remain <= k; ++remain) {
        let ans = ((m - max) * dp[max][remain]) % MOD;
        ans = (ans + sums[remain]) % MOD;
        sums[remain] = (sums[remain] + prev) % MOD;
        prev = dp[max][remain];
        dp[max][remain] = ans;
      }
    }
  }

  return dp[m][k];
}
