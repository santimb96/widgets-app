import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import AccordionItem from "./AccordionItem";

const Accordion = ({ items }) => {
  const [elem, setElem] = useState([]);

  useEffect(() => {
    setElem(items);
  }, [items]);

  const getItems = elem.map ((item, idx) => <AccordionItem key={idx.toString()} item={item} idx={idx}/>);

  return (
    <div className="accordion" id="accordionId">
        {getItems}
    </div>
  );
};

Accordion.defaultProps = {
  items: [
    {
      title: "Items no encontrados",
      content:
        "No se han encontrado los items, por lo que se ha establecido este por defecto",
    },
  ],
};

Accordion.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Accordion;
