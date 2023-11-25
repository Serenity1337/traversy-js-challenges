function permutations(string) {
  const result = [];
  if (string.length === 0) {
    result.push("");
    return result;
  }
  string.split("").map((str, index) => {
    return permutations(str);
  });
}

module.exports = permutations;
