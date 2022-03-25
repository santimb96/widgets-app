import React from "react";
import TodosList from "../components/TodosList";
import todos from "../services/todos";


const Todos = () => {
    return (
        <div className="container-fluid">
            <TodosList list={todos}/>
        </div>
    )
}

export default Todos;