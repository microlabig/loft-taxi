import React from "react";
import { useSelector } from 'react-redux';
import { getIsLoading } from "../../../profile/store";
import Preloader from "../../../../shared/preloader";

const FormWarning = () => {
    const isLoading = useSelector(state=> getIsLoading(state));

    const preloaderTemplate = (
        <div className="isLoading formRoute warning">
            <Preloader isLoading={isLoading}/>
        </div>
    );

    const warningTemplate = (
        <>
            <h2 className="form__title">Внимание</h2>
            <p className="form__description">Для работы с сервисом введите данные платежной карты в разделе "Профиль"</p>
        </>
    );

    return (
        <>
            {isLoading ? preloaderTemplate : warningTemplate}
        </>
    );
    
}

export default FormWarning;