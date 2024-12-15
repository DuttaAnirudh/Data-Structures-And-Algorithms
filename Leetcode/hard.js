/**
 * 04.) Median of Two Sorted Arrays
 **/

// var findMedianSortedArrays = function (nums1, nums2) {
//   let newArr = [...nums1, ...nums2]

//   if (newArr.length === 1) return newArr[0];

//   newArr = newArr.sort((a, b) => a - b);

//   if (newArr.length % 2 !== 0) return newArr[Math.floor(newArr.length / 2)];

//   return (newArr[Math.ceil(newArr.length / 2) - 1] + newArr[newArr.length / 2]) / 2;
// }

var findMedianSortedArrays = function (nums1, nums2) {
  let len1 = nums1.length,
    len2 = nums2.length;
  let totalLength = len1 + len2;
  let medianIndex = Math.floor((totalLength - 1) / 2); // index for the median

  let i = 0,
    j = 0,
    mergedIndex = -1;
  let last = 0,
    secondLast = 0; // store last two merged values for calculating median

  while (i < len1 || j < len2) {
    let val;
    if (j >= len2 || (i < len1 && nums1[i] <= nums2[j])) {
      val = nums1[i++];
    } else {
      val = nums2[j++];
    }

    mergedIndex++;
    if (mergedIndex === medianIndex) secondLast = val;
    if (mergedIndex === medianIndex + 1) {
      last = val;
      break;
    }
  }

  if (totalLength % 2 === 0) {
    return (secondLast + last) / 2;
  }
  return secondLast;
};
/////////////////////////////////////////////////////////////////
