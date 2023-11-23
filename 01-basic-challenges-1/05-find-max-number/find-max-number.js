function findMaxNumber(array) {
  let maxNum = -9999999999999999;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > maxNum) maxNum = element;
  }
  return maxNum;
}

module.exports = findMaxNumber;
