var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// Form submit event 
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

// Filter event 
filter.addEventListener('keyup', filterItems);

// Add item 
function addItem(e) {
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;

    // create new list element
    var li = document.createElement('li');
    // Add class 
    li.className = 'list-group-item';
    // Add text node with input value 
    li.appendChild(document.createTextNode(newItem));

    // CREATE DEL BUTTON ELEMENT
    var deleteBtn = document.createElement('button');

    // ADD CLASSES TO DEL BUTTON 
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text Node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list 
    itemList.appendChild(li);
}

// Remove item 
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter items 
function filterItems(e) {
    // convert text to lowercase 
    var text = e.target.value.toLowerCase();
    // Get list 
    var items = itemList.getElementsByTagName('li');
    // convert to array 
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

}