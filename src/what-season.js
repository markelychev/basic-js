const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if ({}.toString.call(date).slice(8, -1) !== "Date") throw new Error();
  switch (Math.ceil((date.getMonth() - 1) / 3)) {
    case 1: {
      return "spring";
    }
    case 2: {
      return "summer";
    }
    case 3: {
      return "autumn";
    }
    default: {
      return "winter";
    }
  }
};
