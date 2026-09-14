function twoSum(numbers, target) {
    const seen = new Map();
    for (let i = 0; i < numbers.length; i++) {
        const currentNum = numbers[i];
        const complement = target - currentNum;
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(currentNum, i);
    }
}
function findMissingLetter(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i].charCodeAt(0) + 1 !== array[i + 1].charCodeAt(0)) {
      return String.fromCharCode(array[i].charCodeAt(0) + 1);
    }
  }
}
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .split('')
    .map(char => char.charCodeAt(0) - 64)
    .join(' ');
}
function high(x) {
  const words = x.split(' ');
  const getScore = word => [...word].reduce((score, char) => score + char.charCodeAt(0) - 96, 0);
  let highestWord = '';
  let maxScore = 0;
  for (const word of words) {
    const currentScore = getScore(word);
    if (currentScore > maxScore) {
      maxScore = currentScore;
      highestWord = word;
    }
  }
  return highestWord;
}
function spinWords(string) {
  return string.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ');
}