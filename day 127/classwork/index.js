const container = document.getElementById("cont");
const newHeader = document.createElement("h1");
newHeader.textContent = 'Hello JS Create Elements.';
const oldHeader = container.querySelector('h2');
container.appendChild(newHeader);
container.removeChild(oldHeader);