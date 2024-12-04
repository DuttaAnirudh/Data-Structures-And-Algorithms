// ES5
function swap1(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES6+

function swap2(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function bubbleSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// console.log(bubbleSort1([12, 654, 4, 65, 87, 32]));

// Optimised Version 1
function bubbleSort2(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// console.log(bubbleSort2([12, 654, 4, 65, 87, 32]));

// Optimised Version 2
function bubbleSort3(arr) {
  let noSwapsNeeded; // for arrays that are almost sorted, we break the loop to avoid unncessary operations
  for (let i = arr.length; i > 0; i--) {
    noSwapsNeeded = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        noSwapsNeeded = false;
      }
    }
    if (noSwapsNeeded) break;
  }
  return arr;
}

console.log(bubbleSort3([12, 654, 4, 65, 87, 32]));
