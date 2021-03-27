const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members)) {
    return false;
  }
  let name = [];
  members.forEach(function (member) {
    if (typeof member == "string") name.push(member.trim()[0].toUpperCase());
  });
  return name.sort().join("");
};
