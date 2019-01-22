document.addEventListener('DOMContentLoaded', function() {
  let todoList = [];

  // adds task to end of queue
  function remember(task) {
    todoList.push(task);
  }

  // Removes front item from queue (shift)
  function getTask() {
    return todoList.shift();
  }

  // Adds task to Front of queue (unshift)
  function rememberUrgently(task) {
    todoList.unshift(task);
  }

  console.log(todoList.toString());
  remember("groceries");
  console.log(todoList.toString());
  remember("work");
  remember("bread");
  console.log(todoList.toString());
  getTask();
  console.log(todoList.toString());
  rememberUrgently("pants");
  console.log(todoList.toString());

// It takes an array and an index, and it returns a new array that is a copy of the original array with the element at the given index removed.
  function remove(array, index) {
    return array.slice(0, index)
      .concat(array.slice(index + 1));
  }
  console.log(remove(["a", "b", "c", "d", "e"], 2));
  // → ["a", "b", "d", "e"]
});