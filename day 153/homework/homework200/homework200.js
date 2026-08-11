const Chance = require('chance');
const chance = new Chance();
const phoneNumber = chance.phone();
const age = chance.age();
const birthday = chance.birthday({ string: true, american: false });
console.log(`Phone Number: ${phoneNumber}`);
console.log(`Age: ${age}`);
console.log(`Birthday: ${birthday}`);
