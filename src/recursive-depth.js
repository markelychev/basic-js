const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        let elDepth = this.calculateDepth(element);
        if (elDepth > depth) {
          depth = elDepth;
        }
        if (depth - elDepth == 0) {
          depth += 1;
        }
      }
    });
    return depth;
  }
};
