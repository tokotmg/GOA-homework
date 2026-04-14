function moveTen(s){
  return s.split("").map(char => {
    let code = char.charCodeAt(0) - 97;
    let shifted = (code + 10) % 26;
    return String.fromCharCode(shifted + 97);
  }).join('');
}
function findMissingNumbers(arr){
  const missing = [];
  for(let i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      missing.push(i);
    }
  }
  return missing;
}