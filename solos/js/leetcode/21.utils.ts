// 2677. Chunk Array

function chunk(arr: any[], size: number): any[][] {
  let ans: any[] = [];

  for (let i = 0; i < arr.length; i += size) {
    ans.push(arr.slice(i, i + size));
  }

  return ans;
}
