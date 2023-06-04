// 2631. Group By

declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function (fn) {
  const obj = {};
  for (const x of this) {
    const key = fn(x);
    if (!obj[key]) obj[key] = [];
    obj[key].push(x);
  }
  return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

export {};
