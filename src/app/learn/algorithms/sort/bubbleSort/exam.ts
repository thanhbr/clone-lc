// Complexities
// Worst Case and Average case time complexity
// If the array is in reverse order then this condition is the worst case and Its time complexity is O(n2).

// Best case time complexity
// If the array is already sorted then it is the best-case scenario and its time complexity is O(n)

// Auxiliary Space: O(1)

export default function bblSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
