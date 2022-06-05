import React, {useState, useEffect, useContext} from "react";
import Loader from "../ui-kit/Loader.js";
import {LangContext} from "../LangContext.js";
import {Button} from '../ui-kit/Button.js';

export default function Index(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [selected, setSelected] = useState([]);
    const langContext = useContext(LangContext);

    useEffect(() => {
        //TODO: нормальный fetch в нормальный API
        const timerId = setTimeout(() => {
            console.log("Fetch succesfully imitated");
            setIsLoading(false);
        }, 1000);

        return () => {
           clearTimeout(timerId);
        };
    }, [])

    function handleCheckChange(e) {
        if(e.currentTarget.checked) {
            setSelected([...selected, e.currentTarget.closest('tr').dataset.id]);
            e.currentTarget.closest('tr').classList.add('selected');
        }
        else {
            setSelected(selected.filter(key => key !== e.currentTarget.closest('tr').dataset.id));
            e.currentTarget.closest('tr').classList.remove('selected');
        }
    }

    let tournamentsList;
    if (props.tournaments.length > 0) {
        tournamentsList = <table className="table table-borderless">
            <thead>
                <tr>
                    <th>
                        {langContext.language === 'RU' ? 'Название турнира' : 'Tournament name'}
                    </th>
                    <th>
                        {langContext.language === 'RU' ? 'Дата проведения' : 'Date'}
                    </th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.tournaments.map(t => <tr key={t.id} data-id={t.id}>
                    <td>{t.name}</td>
                    <td>{t.date}</td>
                    <td>
                        <Button.Plain small bold>
                            {langContext.language === 'RU' ? 'Редактировать' : 'Edit'}
                        </Button.Plain>
                    </td>
                    <td><input type="checkbox" onChange={handleCheckChange}></input></td>
                </tr>)}
            </tbody>
        </table>
    }
    else {
        tournamentsList = <h3>
            {langContext.language === 'RU' ? 'Турниры не найдены' : 'No tournaments found'}
        </h3>
    }

    return <>
        <h1 className="subtitle text-large text-bold">
            {langContext.language === 'RU' ? 'Турниры' : 'Tournaments'}
        </h1>
        <div className="simple-flex-row">
            <Button.Plain small bold onClick={props.handleAddClick}>
                {langContext.language === 'RU' ? 'Добавить турнир' : 'Add a tournament'}
            </Button.Plain>
            <Button.Plain small bold onClick={() => props.deleteTournaments(selected)} disabled={selected.length === 0}>
                {langContext.language === 'RU' ? 'Удалить турниры' : 'Delete tournaments'}
            </Button.Plain>
        </div>
        <div className="table-container">
            {isLoading ? <Loader /> : tournamentsList}
        </div>
    </>
}