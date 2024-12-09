// 80. Insertion Sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let index = i;
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      index = j;
      console.log("Inner Loop", arr);
    }
    arr[index] = currentVal;
    console.log("UPDATE: -----");
    console.log(arr);
  }
  return arr;
}

console.log([2, 1, 9, 76, 4]);
console.log(insertionSort([2, 1, 9, 76, 4]));
