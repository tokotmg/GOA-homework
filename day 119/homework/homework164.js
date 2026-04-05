function solve(s) {
  const consonantSubstrings = s.split(/[aeiou]+/);
  const values = consonantSubstrings.map(substring => {
    return [...substring].reduce((sum, char) => {
      return sum + (char.charCodeAt(0) - 96);
    }, 0);
  });
  return Math.max(...values);
}