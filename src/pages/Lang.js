import React, { useEffect, useState } from "react";
import Dropdown from "../components/langComponents/Dropdown";
import langOptions from "../services/langOptions";
import Convert from "../components/langComponents/Convert";

const Lang = () => {
  const [lang, setLang] = useState(langOptions[0]);
  const [text, setText] = useState("Hola mundo!");

  const setLanguage = (term) => {
    setLang(langOptions?.find((l) => l.label === term));
  };

  return (
    <div className="container-fluid">
      <div className="mt-5 d-flex justify-content-center">
        <input
          placeholder="type your text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-center">
        <Dropdown
          key={lang.value}
          options={langOptions}
          selected={lang}
          selectedLang={setLanguage}
        />
      </div>

      <div className="d-flex justify-content-center">
        <div className="mb-5">
          <Convert lang={lang} text={text} />
        </div>
      </div>
    </div>
  );
};

export default Lang;
