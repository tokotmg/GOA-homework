//ობიექტები არის ცვლადები, რომლებსაც შეუძლიათ როგორც მნიშვნელობების, ასევე ფუნქციების შენახვა
//ობიექტები JavaScript-ის ერთ-ერთი ყველაზე მნიშვნელოვანი კონცეფციაა
//თუ ობიექტებს ერკვევი, ესე იგი JavaScript-საც ერკვევი
const car = {
  model: "Toyota",
  color: "Silver",
  year: 2015
};
const userInput = prompt("Enter 'model', 'color', or 'year':");
const attributeValue = car[userInput];
if (attributeValue !== undefined) {
  console.log(`The value of ${userInput} is: ${attributeValue}`);
} else {
  console.log("Attribute not found.");
}
console.log(car.nose);
//JavaScript არ იძლევა ReferenceError-ს, როდესაც არსებულ ობიექტზე არარსებულ თვისებაზე წვდებით. ამის ნაცვლად, ის უბრალოდ აბრუნებს მნიშვნელობას 'undefined'.
//კულისებში, შიდა [[Get]] მეთოდი ეძებს თვისებას ობიექტსა და მის პროტოტიპ ჯაჭვში; თუ ის ვერაფერს პოულობს, ის აბრუნებს განუსაზღვრელს.
//ეს განსხვავდება გამოუცხადებელ ცვლადზე წვდომისგან, რომელიც გამოიწვევს ReferenceError-ს.
