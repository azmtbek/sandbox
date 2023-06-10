// 2633. Convert Object to JSON String

function jsonStringify(object: any): string {
  switch (typeof object) {
    case "object":
      if (object === null) return "null";
      if (Array.isArray(object)) {
        let sum: string[] = [];
        for (const item of object) {
          sum.push(jsonStringify(item));
        }
        return `[${sum.join(",")}]`;
      }
      let sum: string[] = [];
      for (const key in object) {
        sum.push('"' + key + '":' + jsonStringify(object[key]));
      }
      return `{${sum.join(",")}}`;
    case "number":
    case "boolean":
      return `${object}`;
    case "string":
      return `"${object}"`;
    default:
      return "";
  }
}
