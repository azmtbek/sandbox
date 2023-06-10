// 2634. Filter Elements from Array

function filter(arr: number[], fn: (n: number, i: number) => unknown): number[] {
  const arr2: unknown[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) arr2.push(arr[i]);
  }
  return arr2 as number[];
}
