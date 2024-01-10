function sum(fromN, toN) {
  if (fromN >= toN) {
    return fromN;
  }

  let result = fromN + sum(fromN + 1, toN);

  return result;
}

module.exports = sum;
