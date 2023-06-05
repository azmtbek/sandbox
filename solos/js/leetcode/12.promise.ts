// 2637. Promise Time Limit

// @ts-ignore
type Fn = (...params: unknown[]) => Promise<unknown>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    const p = new Promise((res, rej) =>
      setTimeout(() => rej("Time Limit Exceeded"), t)
    );
    return Promise.race([fn(...args), p]);
  };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
