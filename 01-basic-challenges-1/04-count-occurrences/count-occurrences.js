function countOccurrences(string, character) {
  let counter = 0;
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    if (element === character) counter++;
  }
  return counter;
}

module.exports = countOccurrences;
