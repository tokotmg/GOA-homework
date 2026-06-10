const salary = [1500, 2000, 9800, 12300, 5000];
const [first, second, third, fourth, fifth] = salary;
console.log(second);
console.log(fifth); 
const group_info = { 
  name: "Group 63", 
  studentsCount: 10, 
  isActive: true, 
  learning: "JS Intermidiate", 
  speed: 2 
};
const { name, isActive, speed, ...restOfProperties } = group_info;
console.log(name);
console.log(isActive);
console.log(speed);
console.log(restOfProperties); 
const names = ['Davit', 'Jan', 'Gio', 'Lado', 'Guka']
const nums = [1, 98, 102, 34, 87]
const mixed_arr = [...names, ...nums];
console.log(mixed_arr);
const cars = ['BMW M5 F90', 'Mersedes Benz G65 AMG', 'Mazda RX7', 'Toyota Prius']
const [...otherCars] = cars.slice(0, -2);
console.log(otherCars); 
