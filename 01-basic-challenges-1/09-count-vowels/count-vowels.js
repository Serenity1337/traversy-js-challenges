function countVowels(string) {
  let newString = string.toLowerCase();
  let result = 0;
  for (let index = 0; index < newString.length; index++) {
    const element = newString[index];
    switch (element) {
      case "a":
        result++;
        break;
      case "o":
        result++;
        break;
      case "e":
        result++;
        break;
      case "i":
        result++;
        break;
      case "u":
        result++;
        break;

      default:
        break;
    }
  }
  return result;
}

module.exports = countVowels;
