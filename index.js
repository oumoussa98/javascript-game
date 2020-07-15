// generate the random number
let randomNumber = Math.floor(Math.random() * 9000) + 1000;
randomNumber = randomNumber.toString();
console.log(randomNumber);

// handle the button click event
const handleSubmit = function () {
	// get the user input value
	let userInput = document.getElementById("number").value;
	let userInputLength = userInput.length;

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
			let li = document.createElement("li");
			li.classList.add("T");
			ul.append(li);
			let text = document.createTextNode("T");
			li.append(text);
			l.push(i);

			// console.log("condition 1");
			// console.log("i = " + i);
			// console.log("l = " + l[i]);
			// console.log("j = " + j);
			// console.log("k = " + k);
		} else {
			let exist = false;
			for (k = 0; k < userInputLength; k++) {
				for (let m = 0; m < l.length; m++) {
					if (k === l[m]) k++;
				}
				if (userInput[i] === randomNumber[k]) {
					let li = document.createElement("li");
					ul.append(li);
					if (
						userInput[i + 1] === randomNumber[i + 1] ||
						userInput[k] === randomNumber[k]
					) {
						let text = document.createTextNode("F");
						li.classList.add("F");
						li.append(text);
					} else {
						let text = document.createTextNode("P");
						li.classList.add("P");
						li.append(text);
					}

					// console.log("condition 2");
					// console.log("i = " + i);
					// console.log("j = " + j);
					// console.log("k = " + k);

					exist = true;
					break;
				}
			}
			if (!exist) {
				let li = document.createElement("li");
				li.classList.add("F");
				ul.append(li);
				let text = document.createTextNode("F");
				li.append(text);
				// console.log("condition 3");
				// console.log("i = " + i);
				// console.log("j = " + j);
				// console.log("k = " + k);
			}
		}
	}
	let objDiv = document.getElementById("results-container");
	objDiv.scrollTop = -100;
};
const restart = function () {
	let divs = document.querySelectorAll(".results");
	divs.forEach((el) => el.remove());
	randomNumber = Math.floor(Math.random() * 9000) + 1000;
	randomNumber = randomNumber.toString();
	document.getElementById("number").value = null;
};
const start = function () {};
