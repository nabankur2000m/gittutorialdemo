var itemList = document.getElementById('itemList');


var newElement = document.createElement('div');

newElement.setAttribute('data-demo', 'example');


var textNode = document.createTextNode('Hello World');

newElement.appendChild(textNode);

itemList.appendChild(newElement);

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#fafafa';
console.log(itemList.parentElement.parentElement.parentElement);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'blue';
