function repeat(str, count) {
  if (count < 0) return "Invalid times";
  return Array(count)
    .fill(0)
    .map(() => str)
    .join("");
}

module.exports = repeat;
