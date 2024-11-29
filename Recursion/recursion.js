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

console.log(reverse2("awesome")); // 'emosewa'
console.log(reverse2("rithmschool")); // 'loohcsmhtir'
