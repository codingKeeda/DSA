console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

function mergeSortedArrays(arr1, arr2) {
  const mergedArrays = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 0;
  let j = 0;
  while (arr1Item || arr2Item) {
    if (arr1Item === undefined) {
      return mergedArrays.concat(arr2.slice(j));
    }
    if (arr2Item === undefined) {
      return mergedArrays.concat(arr1.slice(i));
    }
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArrays.push(arr1Item);
      i++;
      arr1Item = arr1[i];
    } else {
      mergedArrays.push(arr2Item);
      j++;
      arr2Item = arr2[j];
    }
  }
}