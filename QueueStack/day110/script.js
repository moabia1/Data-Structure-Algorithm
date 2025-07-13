// Ques:-1 Next greater Element

// let arr = [1, 3, 2, 5, 4];
// function nextGreater(arr) {
//   let st = []
//   let ans = []
//   for (let i = arr.length - 1; i >= 0; i--){
//     while (st.length != 0 && st[st.length - 1] <= arr[i]) {
//       st.pop();
//     }
//     if (st.length == 0) ans[i] = -1
//     else ans[i] = st[st.length - 1];
//     st.push(arr[i]);
//   }
//   return ans;
// }
// console.log(nextGreater(arr));



// Ques:-2 Stock span problem
// let arr = [100, 80, 60, 70, 60, 75, 85];
// let st = []




// Ques:-3 Largest Rectangle in Histogram Lt:-84
let heights = [2, 1, 5, 6, 2, 3];
function histogram(arr) {
  let n = arr.length;
  let left = new Array(n) 
  let right = new Array(n)
  let st = []
  let ans = 0;

  for (let i = 0; i < n; i++){
    while (st.length > 0 && arr[st[st.length - 1]] >= arr[i]) {
      st.pop()
    }
    if (st.length == 0) left[i] = -1;
    if (arr[st[st.length - 1]] < arr[i]) {
      left[i] = st[st.length - 1];
    }
    st.push(i)
  }
  st = [];
  for (let i = n - 1; i >= 0; i--){
    while (st.length > 0 && arr[st[st.length - 1]] >= arr[i]) {
      st.pop();
    }
    if (st.length == 0) right[i] = arr.length;
    if (arr[st[st.length - 1]] < arr[i]) {
      right[i] = st[st.length - 1];
    }
    st.push(i)
  }

  for (let i = 0; i < arr.length; i++){
    let area = arr[i] * (right[i] - left[i]-1);
    ans = Math.max(ans, area);
  }
  return ans;
}
console.log(histogram(heights));



// Ques:-4 Maximal Rectangle Lt:-85
let matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];
function largestRectangleArea(matrix) {
  let n = matrix[0].length;
  let ans = new Array(n).fill(0);
  let maxVal = 0;
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      if (matrix[i][j] == "0") {
        ans[i] = 0;
      } else {
        ans[i] += parseInt(matrix[i][j]);
      }
    }
    let val = histogram(ans);
    maxVal = Math.max(maxVal, val);
  }
  return maxVal;
}
console.log(largestRectangleArea(matrix));