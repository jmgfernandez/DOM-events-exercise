var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var allLi = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	ul.appendChild(li);
	li.appendChild(document.createTextNode(input.value+"     "));
	li.appendChild(delButton);
	delButton.appendChild(document.createTextNode("Delete"));
	delButton.className = "delete";
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markItemAfterClick(event) {
	if (event.target.nodeName === "LI") {
		event.target.classList.toggle("done");
	}
}

function deleteItemAfterClick(event) {
	if (event.target.className === "delete") {
		event.target.parentElement.remove();
	}
}

function addButtonToCurrentListItems(item) {
	var space = document.createTextNode("     ");
	var delButton = document.createElement("button");
	delButton.appendChild(document.createTextNode("Delete"));
	item.appendChild(space);
	item.appendChild(delButton);
	delButton.className = "delete";
}

allLi.forEach(addButtonToCurrentListItems);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener('click', markItemAfterClick);

ul.addEventListener('click', deleteItemAfterClick);