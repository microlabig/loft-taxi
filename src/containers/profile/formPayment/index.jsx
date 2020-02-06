import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Paper } from "@material-ui/core";
import Preloader from "../../../shared/preloader";
import {
  getCardInfo,
  getCardInfoLoaded,
  getIsLoading,
  fetchCardIsLoadedReset
} from "../../../store/card";
import FormPaymentDone from "./formSuccess";
import NumberInput from "../../../shared/numberinput";
import CVC from "./cvc";
import "./styles.scss";

const FormPayment = ({ changeShowForm, showForm }) => {
  const dispatch = useDispatch();
  const cardInfo = useSelector(state => getCardInfo(state));
  const cardInfoLoaded = useSelector(state => getCardInfoLoaded(state));
  const [values, setValues] = useState({ ...cardInfo });
  const isLoading = useSelector(state => getIsLoading(state));

  useEffect(() => {
    if (cardInfoLoaded) {
      setValues({ ...values, ...cardInfo });
      dispatch(fetchCardIsLoadedReset());
    }
  }, [cardInfoLoaded, dispatch, cardInfo, values]);

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
              currentValue={values.cardNumber}
              onChangeValue={value =>
                setValues({ ...values, cardNumber: value })
              }
              className="form__input"
            />
            <NumberInput
              label="Срок действия:"
              textmask=""
              format="##/##"
              currentValue={values.expiryDate}
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
              onChange={e =>
                setValues({ ...values, cardName: e.target.value.toUpperCase() })
              }
            />
            <CVC
              className="form__input"
              currentValue={values.cvc}
              onChangeValue={value => setValues({ ...values, cvc: value })}
            />
          </div>
        </Paper>
      </div>
      <div className="form__elements">
        <label className="form__row button-submit">
          {isLoading ? (
            <div className="isLoading formRoute">
              <Preloader isLoading={isLoading} />
            </div>
          ) : (
            <Button
              name="call"
              onClick={e => changeShowForm(e, values)}
              variant="contained"
              color="primary"
              className="form__button"
            >
              Сохранить
            </Button>
          )}
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
