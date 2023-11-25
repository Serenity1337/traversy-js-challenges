function factorial(number) {
  if (number === 0) return 1;
  if (number === 1) return 1;
  if (number === 2) return 2;
  return number * factorial(number - 1);
}

module.exports = factorial;
