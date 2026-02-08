function checkUserName() {
    const name = "Tornike"
    const userName = prompt("Enter a username")
    if (userName == "Tornike") {
        return true
    } else {
        return false
    }
}
console.log(checkUserName());
const product = (a, b, c) => a * b * c;
const num1 = 2;
const num2 = 3;
const num3 = 4;
const result = product(num1, num2, num3);
console.log(result);