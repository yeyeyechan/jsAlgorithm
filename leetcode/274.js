var hIndex = function (citations) {
  citations.sort((a, b) => a - b);
  let n = citations.length;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= n - i) return n - i;
  }
  return 0;
};
