/*
const repeatString = function(string, num) {
  if (num < 0) {
    return "ERROR";
  } else {
    return string.repeat(num);
  }
};
*/



const repeatString = function(string, num) {
  let tries = num;
  let result = "";
  if (num < 0) {
    return "ERROR"
  } else {
    for (let num = 0; num < tries; num++) {
      result += string;
      }
    return result ;
  }
};




// Do not edit below this line
module.exports = repeatString;
