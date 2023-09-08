var titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = '#fafafa';
  even[i].style.backgroundColor = '#ccc';
}

var secondItem = document.querySelectorAll('li:nth-child(2)');
secondItem[0].style.color = 'green';
