// Naive Solution
// O(N^2)
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;

    arr2.splice(correctIndex, 1);
  }
  return true;
}

// REFACTORED
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  //  Creating 2 empty objects
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  //  Updatings objects with item as key and their number of occurence as value
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    //   Check if the square of the key is present in the other object.
    //   If NOT, return false
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    //   Check if the square of the key also has the same value(number of occurence).
    //   If NOT, return false
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

function validAnagram1(str1, str2) {
  // Check length os strings
  if (str1.length !== str2.length) return false;

  // create an 2 arrays out of the charectors both strings
  const arr1 = str1.split("");
  const arr2 = str2.split("");

  // console.log(arr1);
  // console.log(arr2);

  // create 2 empty objects
  const freqCount1 = {};
  const freqCount2 = {};

  for (let val of arr1) {
    freqCount1[val] = (freqCount1[val] || 0) + 1;
  }

  for (let val of arr2) {
    freqCount2[val] = (freqCount2[val] || 0) + 1;
  }
  // console.log(freqCount1);
  // console.log(freqCount2);
  // we count frequency of each element in array and create a key-value pair inside respective object where key is charector and value is number of occurence
  for (let key in freqCount1) {
    if (!(key in freqCount2)) return false;
    if (!(freqCount1[key] === freqCount2[key])) return false;
  }
  // if the number of occurence of all the keys don't match in object we return false else true
  return true;
}
function validAnagram(str1, str2) {
  // Check length os strings
  if (str1.length !== str2.length) return false;

  // create an empty object
  const lookup = {};

  // loop through first string and create a key value pair of charectar and its number of occurence
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  // loop through second string check if the charector exists as key in firstLookUp obj
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    // If NO, return false
    if (!lookup[letter]) {
      return false;
    }
    // If YES, subtract 1 from that letter's occuerence
    else lookup[letter] -= 1;
  }

  // if the number of occurence of all the keys don't match in object we return false else true
  return true;
}

// console.log(validAnagram("", ""));
// console.log(validAnagram("aaz", "zza"));
// console.log(validAnagram("anagram", "nagaram"));
// console.log(validAnagram("rat", "car"));
// console.log(validAnagram("awesome", "awesom"));
// console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"));
// console.log(validAnagram("qwerty", "qeywrt"));
// console.log(validAnagram("texttwisttime", "timetwisttext"));

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return ++i;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

// SLIDING WINDOW PATTERN
function maxSubArraySum(arr, num) {
  if (arr.length === 0) return null;

  let maxsum = 0; // max sum possible
  let tempsum = 0; // current sum

  // calculating sum of first n(num) elements in array(arr)
  for (let i = 0; i < num; i++) {
    maxsum += arr[i];
  }

  // saving temp sum as max sum
  tempsum = maxsum;

  // looping over next n(num) elements in array
  for (let i = num; i < arr.length; i++) {
    // subtracting prev n from arr and adding next n from arr
    // [1,2,3,4]
    // 1+2+3 = 6 (1+2+3)
    // 2 + 3 - 1 + 4 = 2 + 3 + 4 = 9
    tempsum = tempsum - arr[i - num] + arr[i];

    // checking if current sum is greater than 'maxsum'.
    // if YES, saving current sum as 'maxsum'
    maxsum = Math.max(maxsum, tempsum);
  }

  // return the maxsum
  return maxsum;
}

// console.log(maxSubArraySum([1, 10, 3, 4, 5], 2));

function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((max + min) / 2);

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else return middle; // zero based position
  }

  return -1;
}

// console.log(
//   search([1, 2, 3, 4, 5, 65, 78, 94, 125, 235, 458, 965, 1212, 5454], 1212)
// );

// O(n)
// function sameFrequency1(num1, num2) {
//   // Converting numbers into strings
//   const firstNum = num1.toString();
//   const secondNum = num2.toString();

//   // If both  the numbers don't have the same length, return false
//   if (firstNum.length !== secondNum.length) return false;

//   // Create an array out of each Number
//   const arr1 = firstNum.split("");
//   const arr2 = secondNum.split("");

//   // Create 2 empty objects
//   const obj1 = {};
//   const obj2 = {};

//   // Create a key value pair of the number and its number of occurence inside each object
//   for (let val of arr1) {
//     obj1[val] = (obj1[val] || 0) + 1;
//   }

//   for (let val of arr2) {
//     obj2[val] = (obj2[val] || 0) + 1;
//   }

//   // Compare key-value pairs of each object
//   for (let key in obj1) {
//     // If both the objects do NOT have same keys, return false
//     if (!obj2[key]) return false;

//     // If keys of both the objects dont have same have, return false
//     if (obj1[key] !== obj2[key]) return false;
//   }

//   return true;
// }

// O(n)
function sameFrequency2(num1, num2) {
  // Converting numbers into strings
  const firstNum = num1.toString();
  const secondNum = num2.toString();

  // If both  the numbers don't have the same length, return false
  if (firstNum.length !== secondNum.length) return false;

  // Create an array out of each Number
  const arr1 = firstNum.split("");
  const arr2 = secondNum.split("");

  // Create an empty objects
  const lookup = {};

  for (let val of arr1) {
    lookup[val] = (lookup[val] || 0) + 1;
  }

  for (let val of arr2) {
    if (!lookup[val]) {
      return false;
    } else {
      lookup[val] -= 1;
    }
  }

  return true;
}

// console.log(sameFrequency2(182, 281)); // true
// console.log(sameFrequency2(34, 14)); // false
// console.log(sameFrequency2(3589578, 5879385)); // true
// console.log(sameFrequency2(22, 222)); // false

// O(nLogn)
function areThereDuplicates(...nums) {
  const arr = nums.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let start = 0;
  let next = 1;

  while (next < arr.length) {
    if (arr[start] === arr[next]) return true;

    start++;
    next++;
  }
  return false;
}

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates("a", "b", "c", "a")); // true

function averagePair(arr, targetAvg) {
  if (arr.length === 0) return false;

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // find the 2 elements in the arr
    let avg = (arr[start] + arr[end]) / 2;

    // if avg is same as target average return true
    if (avg === targetAvg) return true;
    // if avg is less than target avg, take next element from the start while keeping the element from end the same
    // We are doing this because for eg: [1,4,6,8,10]
    // We need to find pair which has an avg of 6
    // Avg of 1 + 10 is 5.5 --> 5.5 is less than required avg of 6. Thus we need to add something more to increase the avg.
    // Thus we take next element from left since we are looping through a sorted array and if we take next element from left,
    // it would be a bigger number than the previous one
    else if (avg < targetAvg) start++;
    // BUT, if the avg is more than required avg, we the avg to reduce thus we need a smaller number from right.
    // So we would be taking the previous number to the current highest number in the sum
    else end--;
  }
  return false;
}

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

// Iterative
// O(n)
function isSubsequence1(str1, str2) {
  if (!str1) return false;

  let i = 0;
  let j = 0;

  // We run a loop where we check
  // - if an element of str1 is present in str2
  // While looping we increment 'i' and 'j'
  // we increment 'i' by 1 when an element at position 'j' in str2 matches element ar position 'i' in str1
  // we increment 'j' at the end of every loop

  // IDEA: The idea behind this looping is, as the loop starts both i and j are at zero. We are currently looking for the first element of str1 in str2.
  //       After every loop, j get incremented by 1 so that in the next loop we try to match next element of str2 to first element of str1.
  //       As soon as we find the first el of str1 in str2, we increment i by 1.
  //       Now we start looking for second element of str1 in str2 but the position from which the lookup starts in str2 is not zero. This is bcz we
  //       need the second charector to appear after the first charector since order is a must.
  //       This process continues untill either 3 of the following conditions is true
  //       1. We have looped through all the elements of str2 and i !== str1.length
  //       2. We have looped through all the elements of str2 and i === str1.length
  //       3. value of i is same as length of str1(i === str1.length)
  //
  //       In the first case we return false because i is not the same length as str1 which signifies that there was a element in str2 which did not follow the order of str1
  //       In the second and third case we return true, since we have already found all the letters in the second array in same order as first.

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }

  // If i !== str1.length, return false
  return false;
}
// console.log(isSubsequenc1("hello", "hello world")); // true
// console.log(isSubsequenc1("sing", "sting")); // true
// console.log(isSubsequenc1("abc", "abracadabra")); // true
// console.log(isSubsequenc1("abc", "acb")); // false (order matters)

// recursive
// Space Complexity: !O(1)
function isSubsequence2(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;

  if (str1[0] === str2[0]) return isSubsequence2(str1.slice(1), str2.slice(1));

  return isSubsequence2(str1, str2.slice(1));
}

// console.log(isSubsequence2("hello", "hello world")); // true
// console.log(isSubsequence2("sing", "sting")); // true
// console.log(isSubsequence2("abc", "abracadabra")); // true
// console.log(isSubsequence2("abc", "acb")); // false (order matters)

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxsum = 0;
  let curSum = 0;

  for (let i = 0; i < num; i++) {
    maxsum += arr[i];
  }

  curSum = maxsum;

  for (let i = num; i < arr.length; i++) {
    curSum = curSum - arr[i - num] + arr[i];
    maxsum = Math.max(maxsum, curSum);
  }

  return maxsum;
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null

function minSubArrayLen(arr, num) {
  let curSum = 0; // current sum of the window
  let start = 0; // start of sliding window
  let end = 0; // end of sliding window
  let minLen = Infinity; // min subarray(window) length

  while (start < arr.length) {
    // Expanding the current window
    // if current window doesn't add up to the given 'num' then
    // add the number to the curSum
    // move the current window to right
    if (curSum < num && end < arr.length) {
      curSum += arr[end];
      end++;
    }
    // Shrinking the current window
    // if current window sum(curSum) adds up to at least the 'num' given
    else if (curSum >= num) {
      minLen = Math.min(minLen, end - start);
      curSum -= arr[start];
      start++;
    }
    // when current total is less than required total but we reach the end, we need the loop to stop or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // console.log("CHAR", char);
    // console.log(start);
    // console.log("i :", i);

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    // console.log(start);
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    console.log("LONGEST:", longest);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
    // console.log(seen);
    // console.log("-------");
  }

  return longest;
}

// console.log(findLongestSubstring("")); // 0
// console.log(findLongestSubstring("abc")); // 3
// console.log(findLongestSubstring("rithmschool")); // 7
// console.log(findLongestSubstring("thisisawesome")); // 6
// console.log(findLongestSubstring("thecatinthehat")); // 7
// console.log(findLongestSubstring("bbbbbb")); // 1
// console.log(findLongestSubstring("longestsubstring")); // 8
// console.log(findLongestSubstring("thisishowwedoit")); // 6
