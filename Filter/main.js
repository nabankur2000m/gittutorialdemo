var form = document.getElementById('addForm');
var item = document.getElementById('items');
var itemList = document.getElementsByClassName('list-group-item');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

for(let i=0; i<itemList.length;i++){
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm float-right editBtn';
    editBtn.appendChild(document.createTextNode('EDIT'))

    itemList[i].appendChild(editBtn)
}

// Add item
function addItem(e) {
    e.preventDefault();

    const inputValue = document.getElementById('item').value;
    const description = document.getElementById('description').value;


    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';

    const newText = document.createTextNode(inputValue)
    const descriptionNode = document.createTextNode(description)
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);


    // Create edit button element
    var editBtn = document.createElement('button');
    // Add classes to edit button
    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    // Append text node
    editBtn.appendChild(document.createTextNode('Edit'));
    // Append button to li
    li.appendChild(editBtn);


    // Append li to list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}