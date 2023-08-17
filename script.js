var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liList = document.querySelectorAll("li");
var buttonDel = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var del = document.createElement("button");
	del.classList.add("delete");
	del.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(del);
	ul.appendChild(li);
	li.addEventListener("click", toggleDone);
    del.addEventListener("click", deleteItem);
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

function toggleDone(event) {
	console.log("Toggled.");
	event.target.classList.toggle("done");
}

function deleteItem(event){
	ul.removeChild(event.target.parentElement);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


for(var child of liList) {
	child.addEventListener("click",toggleDone);
}

for(var child of buttonDel) {
	child.addEventListener("click",deleteItem);
}