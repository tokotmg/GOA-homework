function findShort(s){
  return Math.min(...s.split(' ').map(w => w.length));
}
function friend(friends){
  return friends.filter(name => name.length === 4);
}
function accum(s) {
  return s.split('')
  .map((char, index) =>
      char.toUpperCase() + char.toLowerCase().repeat(index)
    )
    .join('-');
}
function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join('');
}
function persistence(num) {
   let count = 0;
  while (num >= 10) {
    num = String(num)
    .split('')
    .reduce((acc, digit) => acc * Number(digit), 1);
  count++;
  }
  return count;
}