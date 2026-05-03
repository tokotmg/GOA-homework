const ul = document.getElementById('list');
for (let i = 1; i <= 3; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  ul.appendChild(li);
}
const paragraph = document.querySelector('#box p');
paragraph.textContent = 'New Updated Text';
const newSpan = document.createElement('span');
newSpan.textContent = 'New Span';
const mainBox = document.getElementById('main-box');
mainBox.appendChild(newSpan);
const oldP = mainBox.querySelector('p');
if (oldP) {
    oldP.remove();
}
const container = document.getElementById('article-container');
const h2 = document.createElement('h2'); //
const p = document.createElement('p');
h2.textContent = 'Article Title';
p.textContent = 'Article Description';
container.appendChild(h2);
container.appendChild(p);