// Ques :- 1 Subsets Lt:- 78

let arr = [1, 2, 3];
function solve(arr,ans,cur,i) {
  if (i === arr.length) {
    ans.push([...cur]);
    return
  }
  //pick
  cur.push(arr[i]);
  solve(arr, ans, cur, i + 1);
  cur.pop();
  //not pick
  solve(arr, ans, cur, i + 1);
}
function subset(arr) {
  let ans = []
  let cur = []
  solve(arr, ans, cur, 0);
  return ans
}
console.log(subset(arr))




// Ques-2 Power Set Gfg
let s = "abc";
function solve(s, ans, curr, i){
  if (i === s.length) {
    if (curr.length != 0) {
      ans.push(curr)
    }
    return
  }

  //pick
  curr += s[i];
  solve(s, ans, curr, i + 1);
  curr = curr.substring(0, curr.length - 1);
  solve(s, ans, curr, i + 1);
}
function AllPossibleStr(s) {
  let ans = []
  let curr = "";
  solve(s,ans,curr,0)
  ans.sort();
  return ans
}
console.log(AllPossibleStr(s));




// Ques:-3 Permutations

function solve(nums,ans,curr,isVis,i) {
  if (i == nums.length) {
    ans.push([...curr])
    return
  }

  for (let j = 0; j < nums.length; j++){
    if (!isVis[j]) {
      curr.push(nums[j])
      isVis[j] = true
      solve(nums, ans, curr, isVis, i + 1);
      isVis[j] = false
      curr.pop()
    }
  }
}

function permute(nums) {
  let ans = []
  let curr = []
  let isVis = new Array(nums.length).fill(0);
  solve(nums, ans, curr, isVis, 0);
  return ans
}