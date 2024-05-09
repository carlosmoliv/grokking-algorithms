export class SelectionSort {
  static sort(arr: number[]): number[] {
    if (arr.length === 0) throw new Error("Array is empty");
    let newArray = [...arr];
    let sortedArray = [];

    for (let i = 0; i < arr.length; i++) {
      const smallestIndex = this.findSmallest(newArray); // Finds the smallest element in the array, and adds it to the new array
      sortedArray.push(newArray.splice(smallestIndex, 1)[0]);
    }
    return sortedArray;
  }

  private static findSmallest(arr: number[]): number {
    let smallest = arr[0]; // Stores the smallest value
    let smallestIndex = 0; // Stores the index of the smallest value

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
        smallestIndex = i;
      }
    }
    return smallestIndex;
  }
}