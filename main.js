/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const arrayX = x.toString().split("");

  for (let head = 0, tail = arrayX.length - 1; head < arrayX.length; head++) {
    if (arrayX[head] === arrayX[tail]) {
      tail--;
    } else {
      return false;
    }
  }

  return true;  
};

console.log(isPalindrome(1212));
