const todos = [
  {
    text: "Order cat food",
    completed: true
  },
  {
    text: "Clean Kitchen",
    completed: false
  },
  {
    text: "Buy Food",
    completed: false
  },
  {
    text: "Do Work",
    completed: true
  },
  {
    text: "Exercise",
    completed: false
  }
];

const deleteTodo = function(todos, todoText) {
  const index = todos.findIndex(function(todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });

  if (index > -1) {
    todos.splice(index, 1);
  }
};

// Get a list of todos that have not been completed.
const getThingsToDo = function(todos) {
  return todos.filter(function(todo) {
    return todo.completed == false;
  });
};

const sortTodos = function(todos) {
  return todos.sort(function(a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);

//console.log(getThingsToDo(todos));

// deleteTodo(todos, "buy food");
// console.log(todos);
