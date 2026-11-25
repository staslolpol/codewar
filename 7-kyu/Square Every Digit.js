function squareDigits(num) {
  let result = "";
  let str = String(num);

  for (let i = 0; i < str.length; i++) {
    let digit = Number(str[i]);
    result += digit * digit;
  }

  return Number(result);
}
