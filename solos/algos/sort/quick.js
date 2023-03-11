export function quickSort(arr) {
  const len = arr.length;
  if (len < 2) return arr;
  const PIVOT = arr.pop();
  const GREATER = arr.filter((a) => a > PIVOT);
  const LESSER = arr.filter((a) => a <= PIVOT);
  return [...quickSort(LESSER), PIVOT, ...quickSort(GREATER)];
}
