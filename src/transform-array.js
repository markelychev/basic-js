const CustomError = require("../extensions/custom-error");
// --discard-next исключает следующий за ней элемент исходного массива из преобразованного массива.
// --discard-prev исключает предшествующий ей элемент исходного массива из преобразованного массива.
// --double-next удваивает следующий за ней элемент исходного массива в преобразованном массиве.
// --double-prev удваивает предшествующий ей элемент исходного массива в преобразованном массиве.
module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  let res = [];
  arr.reduce((prev, curr) => {
    if (curr == "--discard-next") {
      return curr;
    }
    if (curr == "--discard-prev") {
      if (prev !== '') {
        res.pop();
      }
      return curr;
    }
    if (curr == "--double-next") {
      return curr;
    }
    if (curr == "--double-prev") {
      if (prev !== "") {
        res.push(prev);
      }
      return curr;
    }
    if (prev == "--double-next") {
      if (prev !== "") {
        res.push(curr);
      }
    }
    if (prev == "--discard-next") {
      return "";
    }
    res.push(curr);
    return curr;
  }, "");
  return res;
};