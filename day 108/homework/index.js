const fruits = ["apple", "banana", "orange",]
fruits.push("kiwi")
console.log(fruits)
const numbers = [5, 10, 15, 20]
numbers.pop()
console.log(numbers)
const words = ["table", "chair", "sofa", "wall", "roof"]
let text = words.join(' - ')
console.log(text)
const elements = ["water", "earth", "fire", "air", "wood", "thunder"]
const slice = elements.slice(1, 4);
console.log(slice)
const cities = ['tokyo', 'dubai', 'washington']
const deletedCity = cities.shift();
console.log(cities)
console.log(deletedCity)
const numbers2 = [20, 30, 40]
numbers2.unshift(10)
console.log(numbers2)
console.log(numbers2.length)
const animals = ['cat', 'dog', 'cow', 'pig', 'horse']
const birds = ['pidgeon', "dove", "crow", "hawk", "eagle"]
const fullList = animals.concat(birds)
console.log(fullList)
const elements2 = ['ice', 'force', 'time', 'light', 'dark']
let deletedElements = elements2.splice(3, 2);
console.log(elements2)
console.log(deletedElements)