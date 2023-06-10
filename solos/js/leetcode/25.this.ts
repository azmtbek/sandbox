// 2618. Check if Object Instance of Class

function checkIfInstanceOf(obj: unknown, classFunction: unknown): boolean {
  if (
    obj === null || obj === undefined ||
    typeof classFunction !== "function"
  ) return false;
  return Object(obj) instanceof classFunction;
}
/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
