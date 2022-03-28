import React, {useEffect, useState} from "react";
import Dropdown from "../components/langComponents/Dropdown";
import langOptions from "../services/langOptions";
import Search from "../components/common/Search";

const Lang = () => {

    const [lang, setLang] = useState(langOptions[0]);

    const setLanguage = (term) => {
        setLang(langOptions?.find(l => l.label === term));
        //console.warn(lang);
    }

    return (
        <div className="container-fluid">
            <Dropdown options={langOptions} selected={lang} selectedLang={setLanguage}/>
        </div>
    )
} 

export default Lang;