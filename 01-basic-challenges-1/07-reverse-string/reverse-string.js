function reverseString(string) {
  let result = "";
  for (let index = string.length - 1; index >= 0; index--) {
    const element = string[index];
    result += element;
  }
  return result;
}
module.exports = reverseString;
