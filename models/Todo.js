// Referencing mongoose
const mongoose = require("mongoose");

// Defining the Schema 
// key name corresponds to the property name in the collection.
const TodoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
    deleted: Boolean
});

// Exporting the model 
// Call the model constructor and pass it the name of the collection and the name of the schema
module.exports = mongoose.model("Todo", TodoSchema);