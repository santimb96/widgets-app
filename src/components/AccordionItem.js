import React from "react";
import PropTypes from "prop-types";

const AccordionItem = ({ item, idx }) => {

  return (
      <div className="accordion-item">
        <h2 className="accordion-header" id={idx}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${idx}`}
            aria-expanded="true"
            aria-controls={`collapse${idx}`}
          >
            #{idx} {item.title}
          </button>
        </h2>
        <div
          id={`collapse${idx}`}
          className="accordion-collapse collapse collaps"
          aria-labelledby={idx}
          data-bs-parent="#accordionId"
        >
          <div className="accordion-body">
            <p className="p-2">{item.content}</p>
          </div>
        </div>
      </div>
  );
};

AccordionItem.defaultProps = {
  item: {
    title: "Item no encontrado!",
    content: "Item por defecto al no encontrar ninguno",
  },
  idx: 0,
};

AccordionItem.propTypes = {
  item: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};

export default AccordionItem;
