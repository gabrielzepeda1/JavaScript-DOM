var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// submit event
form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();

  var newItem = document.querySelector("#item").value;

  var li = document.createElement("li");
  li.className = "list-group-item";

  li.appendChild(document.createTextNode(newItem));

  var buttonDelete = document.createElement("button");
  buttonDelete.className = "btn btn-danger btn-sm float-right delete";

  buttonDelete.appendChild(document.createTextNode("X"));

  li.appendChild(buttonDelete);

  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems() {
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName("li");

  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
