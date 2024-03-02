const arr = [1, 2, 3, 4, 5, 6, 8, 7, 12];
let max = arr[0]; // initialize with the first element

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max); // Output: 12
