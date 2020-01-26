import React from "react";

import FormPaymentDone from '../../forms/done/payment';
import NumberInput from '../../numberinput';
import CVC from '../../cvc';

import { TextField, Button, Paper } from "@material-ui/core";

import './styles.scss';

const FormPayment = ({ changeShowForm, showForm }) => {
    const formTemplate = (
        <>
            <div className="form__card">
                <Paper elevation={3} className="form__side">
                    <div className="form__side-facial">
                            <div className="form__mastercard-logo"/>
                            <NumberInput 
                                label="Номер карты:" 
                                textmask="" 
                                format="#### #### #### ####"
                                className="form__input"
                            />
                            <NumberInput 
                                label="Срок действия:" 
                                textmask="" 
                                format="##/##"
                                className="form__input validity"
                            />
                    </div>
                </Paper>
                <Paper elevation={3} className="form__side">
                    <div className="form__side-reverse">
                        <TextField 
                            required 
                            name="userName" 
                            label="Имя владельца:" 
                            defaultValue="USER NAME"
                            fullWidth={true} 
                            className="form__input"
                        />  
                        <CVC className="form__input"/>
                    </div>
                </Paper>
                
            </div>
            <div className="form__elements">
                <label className="form__row button-submit">
                    <Button 
                        name="call" 
                        onClick={changeShowForm}
                        variant="contained" 
                        color="primary"
                        className="form__button"
                    >
                        Сохранить
                    </Button>
                </label>
            </div>
        </>
    );

    return (
        <div className="paymentform">
            <form className="form" name="formPayment">
                <h2 className="form__title">Профиль</h2>
                <p className="form__description">Способ оплаты</p>
                {showForm ? formTemplate : <FormPaymentDone changeShowForm={changeShowForm}/>}
            </form>
        </div>
    );
}

export default FormPayment;