import React from "react";


import { Button } from "@material-ui/core";
import './styles.scss';

const FormPaymentDone = ({ changeShowForm }) => {
    const handlerClick = (event) => {
        changeShowForm();
    }

    return (
        <>
            <p className="form__textdone">Платёжные данные обновлены. Теперь вы можете заказывать такси.</p>
            <div className="form__elements">
                <label className="form__row">
                    <Button 
                        name="call" 
                        onClick={handlerClick}
                        variant="contained" 
                        color="primary"
                        className="form__button"
                    >
                        Перейти на карту
                    </Button>
                </label>
            </div>
        </>
    );
}

export default FormPaymentDone;