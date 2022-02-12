const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  let arrayLength = array.length;
  if (arrayLength < 2) {
    return array;
  }
  for (let i = 1; i < arrayLength; i++) {
    for (let j = i; j >= 0; j--) {
      if (array[j] < array[j-1]) {
        [array[j], array[j-1]] = [array[j-1], array[j]]
      } else {
        break;
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);

