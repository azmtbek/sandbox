// 2676. Throttle

type F = (...args: any[]) => void;

function throttle(fn: F, t: number): F {
  let timer: number | null = null;
  let currArgs: any[] | null = null;
  const f = () => {
    if (currArgs !== null) {
      fn(...currArgs);
      currArgs = null;
      timer = setTimeout(f, t);
    } else timer = null;
  };
  return function (...args) {
    if (!timer) {
      fn(...args);
      timer = setTimeout(f, t);
    } else currArgs = args;
  };
}

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
