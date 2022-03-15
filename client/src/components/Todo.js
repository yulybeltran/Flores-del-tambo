import React, { useState } from "react";
import "../styles/todo.css";
import { IoMdFlower } from "react-icons/io";

const Todo = ({
  title,
  completed,
  removeTodoItemProp,
  editTodoItemProp,
  deleted,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  // Here we destruct in title defining it as the initial state in the following two constants
  const [value, setValue] = useState(title);
  const [tempValue, setTempValue] = useState(title);
  const [completedState, setCompleted] = useState(completed);

  //  // handleDivDoubleClick is used to change the state to true and let it edit the task
  const handleDivDoubleClick = () => {
    setIsEditing(true);
  };
  //This constant is used to define the functions of the keys when editing
  const handleInputKeyDown = (e) => {
    const key = e.keyCode;

    if (key === 13) {
      editTodoItemProp({ title: tempValue });
      setValue(tempValue);
      setIsEditing(false);
      //In case we do not want to save the changes, we press esc so that the original title remains
    } else if (key === 27) {
      setTempValue(value);
      setIsEditing(false);

      //We use the state in false so that pressing any of the keys after saving the changes stops editing
    }
  };
  //create an event that modifies the state
  const handleInputOnChange = (e) => {
    setTempValue(e.target.value);
  };
  const handleDeleteClick = () => editTodoItemProp({ deleted: !deleted });

  const handleButtonClick = () => {
    setCompleted((oldCompleted) => {
      const newState = !oldCompleted;
      editTodoItemProp({ completed: newState });
      return newState;
    });
  };

  return (
    <div className="row">
      {/* Here we use a ternary operator, we say, if you are editing, use the functions of the keys and thus be able to change or not the title of the task */}
      {isEditing ? (
        <div className="column seven wide">
          <i className="certificate icon"></i>
          <div className="ui input fluid">
            <input
              onChange={handleInputOnChange}
              onKeyDown={handleInputKeyDown}
              autoFocus={true}
              value={tempValue}
            />
          </div>
        </div>
      ) : (
        //And if not, just display the task with the completed or deleted buttons
        <div className="todoItem">
          <div
            className="wide mobile six wide computer twelve wide tablet column "
            onDoubleClick={handleDivDoubleClick}
          >
            <h2
              className={"ui header"}
              id={completedState ? "completedTodo" : ""}
            >
              <span>
                <IoMdFlower className="prueba" id="flower-list" />
              </span>
              {value}
            </h2>
          </div>
          <div className="butons">
            <div className="column one wide">
              <button
                className={
                  "ui button circular icon" +
                  (completedState ? " blue" : " green")
                }
                onClick={handleButtonClick}
              >
                <i className="white check icon"></i>
              </button>
            </div>

            <div className="column one wide">
              <button
                onClick={handleDeleteClick}
                className="ui button circular icon red"
              >
                <i className="white remove icon"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
