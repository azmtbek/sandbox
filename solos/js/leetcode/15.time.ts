// 2627. Debounce

// @ts-ignore
type F = (...p: any[]) => any;

function debounce(fn: F, t: number): F {
  let timer: ReturnType<typeof setTimeout>;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  };
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
