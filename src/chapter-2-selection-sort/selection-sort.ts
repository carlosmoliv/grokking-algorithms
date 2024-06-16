export const selectionSort = (inputArray: number[]) => {  
  for (let i = 0; i < inputArray.length - 1; i++) {
    let smallestIndex = i

    for (let j = i + 1; j < inputArray.length; j++) {
      if (inputArray[j] < inputArray[smallestIndex]) {
        smallestIndex = j
      }
    }

    const temp = inputArray[i]
    inputArray[i] = inputArray[smallestIndex]
    inputArray[smallestIndex] = temp
  }

  return inputArray
};

// [5, 3, 6, 2, 10]

// Stores the smallest value
// Stores the index of the smallest value
// Sorts an array
// Find the smallest element in the array, and adds it to the new array
