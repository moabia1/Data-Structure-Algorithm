// let size = Number(prompt("Enter inner array size"));
// let arr = new Array(size);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = new Array(4);
// }
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     arr[i][j] = Number(prompt("Enter array element"));
//   }
// }
// console.log(arr);

//**************** Diagonal Sum *****************************/

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 6]
]

let leftSum = 0;
let rightSum = 0;

for (let i = 0; i < arr.length; i++){
  for (let j = 0; j < arr[i].length; j++){
    if (i == j) {
      leftSum += arr[i][j]
    }
    if (i + j == arr.length - 1) {
      rightSum += arr[i][j]
    }
  }
}
console.log(leftSum);
console.log(rightSum);
