function getOrdinalNumber(num) {
  if (num === 11) return "11th";
  else if (num === 12) return "12th";
  else if (num === 13) return "13th";
  numLast = num.toString().slice(-1);
  if (numLast === "1") return `${num}st`;
  else if (numLast === "2") return `${num}nd`;
  else if (numLast === "3") return `${num}rd`;
  else return `${num}th`;
}

module.exports = getOrdinalNumber;
