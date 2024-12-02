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
// console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

// [0,0,0,0,0]
// [-1,0,0,0,0,0,1]

//

var findMedianSortedArrays = function (nums1, nums2) {
  const newArr = nums1.concat(nums2).sort((a, b) => a - b);

  console.log(newArr);
  console.log(newArr.length);
  // console.log(newArr[6], newArr[7]);
  console.log(newArr.length % 2 !== 0);
  console.log(Math.ceil(newArr.length / 2) - 1);
  if (newArr.length === 1) return newArr[0];

  let median;

  if (newArr.length % 2 !== 0) {
    console.log("this cond");
    median = newArr[Math.floor(newArr.length / 2)];
  } else {
    median =
      (newArr[Math.ceil(newArr.length / 2) - 1] + newArr[newArr.length / 2]) /
      2;
  }

  return median;
};

// console.log(findMedianSortedArrays([0, 0, 0, 0, 0], [-1, 0, 0, 0, 0, 0, 1]));
// console.log(findMedianSortedArrays([2, 2, 4, 4], [2, 2, 2, 4, 4]));
// console.log(findMedianSortedArrays([3], [-2, -1]));

// function nestedEvenSum(obj, sum = 0) {
//   let newSum = sum;
//   const entries = Object.entries(obj);
//   const total = entries.length;
//   console.log("Total: ", total);
//   let index = 0;
//   if (index === total) return 0;

//   for (const [key, value] of entries) {
//     if (typeof value === "number" && value % 2 === 0) {
//       newSum += value;
//       index++;
//       console.log("Value:", value);
//       console.log("New Sum: ", newSum);
//     } else if (typeof value !== "number" && typeof value !== "object") {
//       return 0;
//     } else {
//       console.log(`Object: { ${key}: ${value} }`);
//       index++;
//       newSum += nestedEvenSum(value, newSum);
//     }
//   }

//   return newSum;
// }

function nestedEvenSum(obj, sum = 0) {
  let newSum = sum;
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      newSum += nestedEvenSum(obj[key], sum);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0)
      newSum += obj[key];
  }
  return newSum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10

function stringifyNumbers(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66,
//     },
//   },
// };

// console.log(stringifyNumbers(obj));

// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }

function collectStrings(obj) {
  let strArray = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strArray.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      strArray = strArray.concat(collectStrings(obj[key]));
    }
  }

  return strArray;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

// console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
