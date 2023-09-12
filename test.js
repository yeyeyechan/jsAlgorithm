function solution3(N, F, S, B, T, P, Q, W, O) {
  let first, second;
  let p, q;
  function check(arr, signal) {
    let idx = 0;
    let arrlen = arr.length;
    for (let i = 0; i < arrlen; i++) {
      if (arr[i] !== signal[i - idx]) idx = i + 1;
      if (i - idx + 1 === signal.length) return idx;
    }
    return -1;
  }

  function maxDivisor(a, b) {
    if (b === 0) return a;
    return maxDivisor(b, a % b);
  }
  first = check(F, B);
  second = check(S, B);

  p = Math.abs(first - second) * 60 * P;
  q = T * Q;

  const divisor = maxDivisor(p, q);
  p /= divisor;
  q /= divisor;
  console.log(p >= 0 && W <= 0);
  console.log(p);

  if (first > second) p *= -1;
  else if ((first < second && p * O >= W * q) || (p >= 0 && W <= 0)) return -1;

  let x, y;

  x = second * P * O * q;
  y = Q * (W * q - p * O);

  const divisor2 = maxDivisor(x, y);
  x /= divisor2;
  y /= divisor2;

  return x + y;
}
console.log(
  solution3(
    10,
    [0, 0, 1, 2, 3, 4, 5, 6, 7, 8],
    [0, 0, 1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    7,
    28,
    4,
    0,
    1234
  )
);
