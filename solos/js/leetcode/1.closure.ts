// 2667. Create Hello World Function

function createHelloWorld() {
  const hello = "Hello World";
  return function (...args): string {
    return hello;
  };
}
