function reverseString(string) {
  if (string === "") return string;
  const newString = string.slice(1, string.length);
  const test = reverseString(newString);
  console.log(test);
  return test + string[0];
}

module.exports = reverseString;
