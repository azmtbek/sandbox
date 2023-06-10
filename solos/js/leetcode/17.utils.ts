// 2628. JSON Deep Equal

function areDeeplyEqual(o1: any, o2: any): boolean {
  const isArr = (o) => Array.isArray(o);
  const isObj = (o) => typeof o === "object" && o !== null;
  const objKL = (o) => Object.keys(o).length;
  if (o1 === o2) return true;
  if (String(o1) !== String(o2)) return false;
  if (typeof o1 !== "object") return o1 === o2;

  if (isArr(o1) && o1.length !== o2.length) return false;
  if (isObj(o1) && objKL(o1) !== objKL(o2)) return false;

  for (const key in o1) {
    if (!areDeeplyEqual(o1[key], o2[key])) return false;
  }

  return true;
}
