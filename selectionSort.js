const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 284];

function selectionSort(array) {
  let arrayLength = array.length;
  for (let i = 0; i < arrayLength - 1; i++) {
    let minElementIndex = i;
    for (let j = i + 1; j < arrayLength; j++) {
      if (array[j] < array[minElementIndex]) {
        minElementIndex = j;
      }
    }
    if (array[i] !== array[minElementIndex]) {
      [array[i], array[minElementIndex]] = [array[minElementIndex], array[i]];
    }
  }
  return array;
}

console.log(selectionSort(numbers));