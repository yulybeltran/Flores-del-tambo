import React, { useState } from "react";
import { BsListCheck } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import "../styles/navbar.css";
import logo from "../assets/Logoflor.png";
import { Modal } from "./Modal.js";
import { Searchbar } from "./Searchbar";

const Navbar = ({ list, task, setTask, removeTodoListProp }) => {
  // Handle if the modal is shown or not
  const [openModal, setOpenModal] = useState(false);

  // Handle information to be displayed in the modal
  const [modalInfo, setModalInfo] = useState({ title: "", status: "" });

  // Depending on the selected button,show modal and establish the information to be displayed
  const handleModal = (statusTitle, statusClick) => {
    setOpenModal(!openModal);
    setModalInfo({ title: statusTitle, status: statusClick });
  };
  return (
    <div className="navbar">
      <div className="nav">
        <h1>Flores del Tambo</h1>
        <div className="icons">
          <Searchbar task={task} setTask={setTask} />
          <BsListCheck
            onClick={() => handleModal("Tareas Completadas", "completed")}
          />
          <MdDelete
            onClick={() => handleModal("Tareas Eliminadas", "deleted")}
          />
        </div>
      </div>
      <img src={logo} alt={logo} />
      <p>
        El éxito es la suma de pequeños esfuerzos repetidos un día sí y otro
        también.{" "}
      </p>
      {/* If the modal is shown, display the information*/}
      {openModal ? (
        <Modal
          setOpenModal={setOpenModal}
          title={modalInfo.title}
          status={modalInfo.status}
          list={list}
          removeTodoListProp={removeTodoListProp}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
