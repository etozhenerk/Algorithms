function maxDotProduct(nums1: number[], nums2: number[]): number {
  let c = new Map<string, number>();

  function inner(i: number, j: number): number {
    if (i >= nums1.length || j >= nums2.length) {
        return -Infinity;
    }

    let h = `${i}-${j}`;
    if (c.has(h)) {
        return c.get(h)!;
    }

    let m = -Infinity;
    for (let k = j; k < nums2.length; k++) {
      let s = nums1[i] * nums2[k];
      m = Math.max(s, m);
      if (s > 0) {
        m = Math.max(s + inner(i + 1, k + 1), m);
      }
    }
    m = Math.max(m, inner(i + 1, j));
    c.set(h, m);
    return m;
  }
  return inner(0, 0);
}
