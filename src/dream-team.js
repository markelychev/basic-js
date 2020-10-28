//const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !members.length) return false;
  return members
    .filter((member) => typeof member == "string")
    .map((member) => member.replace(/\s/g, "").slice(0, 1).toUpperCase())
    .sort()
    .join("");
};
