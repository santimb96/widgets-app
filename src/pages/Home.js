import React from "react";
import AccordionList from "../components/AccordionList";
import Items from "../services/items"

const Home = () => {
    return (
        <div className="container-fluid">
            <AccordionList items={Items} />
        </div>
    )
}

export default Home;