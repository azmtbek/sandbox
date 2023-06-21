// 2704. To Be Or Not To Be

type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  const toBe = (val2: any) => {
    if (val === val2) return true;
    throw Error('Not Equal');
  }
  const notToBe = (val2: any) => {
    if (val !== val2) return true;
    throw Error('Equal');
  }

  return { toBe, notToBe }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */