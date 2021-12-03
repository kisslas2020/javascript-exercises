const reverseString = function(str) {
  let array = str.split("");
  const N = array.length;
  let res = "";
  for (let i = N - 1; i >= 0; i--) {
    res += array[i];
  }
  return res;
};

// Do not edit below this line
module.exports = reverseString;
