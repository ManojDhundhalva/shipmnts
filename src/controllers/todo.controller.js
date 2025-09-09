const { todos, addTodo } = require("../models/todo.model");

const getAllTodos = (req, res) => {
  res.status(200).json(todos);
};

const createTodo = (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: "Task is required" });

  const newTodo = addTodo(task);
  res.status(201).json(newTodo);
};

module.exports = {
  getAllTodos,
  createTodo
};