import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ options, selected, selectedLang }) => {
    
  const sel = (dropLang) => {
    selectedLang(dropLang.target.outerText);
  };

  const render = options?.map((lang) => (
    <li key={lang.value} className="dropdown-item" onClick={sel}>
      {lang.label}
    </li>
  ));

  return (
    <div className="dropdown m-5">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selected.label}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {render}
      </ul>
    </div>
  );
};

Dropdown.propTypes = {
    options: PropTypes.array.isRequired,
    selected: PropTypes.object.isRequired,
    selectedLang: PropTypes.func.isRequired
}

export default Dropdown;
