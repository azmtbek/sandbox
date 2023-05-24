function range(start: number, end: number, step = 1) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (start < end) {
        start += step;
        return { value: start, done: false }
      }
      return { value: end, done: true }
    }
  }
}

for (const n of range(0, 20, 2)) {
  console.log(n)
}