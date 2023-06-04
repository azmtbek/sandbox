// 2623. Memoize
// @ts-ignore
type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  const memo = [];
  return function (...args) {
    const arg = JSON.stringify(args);
    if (memo[arg] == undefined) memo[arg] = fn(...args);
    return memo[arg];
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 * 	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
