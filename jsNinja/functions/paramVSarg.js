/* 
    - Parameters are defined as part of the function definition.
    - Arguments are values that we pass to the function.
*/
// Parameter -> (character)
function beeCharmer(character) {
    return quote(character, "You're just a bee charmer, Idgie Threadgoode. That's what you are, a bee charmer.");
}

// Parameter -> (person, line)
var quote = function (person, line) {
    return person + " - " + line;
};

/* 
    Parameter -> name
    Argument -> (name, "Towanda! Righter of Wrongs, Queen Beyond Compare!")
*/
var towanda = name => quote(name, "Towanda! Righter of Wrongs, Queen Beyond Compare!");

console.log(beeCharmer("Ruth Jamison"));
/*
| Output:
    Ruth Jamison - You're just a bee charmer, Idgie Threadgoode. That's what you are, a bee charmer.
|*/

console.log(towanda("Evelyn Couch"));
/*
| Output:
    Evelyn Couch - Towanda! Righter of Wrongs, Queen Beyond Compare!
|*/

// Function with 6 parameters
function laminatedFreebieList(person1, person2, person3, person4, person5, bumped) {
    console.log("First: " + person1);
    console.log("Bumped: " + bumped);
    console.log("for: " + person2);
    console.log("Third: " + person3);
    console.log("Fourth: " + person4);
    console.log("Fifth: " + person5);
}

/*
    Arguments supplied at invocation are assigned to the functions parameters. They are assigned in order, so the first argument passed in is assigned to the first function parameter, the second argument passed in is assigned to the second function parameter and so on. Any extra arguments passed in will not be assigned to any parameter names.
*/
laminatedFreebieList("Uma Thurman", "Winona Ryder",
    "Elizabeth Hurley", " Michelle Pfeiffer",
    "Dorothy Hamill", "Isabella Rossellini", "Pamela Anderson");
/*
| Output:
    First: Uma Thurman
    Bumped: Isabella Rossellini
    for: Winona Ryder
    Third: Elizabeth Hurley
    Fourth:  Michelle Pfeiffer
    Fifth: Dorothy Hamill
|*/

/* 
    If only one argument passed in, it will be assigned to the first parameter. And the other parameters will be undefined. 
*/
laminatedFreebieList("You were on my list of five goofy coffeehouse guys I could sleep with, but yesterday you got bumped for that guy over there!");

/*
| Output:
    First: You were on my list of five goofy coffeehouse guys I could sleep with, but yesterday you got bumped for that guy over there!
    Bumped: undefined
    for: undefined
    Third: undefined
    Fourth: undefined
    Fifth: undefined
|*/

// ----------- Rest Parameters ------------

/* 
    By prefixing the last Parameter with ... turns it into the Rest Parameter. This allows you to store an indefinite number of arguments as an array. 
*/
function jungleBook(character, ...otherCharacters) {
    console.log(character);
    console.log(otherCharacters);
}

jungleBook("Mowgli", "Baloo", "Bagheera", "King Louie");
/*
| Output:
|       Mowgli
|       (3) ["Baloo", "Bagheera", "King Louie"]
|*/

/*------------ Default Parameters -------------- */

/* By assigning a value to a parameter, you are creating a default parameter */
function iKnow(character, quote = "I know") {
    console.log(character + " - " + quote);
}

/* If when the function is invoked, you leave out the matching argument then the default is used. */
iKnow("Princess Leia", "I love you");
/*
    Output:
        Princess Leia - I love you
*/

/* However if you do not pass in the matching argument then the default is used. */
iKnow("Han Solo");

/*
    Output:
        Han Solo - I know
*/


/* --------- Implicit Parameters ------------- */
// The arguments parameter is a collection of all arguments passed to a function.
function turtles(turtle1, turtle2, turtle3, turtle4) {
    // Arguments parameter (object) has a property named length, this provides the exact number of arguments passed.
    console.log("arguments passed in: " + arguments.length);

    for (let i = 0; i < arguments.length; i++) {
        // Each argument can be accessed through array index notation.
        console.log("Argument no" + (i + 1) + " " + arguments[i]);
    }

    // The arguments can still be accessed by the parameter names.
    console.log("turtle1: " + turtle1);
    console.log("turtle2: " + turtle2);
    console.log("turtle3: " + turtle3);
    console.log("turtle4: " + turtle4);
}

turtles("Leonardo", "Donatello", "Michaelangelo", "Raphael", "Splinter");

/*
| Output:
        arguments passed in: 5
        Argument no1 Leonardo
        Argument no2 Donatello
        Argument no3 Michaelangelo
        Argument no4 Raphael
        Argument no5 Splinter

        turtle1: Leonardo
        turtle2: Donatello
        turtle3: Michaelangelo
        turtle4: Raphael
| */

/*-------- This ---------- */

/* 
    The this keyword is known as the function context.
*/

/* Function Invokations */
/*
Functions can be invoked in four ways:

    1. as a straight forward function call
*/

function jediName() { } // Function Declaration
jediName(); // Invoked as a function


var jedi = function () { } // Function Expression
jedi(); // Invoked as a function


(function () { })() // Immediately invoked function expression that is invoked as a function

/*  2. As a method */

// Creates a function that returns this (function context)
function myContext() {
    return this;
}

// Will print the window object to the console.
console.log(myContext());
/*
| Output:
    Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}  
| */

// Creates an object
var yoda = {
    name: "Yoda",
    getMyContext: myContext // Assigns the function above to a property of the object
}

// Creates another object
var mace = {
    name: "Mace Windu",
    getMyContext: myContext // And again assigns the function above to a property of the object
}

// Prints the objects function context to the console
console.log(yoda.getMyContext());
/*
| Output:
    {name: "Yoda", getMyContext: ƒ} 
| */

// Prints the objects function context to the console
console.log(mace.getMyContext());
/*
| Output:
    {name: "Mace Windu", getMyContext: ƒ}
| */