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
    const keys = Object.keys(object)
    let sum: string[] = [];
    for (const key in object) {
      sum.push('"' + key + '":' + jsonStringify(object[key]))
    }
    return `{${sum.join(',')}}`
  }
  return ''
};