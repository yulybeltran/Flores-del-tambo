import React, { useState, useEffect } from "react";
import todos from "./apis";
import "./styles/app.css";
import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";
import Navbar from "./components/Navbar";

const appTitle = "Lista de tareas";

const App = () => {
  // Handle list to render
  const [todoList, setTodoList] = useState([]);
  // Handle filtered list to render
  const [task, setTask] = useState("");

  // Get data from api
  useEffect(() => {
    async function fetchData() {
      const { data } = await todos.get("/todos");
      setTodoList(data);
    }
    fetchData();
  }, [todoList]);

  // Add new items
  const addTodo = async (item) => {
    const { data } = await todos.post("/todos", item);
    setTodoList((oldList) => [...oldList, data]);
  };

  // Remove item depending on its id
  const removeTodo = async (id) => {
    await todos.delete(`/todos/${id}`);
    setTodoList((oldList) => oldList.filter((item) => item._id !== id));
  };

  // Edit item depending on its id and the information to be updated
  const editTodo = async (id, item) => {
    await todos.put(`/todos/${id}`, item);
  };

  /* 
  Filter list depending on what the user types
  Validations for capitalization and diacritical accents 
  */
  const filteredTasks = todoList.filter((item) => {
    return item.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(
        task
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      );
  });

  return (
    <div className="container">
      <Navbar
        list={todoList}
        task={task}
        setTask={setTask}
        removeTodoListProp={removeTodo}
      />
      <Section>
        <h1>{appTitle}</h1>
      </Section>

      <Section>
        <Form addTodo={addTodo} />
      </Section>

      <Section>
        <List
          editTodoListProp={editTodo}
          removeTodoListProp={removeTodo}
          list={task ? filteredTasks : todoList}
          //If user types something on searchbar pass filtered items, otherwise pass full list
        />
      </Section>
      <footer className="footer">
      <h4> © 2022 FLORES DEL TAMBO </h4>
      </footer>
    </div>
  );
};

export default App;
