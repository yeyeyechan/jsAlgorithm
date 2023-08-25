function solution(number, k) {
  var answer = "";

  let stack = [];
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    while (
      stack.length &&
      Number(stack[stack.length - 1]) < Number(number.at(i)) &&
      count < k
    ) {
      stack.pop();
      count++;
    }
    stack.push(number.at(i));
  }
  answer = stack.join("");
  if (count < k) answer = answer.substring(0, answer.length - (k - count));
  return answer;
}
class Person {
  constructor() {}
}
const obj = new Person();
console.log(obj instanceof Person);
