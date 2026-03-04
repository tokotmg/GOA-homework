const myList = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5", "Element 6", "Element 7", "Element 8", "Element 9", "Element 10"];
for (let i = 0; i < myList.length; i += 2) {
    console.log(myList[i]);
}
for (let counter = 20; counter >= 10; counter--){
  console.log(counter);
}
let names = ["Guga", "Jhon", "Lekso", "Luka", "Erekle"];
let nameToRemove = "Jhon";
const findAndSplice = (arr, target) => {
  const index = arr.indexOf(target);
  if (index !== -1) {
    arr.splice(index, 1);
  }
};
findAndSplice(names, nameToRemove);
console.log(names);