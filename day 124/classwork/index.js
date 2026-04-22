let List = ["apple", "orange", "carrot", "tomato", "cheese"]
let [var1, var2, var3, var4, var5] = List;
console.log(var1)
console.log(var2)
console.log(var3)
console.log(var4)
console.log(var5)
const car = {
    model:"BMW",
    year:"2020",
    color:"Black"
}
const {model, color} = car
console.log(model)
console.log(color)
const paraOne = document.getElementById('first-para');
const paraTwo = document.getElementById('second-para');
if (paraOne) {
    paraOne.textContent = "Hello";
}

if (paraTwo) {
    paraTwo.textContent = "World!";
}