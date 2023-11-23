function titleCase(string = "") {
  let result = "";
  const stringArr = string.split(" ");
  for (let index = 0; index < stringArr.length; index++) {
    const element = stringArr[index].split("");
    element[0] = element[0].toUpperCase();
    if (index === 0) {
      result += element.join("");
    } else {
      result += " " + element.join("");
    }
  }
  return result;
}
titleCase("hello world");
module.exports = titleCase;
