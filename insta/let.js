let x = 10;

function newFunctionScope() {

    let y = 20;
    var z = 30;

}

console.log("x: " + x);
//console.log("y: " + y); // ReferenceError: y is not defined
//console.log("z: " + z);  // ReferenceError: y is not defined

if (true) {
    let a = 45;
    var b = 55;
}

//console.log("a: " + a); // ReferenceError: y is not defined
console.log("b: " + b);

/*
|   let is block scoped | var is function scoped ONLY
|
|   let can be re-assigned
|
|
|
|
|
*/