import React, {useContext, useRef} from "react";
import {Link} from "react-router-dom";
import './Sidepanel.css';
import {LangContext} from '../LangContext.js';

export default function Sidepanel(props) {
    const langContext = useContext(LangContext);
    const ruCheckRef = useRef();
    const engCheckRef = useRef();

    function checkActive(id) {
        if (id === props.curSection)
            return 'active'
    }

    function handleLangCheckChange(e) {
        if(e.currentTarget.value === 'RU') {
            engCheckRef.current.checked = false;
            langContext.changeLanguage('RU');
        }
        else {
            ruCheckRef.current.checked = false;
            langContext.changeLanguage('EN');
        }
    }
    
    return <>
        <div className="sidepanel simple-flex-column flex-centered">
            <Link to="/main">
                <div className={`sidepanel-section ${checkActive('main')}`} id="main" onClick={e => props.onSectionClick(e.target.id)}>
                    {langContext.language === 'RU' ? 'Главная' : 'Main'}
                </div>
            </Link>
            <Link to="/tournaments">
                <div className={`sidepanel-section ${checkActive('tournaments')}`} id="tournaments" onClick={e => props.onSectionClick(e.target.id)}>
                    {langContext.language === 'RU' ? 'Турниры' : 'Tournaments'}
                </div>
            </Link>
            <Link to="/pupils">
                <div className={`sidepanel-section ${checkActive('students')}`} id="students" onClick={e => props.onSectionClick(e.target.id)}>
                    {langContext.language === 'RU' ? 'Ученики' : 'Pupils'}
                </div>
            </Link>
            <div id="sidepanel-lang-section">
                <span>{langContext.language === 'RU' ? 'Язык:' : 'Language:'}</span>
                <div id="sidepanel-lang-checks">
                    <label>
                        RUS:
                        <input type="checkbox" ref={ruCheckRef} onChange={handleLangCheckChange} checked={langContext.language === 'RU'} value="RU" />
                    </label>
                    <label>
                        ENG:
                        <input type="checkbox" ref={engCheckRef} onChange={handleLangCheckChange} checked={langContext.language === 'EN'} value="EN" />
                    </label>
                </div>
            </div>
        </div>
    </>

}