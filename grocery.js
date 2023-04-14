function addListItem() {
  let input = document.getElementById('addedItem');
  let ul = document.getElementById('list');
  let li = document.createElement("li");

  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);

  //adds a delete button
  let deleteButton= document.createElement("button");
  deleteButton.setAttribute('class', 'delBtn');
  deleteButton.appendChild(document.createTextNode("Delete"));
  li.appendChild(deleteButton);
  deleteButton.onclick = removeItem;

  //clears text box after adding the item
  input.value = " ";
}

function removeItem(event){
  let li = event.target.parentNode;
  let ul = li.parentNode;
  ul.removeChild(li);
}

function clear() {
  let ul = document.getElementById("list");
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}
