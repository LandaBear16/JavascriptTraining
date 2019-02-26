


// Can be created via literals
function literalFunc() {
	console.log("I am a literal function");
}

literalFunc();
/*
Output: 
	I am a literal function
*/


// Can be assigned to a variable
const variableFunc = function () {
	console.log("I am a function assigned to a variable called variableFunc");
}

variableFunc();
/*
Output: 
	I am a function assigned to a variable called variableFunc
*/

// Can be assigned to an array
const array_of_functions = [
	function () {
		console.log("Beam me up Scotty");
	},
	function () {
		console.log("Live Long and Prosper");
	},
	function () {
		console.log("Highly Illogical");
	}
];

array_of_functions.forEach(function (func) {
	func(); // run your functions
});
/*
Output: 
	Beam me up Scotty
	Live Long and Prosper
	Highly Illogical
*/

array_of_functions.push(function () {
	console.log("To Boldy Go Where No Man Has Gone Before");
});

array_of_functions.forEach(function (func) {
	func(); // run your functions
});
/*
*Extra function in the array
Output: 
	Beam me up Scotty
	Live Long and Prosper
	Highly Illogical
	To Boldy Go Where No Man Has Gone Before
*/

// Can be properties of other objects
const firefly = {
	ShipName: "Serenity",
	Captain: "Malcolm Reynolds",
	SecondInCommand: "Zoe Washburne",
	Pilot: "Hoban 'Wash' Washburne",
}

console.log(firefly);
/*
Output: 
	{ ShipName: 'Serenity',
		Captain: 'Malcolm Reynolds',
		SecondInCommand: 'Zoe Washburne',
		Pilot: "Hoban 'Wash' Washburne" }
*/

// Assigns a new function as a property - functions as properties of an object are called Methods.
firefly.soar = function () { console.log("I am a leaf on the wind. Watch how I soar."); }

console.log(firefly);
/*
Output: 
	{ ShipName: 'Serenity',
		Captain: 'Malcolm Reynolds',
		SecondInCommand: 'Zoe Washburne',
		Pilot: "Hoban 'Wash' Washburne",
		soar: [Function] }
*/

firefly.soar();
/*
Output: 
	I am a leaf on the wind. Watch how I soar.
*/


// Can be passed as arguments to other functions
function talk(sayFunction) {
	sayFunction();
}

talk(function () { console.log("I am Groot!") });
/*
Output: 
	I am Groot!
*/


// Can be returned as Values from Functions
const hey = function () {
	console.log("Heeyyyyyy Youuuuuuu Guuyyyyyyssss!!");
}

function Goonies() {
	return hey();
}

Goonies();
/*
Output: 
	Heeyyyyyy Youuuuuuu Guuyyyyyyssss!!
*/

// They can possess properties that can be dynamically created and assigned
const film = function () {
	console.log("Blade Runner");
}

// Adds a property to the above function.
film.year = "1982";

console.log(film.year);
/*
Output:
	1982
*/