const args = process.argv.slice(2);
function longestCommonSubstring(strings) {
  if (!strings || strings.length === 0) {
    return '';
  }

  const shortest = strings.reduce((acc, str) => (str.length < acc.length ? str : acc), strings[0]);
  const len = shortest.length;

  for (let i = len; i > 0; i--) {
    for (let j = 0; j <= len - i; j++) {
      const substring = shortest.substr(j, i);
      if (strings.every(str => str.includes(substring))) {
        return substring;
      }
    }
  }

  return '';
}
function longestCommonSubstring2(strings) {
  if (!strings || strings.length === 0) {
    return '';
  }

  const len = strings.length;
  const shortest = strings.reduce((acc, str) => (str.length < acc.length ? str : acc), strings[0]);

  function isCommonSubstring(substring) {
    return strings.every(str => str.includes(substring));
  }

  let start = 0;
  let maxLength = 0;

  for (let i = 0; i < shortest.length; i++) {
    for (let j = i + maxLength; j < shortest.length; j++) {
      const substring = shortest.substring(i, j + 1);

      if (isCommonSubstring(substring)) {
        start = i;
        maxLength = substring.length;
      }
    }
  }

  return shortest.substring(start, start + maxLength);
}
console.log(longestCommonSubstring2(args))
