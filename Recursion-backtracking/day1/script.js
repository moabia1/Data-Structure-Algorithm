// Ques:- 1 Tower Of Hanoi 
//let n = 3;
// function towerOfHanoi(n, s, h, d) {
//   if (n == 1) {
//     console.log("moved 1 from " + s + " to " + d);
//     return
//   }
//   towerOfHanoi(n - 1, s, d, h);
//   console.log("moved " + n + " plate to " + s + " to " + d);
//   towerOfHanoi(n - 1, h, s, d);
// }
// towerOfHanoi(n, "s", "h", "d");


// Ques:- 2  joshephus Problem(find winner of circular game) Lt:-1823
let n = 5, k = 2;

let solve = (k, arr, i) => {
  if (arr.length == 1) return arr[0];
  i = (i + k) % arr.length;
  arr.splice(i, 1);
  return solve(k, arr, i);
}
let findTheWinner = (n,k) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++){
    arr[i] = i + 1;
  }
  k--
  return solve(k, arr, 0);
}
console.log(findTheWinner(n, k));
