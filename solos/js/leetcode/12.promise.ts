// 2637. Promise Time Limit

type Fn = (...params: any[]) => Promise<any>;

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
