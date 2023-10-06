function integerBreak(n: number): number {
  if (n < 4) {
    return n - 1;
  }

  let a = n % 3;

  if (a === 1) {
    a = 4;
  }

  return Math.pow(3, (n - a) / 3) * (a || 1);
}
