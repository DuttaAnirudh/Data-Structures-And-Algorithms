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
