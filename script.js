var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var ul = document.querySelector("ul");
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var deleteButtons = document.querySelectorAll("li button");
var listItems = document.querySelectorAll("li span");
var listElements = document.querySelectorAll("li");



var inputLength = function() {
	return input.value.length;
}

var listLength = function() {
	return ul.children.length;
}

function defineListItems() {
	deleteButtons = document.querySelectorAll("li button");
	listItems = document.querySelectorAll("li span");
	listElements = document.querySelectorAll("li");
}

function addNewItem() {
	var j = 0
	for (var i = 0; i < listLength(); i++) {
		if (listItems[i].textContent === input.value){
			j++
		}
	}
	if (j === 0) {
		turnOffCrossOut();
		turnOffDelete();
		var li = document.createElement("li");
		var span = document.createElement("span");
		var newButton = document.createElement("button");
		span.appendChild(document.createTextNode(input.value));
		newButton.appendChild(document.createTextNode("Delete"));
		newButton.classList.add("delete");
		ul.appendChild(li);
		ul.lastChild.appendChild(span);
		ul.lastChild.appendChild(newButton);
		defineListItems(); 
		turnOnCrossOut();
		turnOnDelete();
		input.value = "";
	} else {
		alert("Item already on list");
	}
}	

function createOnClick() {
	if (inputLength() > 0) {
		addNewItem();
	}
}

function createOnEnter() {
	if (inputLength() > 0 && event.keyCode === 13) {
		addNewItem();
	}
}

function addDoneToggle (event) {
	event.target.classList.toggle("done");
}

function turnOnCrossOut () {
	listItems.forEach(element => {
	element.addEventListener("click", addDoneToggle)
	})
}


function turnOffCrossOut () {
	listItems.forEach(element => {
	element.removeEventListener("click", addDoneToggle)
	})
}

function deleteItem (event) {
	event.target.parentNode.remove();
}

function turnOnDelete () {
	deleteButtons.forEach(element => {
	element.addEventListener("click", deleteItem)
	})
}

function turnOffDelete () {
	deleteButtons.forEach(element => {
	element.removeEventListener("click", deleteItem)
	})
}

button.addEventListener("click", createOnClick)
input.addEventListener("keypress", createOnEnter)
turnOnCrossOut();
turnOnDelete();


// function deleteItem(index) {
// 	deleteButtons[index].addEventListener("click", function() {
// 		turnOffCrossOut();
// 		listElements[index].remove();
// 		defineListItems();
// 		turnOnCrossOut();
// 	})
// }







// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);


// ### First draft event listener code ###

// function createListIndex() {
// 	listIndex = [];
// 	for (var i = 0; i < listLength(); i++) {
// 	listIndex.push(i);
// 	}
// }

// function addDoneToggle(event) {
// 	event.target.listItems[index].children[0].classList.toggle("done");
// }

// function addTickOff(event) {
// 	event.target.listItems.children[0].addEventListener("click", function() {
// 		addDoneToggle()
// 	})
// }

// function turnOnTickOff() {
// 	createListIndex();
// 	listIndex.forEach(addTickOff)
// }

// ##########################################
