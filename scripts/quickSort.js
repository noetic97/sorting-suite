function quickSort(array) {
  let left = [];
  let right = [];
  let pivot = array[0]

  if (array.length < 2) {
    return array;
  }

  for (let i = 1; i < array.length; i++) {
    if (pivot > array[i]) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  left = quickSort(left);
  right = quickSort(right);

  return [...left, pivot, ...right]
}

export default quickSort;
