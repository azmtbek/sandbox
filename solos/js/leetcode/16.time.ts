// 2676. Throttle

// @ts-ignore
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


function throttle2(fn: F, t: number): F {
  let timer: ReturnType<typeof setTimeout>;
  let next = 0;
  return function (...args) {
    const delay = next - Date.now();
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
      next = Date.now() + t;
    }, delay);
  }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
