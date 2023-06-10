// 2648. Generate Fibonacci Sequence

function* fibGenerator(x1 = 0, x2 = 1): Generator<number> {
  yield x1;
  yield* fibGenerator(x2, x1 + x2);
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */