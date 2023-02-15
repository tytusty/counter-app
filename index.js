let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total-el");
let count = 0;
let totalCount = 0;
let spanEl = document.getElementsByTagName("span");

function increment() {
	count += 1;
	totalCount += 1;
	countEl.textContent = count;
	totalEl.textContent = totalCount;
}

function save() {
	let countStr = count + " - ";
	saveEl.textContent += countStr;
	countEl.textContent = 0;
	count = 0;
}

/*

let name = "Ty";
let greeting = "Ciao, mi chiamo ";

let myGreeting = greeting + name;

console.log(myGreeting);

console.log(4 + 5); // 9
console.log("2" + "4"); // 24
console.log("5" + 1); // 51
console.log(100 + "100"); //100100

*/

let welcomeEl = document.getElementById("welcome-el");

let name = "Ty";
let greeting = "Benvenuto ";

welcomeEl.textContent = greeting + name;

welcomeEl.textContent += " 👋";
