function setDark() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}
function setWhite() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}
function changeColor() {
const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
document.getElementById('myDiv').style.backgroundColor = randomColor;
}
let size = 50;
function resizeBox() {
size += 10;
const box = document.getElementById('box');
box.style.width = size + 'px';
box.style.height = size + 'px';
}