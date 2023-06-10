// 2675. Array of Objects to Matrix

function jsonToMatrix(arr: any[]): (string | number | boolean | null)[] {
  const bfs = (obj, pre) => {
    let acc = {};
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        acc = { ...acc, ...bfs(obj[key], [...pre, key]) };
      } else {
        acc = { ...acc, [[...pre, key].join(".")]: obj[key] };
      }
    }
    return acc;
  };

  const ans: any[] = arr.map((i) => bfs(i, []));

  const keys = Object.keys(ans.reduce((acc, obj) => ({ ...acc, ...obj }), {}))
    .sort();

  return ans.reduce(
    (acc, obj) => [...acc, keys.map((key) => (key in obj) ? obj[key] : "")],
    [keys],
  );
}
