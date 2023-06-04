// 2636. Promise Pool
// @ts-ignore
type F = () => Promise<any>;

function promisePool(functions: F[], n: number): Promise<any> {
  const nextInLine = () => functions[n++]?.().then(nextInLine);
  const arr: F[] = [];
  for (let i = 0; i < n && i < functions.length; i++) {
    arr.push(functions[i]);
  }
  return Promise.all(arr.map((f: F) => f().then(nextInLine)));
}

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
