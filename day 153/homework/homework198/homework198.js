const _ = require('lodash');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstShuffle = _.shuffle(numbers);
const finalResult = _.shuffle(firstShuffle);
console.log(finalResult);