// Ques:-1 Subsets II Lt:-90
function solve(nums,ans,curr,i) {
  if (i === nums.length) {
    ans.push([...curr])
    return 
  }

  //pick
  curr.push(nums[i])
  solve(nums, ans, curr, i+1)
  curr.pop()
  //not pick
  while (i + 1 < nums.length && nums[i] == nums[i + 1]) {
    i++
  }
  solve(nums, ans, curr, i+1);
}
function subset(nums) {
  nums.sort((a, b) => a - b);
  let ans = []
  let curr = []
  solve(nums, ans, curr, 0)
  return ans
}
console.log(subset([1, 2, 2]));



// Ques:- 2 Letter combination of phone numbers Lt:- : 17
function solve(nums, ans, curr, i, map) {
  if (i === nums.length) {
    if (curr.length > 0) {
      ans.push(curr)
    }
    return
  }

  let temp = map.get(nums[i])
  for (let j = 0; j < temp.length; j++){
    solve(nums,ans,curr+temp.charAt(j),i+1,map)
  }
}
function combinationLetter(nums) {
  let map = new Map()
  let ans = []
  let curr = ""
  map.set("2","abc")
  map.set("3","def")
  map.set("4","ghi")
  map.set("5","jkl")
  map.set("6","mno")
  map.set("7","pqrs")
  map.set("8","tuv")
  map.set("9","wxyz")
  solve(nums, ans, curr, 0, map)
  return ans
}
console.log(combinationLetter("23"))



//Ques:3 Combination Sum

function solve(nums,ans,curr,i,target) {
  if (i == nums.length) {
    if (target == 0) ans.push([...curr])
    return
  }

  if (nums[i] <= target) {
    curr.push(nums[i])
    solve(nums, ans, curr, i, target - nums[i])
    curr.pop()
  }
  solve(nums,ans,curr,i+1,target)
}
function combination(nums,target) {
  let ans = []
  let curr = []
  solve(nums, ans, curr, 0, target)
  return ans
}

console.log(combination([2,3,6,7],7))