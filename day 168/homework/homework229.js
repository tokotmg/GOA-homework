function generateRange(min, max, step) {
  let result = [];
  for (let i = min; i <= max; i += step) {
    result.push(i);
  }
  return result;
}
function switchItUp(number) {
  const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  return words[number];
}
function multiply(a, b){
  return a * b
}
function noSpace(x){
  return x.replace(/\s/g, '');
}
function expressionMatter(a, b, c) {
    return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c
  );
}