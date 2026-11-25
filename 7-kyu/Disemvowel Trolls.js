function disemvowel(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toUpperCase();
    if (char !== "A" && char !== "E" && char !== "O" && char !== "I" && char !== "U") {
      result += str[i];
    }
  }
  return result;
}
