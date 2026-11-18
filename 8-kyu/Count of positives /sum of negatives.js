function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }

  let count_n = 0;
  let count_p = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      count_n += input[i];
    } else if (input[i] > 0) {
      count_p++;
    }
  }

  return [count_p, count_n];
}
