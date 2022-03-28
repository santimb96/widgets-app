import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import translatorApi from "../../api/translatorApi";

const Convert = ({lang, text}) => {
    const [translated, setTranslated] = useState('');

    const postText = async (lang, text) => {
     translatorApi(lang.value, text.trim()).then((data) => setTranslated(data.data.translations[0].translatedText))
    }

    useEffect(()=> {
        postText(lang, text);
    }, [lang, text])

    return (
        <h5 className="text-success">{translated}</h5>
    )
}

Convert.propTypes = {
    lang: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
}

export default Convert;