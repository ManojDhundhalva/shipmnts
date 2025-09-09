const router = require('express').Router();
const { getAllTodos, createTodo } = require('../controllers/todo.controller');

// router.get("/", verifyTokenAndAuthorization, controller.getUser);
router.get('/', getAllTodos);
router.post('/', createTodo);

module.exports = router;