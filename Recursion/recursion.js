// Pure Recursion
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

/******************************/

function power(num, pow) {
  if (pow === 1) return num;
  if (pow === 0) return 1;

  return num * power(num, pow - 1);
}

// console.log(power(2, 0)); // 1
// console.log(power(2, 2)); // 4
// console.log(power(2, 4)); // 16

/******************************/
function factorial(num) {
  if (num <= 1) return 1;

  return num * factorial(num - 1);
}

// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(4)); // 24
// console.log(factorial(7)); // 5040

/******************************/
function productOfArray(arr) {
  if (arr.length === 1) return arr[0];

  return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60

/******************************/

function recursiveRange(num) {
  if (num <= 1) return 1;

  return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(6)); // 21
// console.log(recursiveRange(10)); // 55

/******************************/

function fib1(num) {
  if (num <= 2) return 1;
  return fib1(num - 1) + fib1(num - 2);
}

function fib2(num, memo = {}) {
  if (num in memo) return memo[num];

  if (num <= 2) return 1;

  console.log(memo);
  memo[num] = fib2(num - 1, memo) + fib2(num - 2, memo);
  console.log(memo);

  return memo[num];
}

// console.log(fib2(4)); // 3
// console.log(fib2(10)); // 55
// console.log(fib2(28)); // 317811
// console.log(fib2(35)); // 9227465

function reverse1(str) {
  if (str.length <= 1) return str;

  return str[str.length - 1] + reverse1(str.slice(0, -1));
}

function reverse2(str) {
  if (str.length <= 1) return str;

  return reverse2(str.slice(1)) + str[0];
}

// console.log(reverse2("awesome")); // 'emosewa'
// console.log(reverse2("rithmschool")); // 'loohcsmhtir'

function isPalindrome(str) {
  if (str[0] !== str[str.length - 1]) return false;

  if (str.length <= 1) return true;

  return isPalindrome(str.slice(1, -1));
}

// console.log(isPalindrome("awesome")); // false
// console.log(isPalindrome("foobar")); // false
// console.log(isPalindrome("tacocat")); // true
// console.log(isPalindrome("amanaplanacanalpanama")); // true
// console.log(isPalindrome("amanaplanacanalpandemonium")); // false

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, condition) {
  if (arr.length === 0) return false;

  if (condition(arr[0])) return true;

  return someRecursive(arr.slice(1), condition);
}

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], isOdd)); // false
// console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

function flatten(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else newArr.push(arr[i]);
  }
  return newArr;
}

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

function capitalizeFirst(arr) {
  if (arr.length === 1) return [arr[0][0].toUpperCase() + arr[0].slice(1)];

  const res = capitalizeFirst(arr.slice(0, -1));

  const string =
    arr.slice(arr.length - 1)[0][0].toUpperCase() +
    arr.slice(arr.length - 1)[0].substr(1);

  res.push(string);

  return res;
}

// console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']

function capitalizeWords(arr) {
  if (arr.length === 1) return [arr[0].toUpperCase()];

  const res = capitalizeWords(arr.slice(0, -1));

  const string = arr.slice([arr.length - 1])[0].toUpperCase();

  res.push(string);

  return res;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
