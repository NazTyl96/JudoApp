import React, {createContext, useState} from "react";

const LangContext = createContext();

function LangProvider (props) {
    const [language, setLanguage] = useState('RU');

    function changeLanguage(lang) {
        setLanguage(lang);
    }

    const value = {
        language: language,
        changeLanguage: changeLanguage
    }

    return <>
        <LangContext.Provider value={value}>
            {props.children}
        </LangContext.Provider>
    </>
}

export {LangContext, LangProvider};