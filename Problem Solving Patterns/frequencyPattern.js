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

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
