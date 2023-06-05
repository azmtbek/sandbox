// 2622. Cache With Time Limit

class TimeLimitedCache {
  cache: Map<number, { val: number, timeout: number }>;
  constructor() {
    this.cache = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    const val = this.cache.get(key);
    if (val) {
      clearTimeout(val.timeout);
    }
    const timeout = setTimeout(() => this.cache.delete(key), duration);
    this.cache.set(key, { val: value, timeout });
    return !!val;
  }

  get(key: number): number {
    return this.cache.has(key) ? this.cache.get(key)!.val : -1;
  }

  count(): number {
    return this.cache.size;
  }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
