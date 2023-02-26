function loop(n) {
  if (n == 3) return n;
  return loop(n + 1);
}
const n = loop(0);
// commment 1
