function solve(s){
 let uc = 0, lc = 0, num = 0, sp = 0;
  for (let char of s) {
    if (/[A-Z]/.test(char)) uc++;
    else if (/[a-z]/.test(char)) lc++;
    else if (/[0-9]/.test(char)) num++;
    else sp++;
  }
  return [uc, lc, num, sp];
}
function sumOfN(n) {
  let result = [];
  let currentSum = 0;
  for (let i = 0; i <= Math.abs(n); i++) {
    currentSum += (n < 0 ? -i : i);
    result.push(currentSum);
  }
  return result;
}
function twistedSum(n) {
  let totalSum = 0;
  for (let i = 1; i <= n; i++) {
    totalSum += [...String(i)].reduce((acc, digit) => acc + Number(digit), 0);
    }
  return totalSum;
}
function removeParentheses(s){
  let result = "";
  let count = 0;
  for (let char of s) {
    if (char === "(") {
      count++;;
    } else if (char === ")") {
      count--;
    } else if (count === 0) {
      result += char;
    }
  }
  return result;
}