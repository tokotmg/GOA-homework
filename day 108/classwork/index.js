const list = ['Nika', 'David', 'Cotne', 'Guga', 'Giorgi'];
list.push('Tornike');
list.pop();
let text = list.join(' ');
console.log(text)
const list2 = list.slice(0, 4);
console.log(list2)
list.shift(0);
list.unshift('Mariami');
console.log(list);