let todos = [];

const addTodo = (task) => {
  const todo = { id: Date.now(), task };
  todos.push(todo);
  return todo;
};

module.exports = {
  todos,
  addTodo
};