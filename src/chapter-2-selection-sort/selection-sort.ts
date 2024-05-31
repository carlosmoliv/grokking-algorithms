export const selectionSort = (inputArray: number[]) => {
  for (let i = 0; i < inputArray.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < inputArray.length; j++) {
      if (inputArray[j] < inputArray[min]) {
        min = j;
      }
    }

    const temp = inputArray[i];
    inputArray[i] = inputArray[min];
    inputArray[min] = temp;
  }

  return inputArray;
};

// export class SelectionSort {
//   static sort(arr: number[]): number[] {
//     if (arr.length === 0) throw new Error("Array is empty");
//     let newArray = [...arr];
//     let sortedArray = [];

//     for (let i = 0; i < arr.length; i++) {
//       // Finds the smallest element in the array, and adds it to the new array
//       const smallestIndex = this.findSmallest(newArray);
//       sortedArray.push(newArray.splice(smallestIndex, 1)[0]);
//     }
//     return sortedArray;
//   }

//   private static findSmallest(arr: number[]): number {
//     // Stores the smallest value
//     let smallest = arr[0];

//     // Stores the index of the smallest value
//     let smallestIndex = 0;
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < smallest) {
//         smallest = arr[i];
//         smallestIndex = i;
//       }
//     }
//     return smallestIndex;
//   }
// }
