import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import Doing from "./Doing";

const TodosList = ({ list }) => {
  const [doing, setDoing] = useState([]);
  const idRef = useRef(0);
  const [todoList, setTodoList] = useState([]);

  const onClicked = (term) => {
    idRef.current = +term.id;
    setDoing([
      ...doing,
      todoList?.filter((todo) => todo.id === +idRef.current),
    ]);

    if (todoList.length === 1) {
      setTodoList(null);
      <h1>No hay elementos</h1>
    } else {
      setTodoList(todoList?.filter((todo) => todo.id !== +idRef.current));
    }

  };

  const onClickedDone = (term) => {
    console.warn(term);
  }

  useEffect(() => {
    setTodoList(list);
  }, []);

  let listTodo =
    todoList === null
      ? <h1 className="text-danger p-3">No hay elementos</h1>
      : todoList?.map((todo) => (
          <Todo
            onClick={onClicked}
            key={todo.id.toString()}
            title={todo.title}
            idx={todo.id}
          />
        ));

  let listDoing = doing.flat().sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)?.map((d) => (
    doing === null
      ? <h1 className="text-danger p-3">No hay elementos</h1>
      :
    <Doing
      onClickDone={onClickedDone}
      key={d.id.toString()}
      title={d.title}
      idx={d.id}
    />
  ));    
        

  return (
    <div>
      <div className="d-flex flex-row justify-content-center">{listTodo}</div>
      <hr className="m-3" style={{ border: "3px solid black" }} />
      <div className="d-flex flex-row justify-content-center">{listDoing}</div>
      <hr className="m-3" style={{ border: "3px solid black" }} />
    </div>
  );
};

TodosList.defaultProps = {
  list: [
    {
      title: "No TODO",
    },
  ],
};

TodosList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default TodosList;
