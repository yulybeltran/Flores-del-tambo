// import express router and todo.js
const router = require("express").Router();
const Todo = require("../models/Todo");

// CRUD

// GET
// Get all data from todo coolecion 
router.get("/", (req, res) => {
    Todo.find((err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

// POST
// Add a new todo 
router.post("/", (req, res) => {
    Todo.create(req.body, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

//PUT 
// Edit a todo by its id
router.put("/:id", (req, res) => {
    Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

//DELETE
// Delete a todo by its id
router.delete("/:id", (req, res) => {
    Todo.findOneAndRemove({ _id: req.params.id }, (err, result) => {
        if(err) throw new Error(err);
        res.end();
    });
});

module.exports = router;