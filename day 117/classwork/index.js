function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
function myMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}
function myFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}
function myFindIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}
function mySome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}
function myEvery(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }
  return true;
}
function myReduce(array, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    if (accumulator === undefined) {
      accumulator = array[i];
    } else {
      accumulator = callback(accumulator, array[i], i, array);
    }
  }
  return accumulator;
}
const nums = [1, 2, 3, 4, 5];
console.log(nums)
myForEach(nums, (x) => console.log(x * 2));
const doubled = myMap(nums, (x) => x * 2);
const evens = myFilter(nums, (x) => x % 2 === 0);
const index = myFindIndex(nums, (x) => x > 3);
const hasLarge = mySome(nums, (x) => x > 4);
const allPositive = myEvery(nums, (x) => x > 0);
const sum = myReduce(nums, (acc, curr) => acc + curr, 0);
console.log(doubled);
console.log(evens);
console.log(index);
console.log(hasLarge);
console.log(allPositive);
console.log(sum);