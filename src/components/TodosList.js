import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodosList = ({ list }) => {
  const [doing, setDoing] = useState([]);
  const idRef = useRef(0);
  const [todoList, setTodoList] = useState([]);
  
  const onClicked = (term) => {
    idRef.current = +term.id;
    // console.warn(todoList?.filter(todo => todo.id === +idRef.current));
    setDoing([...doing, todoList?.filter(todo => todo.id === +idRef.current)]);
    setTodoList(todoList?.filter(todo => todo.id !== +idRef.current || todoList.length === 1 ));
    console.warn(todoList);
  }

  useEffect(()=>{
    console.log(doing);
  }, [doing])

  useEffect(()=> {
    setTodoList(list);
  }, []);

  let listTodo = todoList === [] ? 'No hay elementos' : todoList?.map((todo, idx)=> <Todo onClick={onClicked} key={idx.toString()} title={todo.title} idx={idx}/>)

  const render = (
    <div>
      <div className="d-flex flex-row justify-content-center">{listTodo}</div>
      <hr className="m-3" style={{ border: "3px solid black" }} />
    </div>

  );

  return (
      <div>
          {render}
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
