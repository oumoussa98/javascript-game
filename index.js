// generate the random number
let randomNumber = Math.floor(Math.random() * 9000) + 1000;
randomNumber = randomNumber.toString();
console.log(randomNumber);

// handle the button click event
const handleSubmit = function () {
	// get the user input value
	let userInput = document.getElementById("number").value;
	let userInputLength = userInput.length;
	// global if statement to check if the user insert a valid number
	if (userInputLength === randomNumber.length) {
		// create a div element to display results
		let div = document.createElement("div");
		div.classList.add("results");

		// create unordered list
		let ul = document.createElement("ul");

		// append it to the div
		div.append(ul);

		// create list of items
		for (let i = 0; i < userInput.length; i++) {
			let li = document.createElement("li");
			ul.append(li);
			let text = document.createTextNode(userInput[i]);
			li.append(text);
		}

		// get the html div element
		const playDiv = document.getElementById("results-container");

		// append the created div to it
		playDiv.append(div);

		// create unordered list
		ul = document.createElement("ul");

		// append it to the div
		div.append(ul);

		// logic area
		let i = 0;
		let j = 0;
		let k = 0;
		let l = [];
		for (i = 0, j = 0; i < userInputLength; i++, j++) {
			// check if the integers with the same index are equals
			if (userInput[i] === randomNumber[j]) {
				// create an li elemnet and append it to ul element
				let li = document.createElement("li");
				li.classList.add("T");
				ul.append(li);
				// create a text element and append it to li
				let text = document.createTextNode("T");
				li.append(text);
				l.push(i);
			}
			// if not let's check if the integer exist in the random number
			else {
				let exist = false; //
				for (k = 0; k < userInputLength; k++) {
					// prevent to show P when the integer is just repeated
					for (let m = 0; m < l.length; m++) {
						if (k === l[m]) k++;
					}
					// check if the integer in exist in the random number
					if (userInput[i] === randomNumber[k]) {
						// create an li elemnet and append it to ul element
						let li = document.createElement("li");
						ul.append(li);
						// to prevent some unexpected results when the nubmers are repeated
						if (
							userInput[i + 1] === randomNumber[i + 1] ||
							userInput[k] === randomNumber[k]
						) {
							// create a text element and append it to li
							let text = document.createTextNode("F");
							li.classList.add("F");
							li.append(text);
						} else {
							// create a text element and append it to li
							let text = document.createTextNode("P");
							li.classList.add("P");
							li.append(text);
						}
						exist = true;
						break;
					}
				}
				// if the integer does not exist at all
				if (!exist) {
					// create an li elemnet and append it to ul element
					let li = document.createElement("li");
					li.classList.add("F");
					ul.append(li);
					// create a text element and append it to li
					let text = document.createTextNode("F");
					li.append(text);
				}
			}
		}
		// scroll up when ever the user enter a new number
		let objDiv = document.getElementById("results-container");
		objDiv.scrollTop = -100;
	}
	// else display an error message
	else {
		// create a div element
		let div = document.createElement("div");
		div.classList.add("results");
		div.classList.add("error");
		// create a text element and append it to li
		let text = document.createTextNode(
			`Please enter ${randomNumber.length} integers
			 click restart to clear the display `
		);
		div.append(text);
		// get the html div element
		const playDiv = document.getElementById("results-container");
		// append the created div to it
		playDiv.append(div);
	}
};
// restart the game
const restart = function () {
	// get all Divs and delete it
	let divs = document.querySelectorAll(".results");
	divs.forEach((el) => el.remove());
	// update random number
	let counter = document.getElementById("level").value;
	if (counter) {
		setRandomNumber(counter);
	} else {
		randomNumber = Math.floor(Math.random() * 9000) + 1000;
		randomNumber = randomNumber.toString();
	}
	// reset the input
	document.getElementById("number").value = null;
};
// set the random number
const setRandomNumber = function (counter) {
	// update random number
	randomNumber = Math.floor(Math.random() * 9000) + 1000;
	randomNumber = randomNumber.toString();
	for (let i = 0; i < counter; i++) {
		let randomnumber = Math.floor(Math.random() * 10);
		randomnumber = randomnumber.toString();
		randomNumber = randomNumber.concat(randomnumber);
	}
};
const start = function () {
	restart();
	let counter = document.getElementById("level").value;
	console.log(counter);
	setRandomNumber(counter);
	console.log(randomNumber);
};
