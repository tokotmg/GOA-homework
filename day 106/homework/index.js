//global scope ცვლადებზე წვდომა შესაძლებელია JavaScript პროგრამის ნებისმიერი ადგილიდან.
//block scope კოდის ბლოკში let და const მნიშვნელობებით გამოცხადებული ცვლადები „ბლოკ-სკოპია“, რაც იმას ნიშნავს, რომ მათზე წვდომა მხოლოდ ამ ბლოკის ფარგლებშია შესაძლებელი.
const food = 'Khachapuri'
const favoriteFood  = () => {
    return 'I Love ' + food;
}
console.log(favoriteFood())
const logFavoriteCar = () => {
  const car = 'Toyota'
  console.log(car)
}
logFavoriteCar()