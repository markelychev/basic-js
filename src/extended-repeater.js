const CustomError = require("../extensions/custom-error");

module.exports =
function repeater(str, options) {
  if (str == 'STRING_OR_DEFAULT'){
    console.log(typeof (str) );
  }
  let res = "";
  const s = String(str);
  let repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || "+";
  let addition = options.addition !== undefined ? String(options.addition) : "";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || "|";
  
  for (repeatTimes; repeatTimes > 0; repeatTimes--) {
    res += s;
    for (let i = additionRepeatTimes; i > 0; i--) {
      res += addition;
      
      if (i > 1) {
        res += additionSeparator;
      }
    }
    if (repeatTimes > 1) {
      res += separator;
    }
  }
  
  
  return res || res + s + addition;
}