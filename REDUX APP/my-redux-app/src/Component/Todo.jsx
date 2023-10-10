import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
} from "../redux/Actions/TodoAction"

const Todo = () => {
  const list = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();
  const [inputvalue, setInputValue] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const [currentValue, setCurrentValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const onAddTask = () => {
    if (inputvalue !== "") {
      dispatch(addTodo(inputvalue));
      setInputValue("");
    }
  };

  const handleInputEnter = (event) => {
    if (event.key === "Enter" && inputvalue !== "") {
      dispatch(addTodo(inputvalue));
      setInputValue("");
    }
  };

  const onDeleteTask = (item) => {
    dispatch(deleteTodo(item.id));
  };

  const checkedlist = (clickedtodo) => {
    dispatch(toggleTodo(clickedtodo.id));
  };

  const onEditTodo = (id, newvalue) => {
    dispatch(editTodo(id, newvalue));
  };

  const onSubmitEditTodo = () => {
    onEditTodo(currentId, currentValue);
    setEditing(false);
  };

  const onToggleEdit = (todo) => {
    setEditing(true);
    setCurrentId(todo.id);
    setCurrentValue(todo.name);
  };

  const onEditInputChange = (e) => {
    setCurrentValue(e.target.value);
  };

  const handleReset = () => {
    setInputValue("");
    setCurrentValue("");
  };

  return (
    <>
      <h2>ToDo Updated list</h2>
      <div>
        {!editing ? (
          <div>
            <input
              placeholder="type your task..."
              value={inputvalue}
              onChange={handleInput}
              onKeyDown={handleInputEnter}
            />
            <button onClick={onAddTask}>Add item</button>
            <button onClick={handleReset}>Reset</button>{" "}
          </div>
        ) : (
          <div>
            <input
              placeholder="type your task..."
              value={currentValue}
              name={currentValue}
              onChange={onEditInputChange}
            />
            <button onClick={onSubmitEditTodo}>Update Item</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        )}

        <div>
          {list.map(
            (todo) =>
              !todo.ischecked && (
                <p key={todo.id}>
                  <input
                    type="checkbox"
                    onChange={() => checkedlist(todo)}
                    checked={todo.ischecked}
                  />
                  {todo.name}
                  <button disabled={todo.ischecked} onClick={() => onToggleEdit(todo)}>
                    Edit
                  </button>
                  <button onClick={() => onDeleteTask(todo)}>Remove</button>
                </p>
              )
          )}

          {list.map(
            (tododata) =>
              tododata.ischecked && (
                <p
                  style={{ textDecoration: "line-through", color: "#ccc" }}
                  key={tododata.id}
                >
                  <input
                    type="checkbox"
                    onChange={() => checkedlist(tododata)}
                    checked={tododata.ischecked}
                  />
                  {tododata.name}
                  <button disabled={!tododata.ischecked} onClick={() => onToggleEdit(tododata)}>
                    Edit
                  </button>
                  <button onClick={() => onDeleteTask(tododata)}>Remove</button>
                </p>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;
    









