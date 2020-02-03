import React, { useState } from "react";
import PropTypes from 'prop-types';

import FormPaymentDone from '../../forms/done/payment';
import NumberInput from '../../numberinput';
import CVC from '../../cvc';

import { TextField, Button, Paper } from "@material-ui/core";
import './styles.scss';

const FormPayment = ({ changeShowForm, showForm }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cardName, setCardName] = useState('');
    const [cvc, setCvc] = useState('');

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
                                onChangeValue={(value) => setCardNumber(value)}
                            />
                            <NumberInput 
                                label="Срок действия:" 
                                textmask="" 
                                format="##/##"
                                className="form__input validity"
                                onChangeValue={(value) => setExpiryDate(value)}
                            />
                    </div>
                </Paper>
                <Paper elevation={3} className="form__side">
                    <div className="form__side-reverse">
                        <TextField 
                            required 
                            name="userName" 
                            label="Имя владельца:"
                            fullWidth={true} 
                            className="form__input"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                        />  
                        <CVC 
                            className="form__input"
                            onChangeValue={(value) => setCvc(value)}
                        />
                    </div>
                </Paper>
                
            </div>
            <div className="form__elements">
                <label className="form__row button-submit">
                    <Button 
                        name="call" 
                        onClick={(e) => changeShowForm(e, {cardNumber, expiryDate, cardName, cvc})}
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
            <form className="form" name="formPayment" autoComplete="off">
                <h2 className="form__title">Профиль</h2>
                <p className="form__description">Способ оплаты</p>
                {showForm ? formTemplate : <FormPaymentDone />}
            </form>
        </div>
    );
}

FormPayment.defaultProps = {
    changeShowForm: () => { }, 
    showForm: false
}

FormPayment.propTypes = {
    changeShowForm: PropTypes.func.isRequired, 
    showForm: PropTypes.bool.isRequired
}

export default FormPayment;