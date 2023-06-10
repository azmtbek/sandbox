// 2632. Curry

function curry(fn: Function): Function {
  const args: unknown[] = [];
  const len = fn.length;
  return function curried() {
    for (const a of arguments) {
      args.push(a);
    }
    if (args.length === len) return fn(...args);
    return curried;
  };
}

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
