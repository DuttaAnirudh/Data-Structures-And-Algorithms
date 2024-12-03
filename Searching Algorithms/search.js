function linearSearch(el, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) return i;
  }
  return -1;
}

// console.log(searchLinear(12, [1, 3, 7, 65, 8441, 12, 84, 34, 12]));

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] < num) {
      start = mid + 1;
    } else if (arr[mid] > num) {
      end = mid - 1;
    } else return mid;
  }

  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     10
//   )
// ); // 2
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     95
//   )
// ); // 16
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     100
//   )
// ); // -1

function naiveSearch(str, subStr) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      // If the current charector of sub string does'nt match the charector of main string, break out of the loop so we jump to next charector in the main string
      if (subStr[j] !== str[i + j]) break;

      if (j === subStr.length - 1) count++;
    }
  }

  return count;
}

// console.log(naiveSearch("lorie loled loled", "lol"));
