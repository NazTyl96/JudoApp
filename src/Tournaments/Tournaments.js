import React, {useState} from "react";
import Index from "./Index.js";
import AddEditForm from "./AddEditForm.js";

export default function Tournaments() {
    const [tournaments, setTournaments] = useState([{id: 1, name: "First tournament", date: "15.05.2022"}])
    const [curView, setCurView] = useState('index');

    function handleAddClick() {
        setCurView('add');
    }

    function deleteTournaments(idArray) {
        setTournaments(tournaments.filter(t => !idArray.includes(t.id.toString())));
    }

    function saveTournament(tournament) {
        setTournaments([...tournaments, tournament]);
        //TODO: нормальный fetch POST
    }

    let renderedView;
    switch (curView) {
        case 'index':
            renderedView = <Index handleAddClick={handleAddClick} deleteTournaments={deleteTournaments} tournaments={tournaments} />;
            break;
        case 'add':
            renderedView = <AddEditForm mode="add" saveTournament={saveTournament} changeView={setCurView}/>;
            break;
    }

    return <>
        {renderedView}
    </>
}