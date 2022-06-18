//Variables for top-bar container
const topBar = document.querySelector(".top-bar");
const btnNew = document.querySelector(".btn-new");
const btnDelete = document.querySelector(".btn-delete");

//Variables for input window
const windowNew = document.createElement("div"); //Container for input window
const inputNew = document.createElement("input");
const btnSubmit = document.createElement("button"); //Submit button
const imgSubmit = document.createElement("img"); //Submit button img
const btnClose = document.createElement("button"); //Close button
const imgClose = document.createElement("img"); //Close button img

//Click event listener for the New button
//On click it creates an input window to add to-do's to the list
//Also creates a submit button for the text input and a close button to close window
btnNew.addEventListener("click", () => {
	//Class names
	windowNew.className = "window-new";
	inputNew.className = "input-new";
	btnSubmit.className = "btn-input btn-submit";
	btnClose.className = "btn-input btn-close";

	//Type names
	btnSubmit.type = "button";
	btnClose.type = "button";

	//Button images' attributes
	imgSubmit.setAttribute("src", "styles.css/images/done_black_24dp.svg"); //Submit button
	imgSubmit.setAttribute("alt", "submit button");
	imgClose.setAttribute("src", "styles.css/images/close_black_24dp.svg"); //Close button
	imgClose.setAttribute("alt", "close button");

	topBar.appendChild(windowNew); //Appends input window bellow top bar
	windowNew.appendChild(btnSubmit); //Places submit button on the left of text input
	btnSubmit.appendChild(imgSubmit);
	windowNew.appendChild(inputNew); //Places text input between submit and close buttons
	windowNew.appendChild(btnClose); //Places close button on the right of text input
	btnClose.appendChild(imgClose);

	inputNew.select(); //Selects text input

	btnNew.disabled = true; //Disables new button when input window is opened
});

//Closes the new input window
function closeWindow() {
	inputNew.value = "";
	topBar.removeChild(windowNew);
	btnNew.disabled = false; //Enables new button when input window is closed
}

const conToDo = document.querySelector(".con-to-do"); //Variable for to do container

let itemInt = 0; //Integer which is incremented in newItem() to give each item a unique name and type

//Creates a new to do item
//Gets itemInt and increments to give each item a unique name and type
//Creates a checkbox that proceeds a label
//Label has text content set to text input's value
function newItem() {
	const checkBox = document.createElement("input");
	const itemLabel = document.createElement("label");
	const itemCon = document.createElement("div");

	itemInt++; //Item integer

	checkBox.type = "checkbox"; //Creates the checkbox
	checkBox.name = itemInt;
	checkBox.className = "checkbox";

	itemLabel.setAttribute("for", itemInt); //Creates the label
	itemLabel.className = "item-to-do";
	itemLabel.textContent = inputNew.value;

	itemCon.className = "item-con"; //Creates the container for better styling

	//Appends to the to do container
	conToDo.appendChild(itemCon);
	itemCon.appendChild(checkBox);
	itemCon.appendChild(itemLabel);
}

//Adds functionality to submit button
//Creates a checkbox and label which contains the text input's value and appends it to the to do container
btnSubmit.addEventListener("click", () => {
	if (inputNew.value === "") {
		return; //Prevents function from creating empty items
	} else {
		newItem(); //Creates new to do item
		closeWindow(); //Closes the new input window
	}
});

//Clicks the submit button when Enter key is pressed
inputNew.addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		btnSubmit.click();
	}
});

//Adds functionality to close button
//Closes the window when clicked
btnClose.addEventListener("click", closeWindow);

//Clicks the close button when Escape key is pressed down
inputNew.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		btnClose.click();
	}
});
