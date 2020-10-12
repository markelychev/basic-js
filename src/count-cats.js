const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  matrix.forEach((element) => {
    element.forEach((item) => (counter += item == "^^" ? 1 : 0));
  });
  return counter;
};
