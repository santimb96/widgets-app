import React from "react";
import PropTypes from "prop-types";

const Todo = ({onClick, title, idx}) => {

    const send = (event) => {
        onClick(event.target.nodeName === 'H5' ? event.target.parentElement : event.target);
    }

  return (
    <div onClick={send} id={idx} className="bg-warning p-3 w-25 border border-2 m-1 mt-3">
      <h5 className="text-dark text-center">{title}</h5>
    </div>
  )
};

Todo.defaultProps = {
  title: 'TODO vacío'
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Todo;
