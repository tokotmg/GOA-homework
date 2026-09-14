function abbrevName(name){
  const words = name.split(" ");
  return `${words[0][0].toUpperCase()}.${words[1][0].toUpperCase()}`
}
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}
function squareDigits(num){
  return Number (
    num
      .toString()
      .split('')
      .map(val => val * val)
      .join('')
  );
}
function accum(s) {
  return s.split('').map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join('-');
}