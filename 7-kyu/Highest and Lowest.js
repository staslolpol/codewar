function highAndLow(numbers) {
  let str = numbers.split(" ").map(Number);
  let min = str[0];
  let max = str[0];

  for (let i = 0; i < str.length; i++) {
    if (str[i] > max) {
      max = str[i];
    }
    if (str[i] < min) {
      min = str[i];
    }
  }

  return max + " " + min;
}
