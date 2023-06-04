// 2700. Differences Between Two Objects

function objDiff(obj1: any, obj2: any): any {
  if (obj1 === obj2) return {};
  const isNotObj =
    () => (obj1 === null || obj2 === null || typeof obj1 !== "object" ||
      typeof obj2 !== "object" || Array.isArray(obj1) !== Array.isArray(obj2));

  if (isNotObj()) return [obj1, obj2];

  const ans = {};
  for (const k in obj1) {
    if (k in obj2) {
      const diff = objDiff(obj1[k], obj2[k]);
      if (Object.keys(diff).length) ans[k] = diff;
    }
  }
  return ans;
}
