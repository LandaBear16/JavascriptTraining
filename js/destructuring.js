// The old way of extracting data from an object.
function destructuring() {
var userOld = {
  name: 'Tyler',
  handle: 'Mcginnis',
  location: 'Eden'
}

// you have to extract the information one at a time
var nameOld = userOld.name;
var handleOld = userOld.handle;
var locationOLD = userOld.location;


// New way using destructuring
var user = {
  name: 'Yolanda',
  handle: 'Bear',
  location: 'Kent'
}

// properties on the left of the equal sign are the variables, on the right is the object you want destructured.
var {name, handle, location} = user;

console.log(name);

function getUser() {
  return{
    name: 'Yolanda',
    handle: 'Bear',
    location: 'Kent'
  };
}
var {nameFn, handleFn, locationFn} = getUser();

console.log(handleFn);
}