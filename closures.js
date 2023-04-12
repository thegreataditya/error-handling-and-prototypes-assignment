function numberChecker(arr) {
  return function (x) {
    if (arr.includes(x)) {
      return true;
    } else {
      return false;
    }
  };
}

const arr = [1, 2, 3, 4, 5];
const checkNum = numberChecker(arr);

console.log(checkNum(3)); //true
console.log(checkNum(6)); //false