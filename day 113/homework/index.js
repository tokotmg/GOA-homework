//callback ფუნქცია არის ფუნქცია, რომელიც არგუმენტის სახით გადაეცემა სხვა ფუნქციას.
const numbers = [10, 20, 30, 40, 50];
numbers.forEach((number, index) => {
    console.log(`Index: ${index}, Number: ${number}`);
});
const originalList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbersList = [];
originalList.forEach(number => {
    if (number % 2 !== 0) {
        oddNumbersList.push(number);
    }
});
console.log(oddNumbersList);
//forEach() მეთოდი მასივის თითოეული ელემენტისთვის ფუნქციას იძახებს.
//forEach() მეთოდი არ სრულდება ცარიელი ელემენტებისთვის.
