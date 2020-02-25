import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Paper } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import Preloader from "../../../shared/Preloader";
import {
  getCardInfo,
  getCardInfoLoaded,
  getIsLoading,
  fetchCardIsLoadedReset
} from "../store";
import SuccessForm from "./SuccessForm";
import CVC from "./CVC";
import { onChangeValue } from "../../../utils/helpers";
import "./styles.scss";

// ---------
// валидация
// ---------
const validationSchema = Yup.object({
  cardNumber: Yup.string()
    .length(19, "Пример '1234 5678 9012 3456'")
    .matches(/^\d{4} \d{4} \d{4} \d{4}$/i, "Не валидный номер", {
      excludeEmptyString: true
    })
    .required("Введите номер вашей карты"),

  expiryDate: Yup.string()
    .length(5, "Введите валидную дату 'MM/YY'")
    .matches(/^\d{2}\/\d{2}$/i, "Не валидная дата", {
      excludeEmptyString: true
    })
    .test(
      "test expiry date",
      "Не валидная дата или срок действия истек",
      value => {
        if (value && value.length === 5) {
          const findStr = value.match(/.{5}/)[0];

          if (findStr) {
            const month = findStr.match(/^\d+/)[0];
            const year = findStr.match(/\d+$/)[0];
            const currDate = new Date();
            const currYear = currDate
              .getFullYear()
              .toString()
              .slice(2);
            if (month < 0 || month > 12) {
              return false;
            }
            if (year < currYear) {
              return false;
            }
          }
        }

        return true;
      }
    )
    .required("Введите срок действия вашей карты"),

  cardName: Yup.string()
    .min(3, "Введите имя владельца карты")
    .matches(/^\w+ \w+$/i, "Введите валидное имя вида 'ИМЯ ФАМИЛИЯ'", {
      excludeEmptyString: true
    })
    .required("Введите имя владельца карты"),

  cvc: Yup.string()
    .length(3, "Введите CVC")
    .matches(/\d{3}/i, "Пример '123'", { excludeEmptyString: true })
    .required("Введите CVC")
});

// ---------
// компонент
// ---------
const FormPayment = ({ changeShowForm, showForm }) => {
  const dispatch = useDispatch();
  const cardInfo = useSelector(state => getCardInfo(state));
  const cardInfoLoaded = useSelector(state => getCardInfoLoaded(state));
  const isLoading = useSelector(state => getIsLoading(state));

  useEffect(() => {
    if (cardInfoLoaded) {
      dispatch(fetchCardIsLoadedReset());
    }
  });

  const formTemplate = props => {
    const { values, errors, setFieldValue, handleChange, handleSubmit, isValid } = props;
    const { cardNumber, expiryDate, cardName, cvc } = values;

    return (
      <>
        <div className="form__card">
          <Paper elevation={3} className="form__side">
            <div className="form__side-facial">
              <div className="form__mastercard-logo" />
              <TextField
                required
                inputProps={{
                  "data-testid": "input-cardNumber"
                }}
                fullWidth={true}
                name="cardNumber"
                error={Boolean(errors.cardNumber)}
                helperText={errors.cardNumber}
                label="Номер карты:"
                value={cardNumber}
                onChange={e =>
                  onChangeValue(e, {
                    name: "cardNumber",
                    setFieldValue,
                    handleChange
                  })
                }
                className="form__input"
              />
              <TextField
                required
                inputProps={{
                  "data-testid": "input-expiryDate"
                }}
                fullWidth={true}
                name="expiryDate"
                error={Boolean(errors.expiryDate)}
                helperText={errors.expiryDate}
                label="Срок действия:"
                value={expiryDate}
                onChange={e =>
                  onChangeValue(e, {
                    name: "expiryDate",
                    setFieldValue,
                    handleChange
                  })
                }
                className="form__input"
              />
            </div>
          </Paper>
          <Paper elevation={3} className="form__side">
            <div className="form__side-reverse">
              <TextField
                required
                inputProps={{
                  "data-testid": "input-cardName"
                }}
                name="cardName"
                label="Имя владельца:"
                fullWidth={true}
                className="form__input"
                value={cardName}
                error={Boolean(errors.cardName)}
                onChange={handleChange}
                helperText={errors.cardName}
              />
              <CVC
                name="cvc"
                label="CVC:"
                error={Boolean(errors.cvc)}
                helperText={errors.cvc}
                value={cvc}
                onChange={e =>
                  onChangeValue(e, {
                    name: "cvc",
                    setFieldValue,
                    handleChange
                  })
                }
              />
            </div>
          </Paper>
        </div>
        <div className="form__elements">
          <div className="form__row button-submit">
            {isLoading ? (
              <div className="isLoading formRoute">
                <Preloader isLoading={isLoading} />
              </div>
            ) : (
              <Button
                disabled={!isValid}
                name="save"
                onClick={handleSubmit}
                type="submit"
                variant="contained"
                color="primary"
                className="form__button"
                data-testid="button-save"
              >
                Сохранить
              </Button>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="paymentform">
      <h2 className="form__title">Профиль</h2>
      <p className="form__description">Способ оплаты</p>
      <Formik
        initialValues={{ ...cardInfo }}
        validationSchema={validationSchema}
        onSubmit={value => changeShowForm(value)}
      >
        {props => (
          <form
            className="form"
            name="formPayment"
            autoComplete="off"
            onSubmit={props.handleSubmit}
          >
            {showForm ? formTemplate(props) : <SuccessForm />}
          </form>
        )}
      </Formik>
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
