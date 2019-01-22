document.addEventListener('DOMContentLoaded', function() {

  // Prints out the keys of an object
  const user = {
    name: "yolanda",
    handle: "boom"
  }

  console.log(Object.keys(user));
  // -> ["name", "handle"]

  // --------------------------------------------------------------------
  
  // Copies all properties from one object into another.
  let objectA = {a: 1, b: 2};
  let objectB = {b: 3, c: 4};
  Object.assign(objectA, objectB);
  console.log(objectA);
  // → {a: 1, b: 3, c: 4}

  // --------------------------------------------------------------------

  // Object 1 and object 2 reference the same object
  let object1 = {value: 10};
  let object2 = object1;
  let object3 = {value: 10};

  console.log(object1 == object2);
  // → true
  console.log(object1 == object3);
  // → false

  object1.value = 15;
  console.log(object2.value);
  // → 15
  console.log(object3.value);
  // → 10
});