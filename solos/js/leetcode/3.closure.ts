// 2665. Counter II

type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};
// @ts-ignore
function createCounter(init: number): ReturnObj {
  let number = init;
  return {
    increment: () => {
      return ++number;
    },
    decrement: () => {
      return --number;
    },
    reset: () => {
      number = init;
      return number;
    },
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
