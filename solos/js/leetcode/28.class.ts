// 2695. Array Wrapper

class ArrayWrapper {
  arr: number[];

  constructor(nums: number[]) {
    this.arr = nums;
  }

  valueOf() {
    return this.arr.reduce((acc, a) => acc + a, 0);
  }

  toString() {
    return `[${this.arr.join(",")}]`;
  }
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
