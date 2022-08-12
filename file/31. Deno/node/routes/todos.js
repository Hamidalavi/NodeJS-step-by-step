// const express = require("express");
// const router = express.Router();

// let todos = [];

// router.get("/todos", (req, res, next) => {
//   res.status(200).json({ todos });
// });

// router.post("/todos", (req, res, next) => {
//   const newTodo = { id: new Date().getTime().toString(), text: req.body.text };
//   todos.push(newTodo);
//   res.status(201).json({ message: "Todo created", todo: newTodo });
// });

// router.put("/todos/:todoId", (req, res, next) => {
//   const tid = req.params.todoId;
//   const todoIndex = todos.findIndex(todo => todo.id === tid);
//   todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
//   res.status(200).json({ message: "Todo updated!" });
// });

// router.delete("/todos/:todoId", (req, res, next) => {
//   const tid = req.params.todoId;
//   todos = todos.filter(todo => todo.id !== tid); // does match: deleted | doesn't match: kept (current)
//   res.status(200).json({ message: "Todo deleted!" });
// });

// module.exports = router;
