let arr = [
  298, 444, 146, 912, 530, 58, 121, 499, 227, 51, 671, 533, 565, 827, 923, 9,
  160, 63, 222, 232, 914, 413, 962, 126, 697, 517, 918, 398, 557, 380, 551, 449,
  909, 974, 528, 198, 947, 604, 779, 171, 610, 911, 731, 938, 546, 821, 138,
  163, 166, 208, 742, 351, 382, 687, 31, 278, 118, 769, 117, 229, 598, 687, 156,
  991, 48, 426, 733, 717, 570, 161, 2, 860, 783, 518, 240, 70, 534, 851, 626,
  571, 529, 394, 832, 897, 21, 329, 627, 531, 417, 627, 18, 53, 920, 285, 479,
  664, 392, 473, 210, 233,
];

// 冒泡排序
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
// bubbleSort(arr);

// 简单 快速排序
function quickSort(arr) {
  if (arr === null || arr.length === 0) return [];
  let leader = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (leader > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  left = quickSort(left);
  right = quickSort(right);
  return [...left, leader, ...right];
}

/**
 * 标准快排
 * @param {*} arr
 */
function normQuickSort(arr, begin, end) {
  if (begin >= end - 1) return;
  let left = begin;
  let right = end;
  do {
    do left++;
    while (left < right && arr[left] < arr[begin]);
    do right--;
    while (right > left && arr[right] > arr[begin]);
    if (left < right) swap(arr, left, right);
  } while (left < right);
  const point = left === right ? right - 1 : right;
  swap(arr, begin, point);
  normQuickSort(arr, begin, point);
  normQuickSort(arr, point + 1, end);
}

function swap(array, start, end) {
  let temp = array[start];
  array[start] = array[end];
  array[end] = temp;
}
normQuickSort(arr, 0, arr.length);
console.log(arr);
