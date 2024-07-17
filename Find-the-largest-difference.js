// https://bigfrontend.dev/problem/Find-the-largest-difference
/**
 * @param {number[]} arr
 * @return {number}
 */
function largestDiff(arr) {
  if (arr.length < 2) return 0;
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    min = Math.min(arr[i], min);
    max = Math.max(arr[i], max);
  }
  console.log(Math.abs(min - max))
  return Math.abs(min - max);
}

largestDiff([-1, 2, 3, 10, 9])
// 11,  obviously Math.abs(-1 - 10) is the largest

largestDiff([])
// 0

largestDiff([1])
