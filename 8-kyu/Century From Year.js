function century(year) {
  return year > 0 ? Math.trunc((year + 99) / 100) :  Math.trunc((-year + 99) / 100);
}
