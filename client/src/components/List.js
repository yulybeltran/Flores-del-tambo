import React from "react";
import Todo from "./Todo";

const List = ({ list, removeTodoListProp, editTodoListProp }) => {
  // Display only the tasks that are not deleted

  const renderedList = list
    .filter((item) => !item.deleted)
    .map((item) => (
      <Todo
        title={item.title}
        completed={item.completed}
        deleted={item.deleted}
        removeTodoItemProp={(e) => removeTodoListProp(item._id)}
        editTodoItemProp={(updatedItem) =>
          editTodoListProp(item._id, updatedItem)
        }
        key={item._id}
      />
    ));
  return (
    <>
      <div className="ui one column centered grid">{renderedList}</div>
    </>
  );
};

export default List;
