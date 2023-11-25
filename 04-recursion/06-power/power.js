function power(num, times) {
  if (times <= 1) return num;
  return num * power(num, times - 1);
}

module.exports = power;
