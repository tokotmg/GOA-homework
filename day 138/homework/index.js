const temperatures = [22, 18, 35, 12, 28];
const [, temp2, , , temp5] = temperatures;
console.log(temp2);
console.log(temp5);
const laptop = {
  brand: "ASUS",
  ram: 16,
  storage: 512,
  isGaming: true
};
const {brand, storage, processor} = laptop;
console.log(brand);
console.log(storage);
console.log(processor);
const racers = ["Lewis", "Max", "Lando", "Charles", "George", "Oscar"];
const [gold, silver, ...other_racers] = racers;
console.log(gold);
console.log(silver);
console.log(other_racers);
const product = {
  id: 101,
  title: "Wireless Mouse",
  price: 45,
  category: "Electronics",
  stock: 25
};
const {id, title, ...details} = product;
console.log(details); 
