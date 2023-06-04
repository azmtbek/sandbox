// 2626. Array Reduce Transformation
// @ts-ignore
type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  let acc = init;
  for (const i in nums) {
    acc = fn(acc, nums[i]);
  }
  return acc;
}
