import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { getCardInfo } from "../../../store/card";

import FormPaymentDone from "../../forms/done/payment";
import NumberInput from "../../numberinput";
import CVC from "../../cvc";

import { TextField, Button, Paper } from "@material-ui/core";
import "./styles.scss";

const FormPayment = ({ changeShowForm, showForm }) => {
  const cardInfo = useSelector(state => getCardInfo(state.card));
  const [values, setValues] = useState({
    cardNumber: cardInfo.cardNumber,
    expiryDate: cardInfo.expiryDate,
    cardName: cardInfo.cardName,
    cvc: cardInfo.cvc
  });

  const formTemplate = (
    <>
      <div className="form__card">
        <Paper elevation={3} className="form__side">
          <div className="form__side-facial">
            <div className="form__mastercard-logo" />
            <NumberInput
              label="Номер карты:"
              textmask=""
              format="#### #### #### ####"
              currentValue={cardInfo.cardNumber}
              onChangeValue={value =>
                setValues({ ...values, cardNumber: value })
              }
              className="form__input"
            />
            <NumberInput
              label="Срок действия:"
              textmask=""
              format="##/##"
              currentValue={cardInfo.expiryDate}
              onChangeValue={value =>
                setValues({ ...values, expiryDate: value })
              }
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
              fullWidth={true}
              className="form__input"
              value={values.cardName}
              onChange={e => setValues({ ...values, cardName: e.target.value })}
            />
            <CVC
              className="form__input"
              currentValue={cardInfo.cvc}
              onChangeValue={value => setValues({ ...values, cvc: value })}
            />
          </div>
        </Paper>
      </div>
      <div className="form__elements">
        <label className="form__row button-submit">
          <Button
            name="call"
            onClick={e => changeShowForm(e, values)}
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
};

FormPayment.defaultProps = {
  changeShowForm: () => {},
  showForm: false
};

FormPayment.propTypes = {
  changeShowForm: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired
};

export default FormPayment;
