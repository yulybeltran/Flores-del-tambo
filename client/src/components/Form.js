import React, { useState } from "react";
import "../styles/form.css";

const Form = ({ addTodo }) => {
  // We declare the state of the input
  const [inputValue, setInputValue] = useState("");
  //This constant is used to modify the state and save the new info
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  // Here we use the preventDefault to prevent the page from reloading
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //The .trim is used to remove whitespace around the string
    if (inputValue.trim() === "") return;

    addTodo({ title: inputValue, completed: false, deleted: false });
    // Here we return the state of the input to an empty string
    setInputValue("");
  };

  return (
    <form
      className="ui form"
      //It is used to process the information of the form and then to be able to be sent, we pass the function
      // handleFormSubmit to prevent the information from being refreshed and lost
      onSubmit={handleFormSubmit}
    >
      <div className="ui grid center aligned">
        <div className="row input-button">
          <div className="column" id="inputForm">
            <input
              // Here we pass the states to the input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="Ingresa la tarea que debes realizar..."
            />
          </div>
          <div className="column">
            <button type="submit" className="ui button circular icon green">
              <i className="white plus icon"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
