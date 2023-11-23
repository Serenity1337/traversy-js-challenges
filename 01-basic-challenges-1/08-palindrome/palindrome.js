function isPalindrome(string) {
  let newString = string.replaceAll(",", "").replaceAll(" ", "").toLowerCase();
  if (newString === newString.split("").reverse().join("")) {
    return true;
  }
  return false;
}
module.exports = isPalindrome;
