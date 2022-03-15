import React from "react";
import "../styles/modal.css";
import { IoMdFlower } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

export const Modal = ({
  title,
  list,
  status,
  setOpenModal,
  removeTodoListProp,
}) => {
  // Filter items according to the status (completed or deleted)
  const filter = list.filter((item) => item[status]);
  return (
    <div className="modal">
      <div className="containerModal">
        <div className="containerTitle">
          <button
            className="close"
            onClick={() => setOpenModal((prevState) => !prevState)}
          >
            <IoIosClose />
          </button>
          <h2
            id="title"
            className={
              status === "deleted" ? "iconColor-deleted" : "iconColor-completed"
            }
          >
            {title}
          </h2>
        </div>
        <div className="modalFil">
          {status === "deleted"  && list.find((item) => item.deleted) ? (
            <p>Al dar click en la x, la tarea será eliminada permanentemente</p>
           ): status === "completed"  && list.find((item) => item.completed ) ? (
            <p>Al dar click en la x, la tarea será eliminada permanentemente</p> 
          ) : status === "deleted" && !list.find((item) => item.deleted) ? (
            <p>No hay tareas eliminadas</p>
          ) : status === "completed" && !list.find((item) => item.completed) ? (
            <p>No hay tareas completadas</p>
          ) : null}
          <div className="modalFilter">
            {filter.map((item, index) => (
              <div
                key={index}
                className={
                  status === "deleted" || status === "completed"
                    ? "modalTodo modalTodo--grid"
                    : "modalTodo"
                }
              >
                <h3 className="">
                  <span>
                    <IoMdFlower
                      className={
                        status === "deleted" 
                          ? "iconColor-deleted"
                          : "iconColor-completed"
                      }
                    />
                  </span>
                  {item.title}
                </h3>
                {status === "deleted" || status === "completed" ? (
                  <button
                    className="ui button circular icon black"
                    onClick={() => removeTodoListProp(item._id)}
                  >
                    <i className="white remove icon"></i>
                  </button>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
