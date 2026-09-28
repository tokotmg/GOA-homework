var number=function(array){
  return array.map((line, index) => `${index + 1}: ${line}`)
}
function sumArray(array) {
  if (!array || array.length < 3) {
    return 0
  }
  const totalSum = array.reduce((acc, curr) => acc + curr, 0)
  return totalSum - Math.min(...array) - Math.max(...array);
}
function sumStr(a,b) {
  return String(Number(a) + Number(b));
}
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
function moveZeros(arr) {
  const nonZeros = arr.filter(val => val !== 0);
  const zeros = arr.filter(val => val === 0);
  return [...nonZeros, ...zeros];
}