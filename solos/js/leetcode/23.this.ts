// 2619. Array Prototype Last

declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

// version 1
Array.prototype.last = function () {
  if (Array.isArray(this) && this.length > 0) {
    return this[this.length - 1];
  }
  return -1;
};

// version 2
Array.prototype.last = function () {
  if (this.length === 0) return -1;
  return this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

export {};