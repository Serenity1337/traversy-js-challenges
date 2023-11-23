function removeDuplicates(array) {
  const memo = {};
  let result = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!memo[element]) {
      result.push(element);
      memo[element] = true;
    }
  }
  return result;
}

module.exports = removeDuplicates;
