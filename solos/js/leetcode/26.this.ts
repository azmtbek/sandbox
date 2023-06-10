// 2693. Call Function with Custom Context

declare global {
  interface Function {
    callPolyfill(context: Record<any, unknown>, ...args: unknown[]): unknown;
  }
}

Function.prototype.callPolyfill = function (context, ...args): unknown {
  return this.bind(context)(...args);
};

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */

export { };
