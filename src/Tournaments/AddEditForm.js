import React, {useState, useContext} from "react";
import {LangContext} from "../LangContext.js";
import {Button} from '../ui-kit/Button.js';

export default function AddEditForm(props) {
    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());
    const langContext = useContext(LangContext);

    async function handleFormSubmit(event) {
        event.preventDefault();
        const tournament = {id: 0, name: name, date: date.toLocaleDateString()};
        await props.saveTournament(tournament);
        props.changeView('index');
    }

    let curForm;
    switch (props.mode) {
        case 'add':
            curForm = <form onSubmit={handleFormSubmit} className="simple-flex-column">
                <div className="simple-flex-column gapless">
                    <label htmlFor="name" className=" text-bold">
                        {langContext.language === 'RU' ? 'Название турнира' : 'Tournament name'}
                    </label>
                    <input className="input-plain" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="simple-flex-column gapless">
                    <label htmlFor="date" className="text-bold">
                        {langContext.language === 'RU' ? 'Дата проведения' : 'Date'}
                    </label>
                    <input className="input-plain" type="date" id="date" value={date.toISOString().substring(0, 10)} onChange={(e) => setDate(e.currentTarget.valueAsDate)} />
                </div>
                <button className="button-plain text-small text-bold" type="submit">
                    {langContext.language === 'RU' ? 'Сохранить' : 'Save'}
                </button>
            </form>;
            break;
    }

    return <>
        <Button.Transparent bold onClick={() => props.changeView('index')}>
            ← {langContext.language === 'RU' ? 'Назад' : 'Return'}
        </Button.Transparent>
        {curForm}
    </>
}