const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let counter = array.length;
  while (counter > 0) {
    for (let i = 0; i < counter - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i+1]] = [array[i+1], array[i]];
      }
    }
    counter--;
  }
}

bubbleSort(numbers);
console.log(numbers);