// Ques:- 1 Queue Reversal
// let q = [2, 3, 4, 6, 4, 2];
// let st = [];
// while (q.length != 0) {
//   st.push(q.shift());
// }
// while (st.length != 0) {
//   q.push(st.pop())
// }
// console.log(q);




// Ques:- 2 Valid Parenthesis Lt:-20
let s = "({})"
function validParenthesis(s) {
  let st = [];
  let isFlag = true
  
  for (let i = 0; i < s.length; i++){
    let ch = s.charAt(i)
    if (ch == "(" || ch == "{" || ch == "[") {
      st.push(ch);
      continue
    }
    if (ch == ")") {
      if (st[st.length - 1] == "(") {
        st.pop()
      } else {
        isFlag = false
        break;
      }
    }
    if (ch == "}") {
      if (st[st.length - 1] == "{") {
        st.pop()
      } else {
        isFlag = false
        break;
      }
    }
    if (ch == "]") {
      if (st[st.length - 1] == "[") {
        st.pop()
      } else {
        isFlag = false
        break;
      }
    }
  }
  if (st.length != 0) return false;
  return isFlag;
}
console.log(validParenthesis(s))