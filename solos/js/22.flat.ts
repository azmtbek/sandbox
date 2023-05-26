type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  if (n === 0) return arr;
  const ans: MultiDimensionalArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') ans.push(arr[i]);
    else ans.push(...flat(arr[i] as MultiDimensionalArray, n - 1));
  }

  return ans;
};