import React, {useContext} from "react";
import {LangContext} from "../LangContext.js";
import {Button} from '../ui-kit/Button.js';

export default function Main() {
    const langContext = useContext(LangContext);

    return <>
        <h1 className="subtitle text-large">
            {langContext.language === 'RU' ? 'Главная' : 'Main'}
        </h1>
        <div className="simple-flex-column flex-centered">
            <Button.Plain bold>
                {langContext.language === 'RU' ? 'Создать турнир' : 'Create a tournament'}
            </Button.Plain>
            <Button.Plain bold>
                {langContext.language === 'RU' ? 'Добавить ученика' : 'Add a pupil'}
            </Button.Plain>
            <Button.Plain bold>
                {langContext.language === 'RU' ? 'Настройки' : 'Settings'}
            </Button.Plain>
        </div>
    </>
}