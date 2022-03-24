import React, { useState } from "react";

const Search = ({ value, onSubmit }) => {
  const [text, setText] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
  }

  const onChangeValue = (inputValue) => {
    setText((inputValue.target.value).toLowerCase().trim());
  }

  return (
    <form onSubmit={onFormSubmit} className="input-group p-5 d-flex justify-content-center">
      <div className="form-outline">
        <input type="search" onChange={onChangeValue} id="form1" className="form-control" placeholder="Busca"/>
      </div>
      <button type="submit" className="btn btn-primary">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default Search;
