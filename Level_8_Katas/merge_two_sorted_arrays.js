//You are given two sorted arrays that contain only integers. Your task is to find a way to merge them into a single one, sorted in ascending order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

//You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

//Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

function mergeArrays(arr1, arr2) {
  combinedArray = [...arr1, ...arr2];
  console.log(combinedArray);
  combinedArray.sort((a, b) => a - b);
  let unique_array = combinedArray.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
  });
  return unique_array;
}

console.log(mergeArrays([1, 3, 5, 3, 6], [7, 72, 3, 2, 2]));