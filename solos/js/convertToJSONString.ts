// first version
function jsonStringify(object: any): string {
  if (typeof object === 'string') {
    return `"${object}"`
  }
  if (typeof object === "boolean" || typeof object === "number") {
    return String(object)
  }
  if (Array.isArray(object)) {
    let sum: string[] = [];
    for (const item of object) {
      sum.push(jsonStringify(item))
    }
    return `[${sum.join(',')}]`
  }
  if (typeof object === 'object') {
    if (object === null) return 'null'
    let sum: string[] = [];
    for (const key in object) {
      sum.push('"' + key + '":' + jsonStringify(object[key]))
    }
    return `{${sum.join(',')}}`
  }
  return ''
};
// second version
function jsonStringify2(object: any): string {
  switch (typeof object) {
    case 'object':
      if (object === null) return 'null';
      if (Array.isArray(object)) {
        let sum: string[] = [];
        for (const item of object) {
          sum.push(jsonStringify(item))
        }
        return `[${sum.join(',')}]`
      }
      let sum: string[] = [];
      for (const key in object) {
        sum.push('"' + key + '":' + jsonStringify(object[key]))
      }
      return `{${sum.join(',')}}`
    case 'number':
    case 'boolean':
      return `${object}`
    case 'string':
      return `"${object}"`
    default:
      return ''
  }
}