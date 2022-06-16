//Variables for top-bar container
const topBar = document.querySelector(".top-bar");
const btnNew = document.querySelector(".btn-new");
const btnDelete = document.querySelector(".btn-delete");

//Variables for input form window
const windowNew = document.createElement("div"); //Container for input form
const formNew = document.createElement("form");
const inputNew = document.createElement("input");
const btnSubmit = document.createElement("button"); //Submit button
const imgSubmit = document.createElement("img"); //Submit img
const btnClose = document.createElement("button"); //Close button
const imgClose = document.createElement("img"); //Close img

//Click event listener for the New button
//On click it creates an input window to add to-do's to the list
//Also creates a submit button for the text input and a close button to close window
btnNew.addEventListener("click", () => {
	//Class names
	windowNew.className = "window-new";
	//formNew.className = "form-new";
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

	topBar.appendChild(windowNew); //Appends input form window bellow top bar
	//windowNew.appendChild(formNew);
	windowNew.appendChild(btnSubmit); //Places submit button on the left of text input
	btnSubmit.appendChild(imgSubmit);
	windowNew.appendChild(inputNew); //Places text input between submit and close buttons
	windowNew.appendChild(btnClose); //Places close button on the right of text input
	btnClose.appendChild(imgClose);

	btnNew.disabled = true; //Disables new button when input window is opened
});

//Closes the new input window
function closeWindow() {
	inputNew.value = "";
	topBar.removeChild(windowNew);
	btnNew.disabled = false; //Enables new button when input window is closed
}

//Adds functionality to close button
//Closes the window when clicked
btnClose.addEventListener("click", closeWindow);

//Variable for to do list container
const conToDo = document.querySelector(".con-to-do");

//Adds functionality to submit button
//Creates an element containing text input's value and appends it to the to do list container
btnSubmit.addEventListener("click", () => {
	const itemToDo = document.createElement("div");
	itemToDo.className = "item-to-do";
	itemToDo.textContent = inputNew.value;
	conToDo.appendChild(itemToDo);
	closeWindow();
});
