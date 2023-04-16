//map for input items
const listItems = new Map();

const listElement = document.getElementById('list');
const inputElement = document.getElementById('itemInput');
const addBtn = document.getElementById('addItemBtn');
const clearBtn = document.getElementById('clearListBtn');

/*Add an event listener to the add item button. This
  function takes the input from the input field
  and adds it to the map when the button is clicked. */
addBtn.addEventListener("click", () => {
  const input = inputElement.value.trim();

  if(input) {
    //date.now() will generate a unique number/key for each value in the map
    listItems.set(Date.now(), input);
    inputElement.value = "";
    displayList();
  }
})

//add an event listener to the clear all items button
clearBtn.addEventListener("click", () => {
  listItems.clear();
  displayList();
})

function displayList() {
  //list Element is the unordered list
  listElement.innerHTML = "";

  //for each key value pair in the listItems Map
  for(const [key, value] of listItems) {
    //create a list item element
    const li = document.createElement("li");
    li.classList.add('listItem');
    li.textContent = value;

    //add the new li element to the unordered list
    listElement.appendChild(li);

    /* Add a delete button next to each li element.
      The delete button is represented by an image */
    let delBtn = document.createElement("button");
    delBtn.classList.add('deleteBtn')
    const img = document.createElement("img");
    img.src = "img/delete.png";
    img.alt = "Delete";
    delBtn.appendChild(img);
    li.appendChild(delBtn);

    //add an event listener to the delete button
    delBtn.addEventListener("click", () => {
      //remove the list item from the unordered list
      listElement.removeChild(li);

      //also remove it from the map, so it won't appear again
      listItems.delete(key);
    })
  }
}
