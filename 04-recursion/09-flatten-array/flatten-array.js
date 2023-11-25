function flattenArray(arr) {
  let result = [];

  arr.map((arr) => {
    if (typeof arr === "number") {
      result.push(arr);
    } else {
      result = [...result, ...flattenArray(arr)];
    }
  });

  // [
  //     [1, 2],
  //     [3, [4, 5]],
  //     [6, [7]],
  // ]
  return result;
}

module.exports = flattenArray;
