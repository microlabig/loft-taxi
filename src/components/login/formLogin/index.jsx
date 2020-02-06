import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useSelector } from 'react-redux';
import { getIsLoading } from '../../../store/user';

import { TextField, Button } from "@material-ui/core";
import "./styles.scss";

import Preloader from "../../../shared/preloader";

const FormLogin = ({ submitData }) => {
  const [values, setValues] = useState({
    emailValue: "",
    passwordValue: ""
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const isLoading = useSelector(state => getIsLoading(state));

  const {emailValue, passwordValue} = values;

  useEffect(() => {
    values.emailValue.length === 0 || values.passwordValue.length === 0
      ? setIsDisabled(true)
      : setIsDisabled(false);
  }, [values]);

  return (
    <form
      className="form"
      name="formLogin"
      onSubmit={e => submitData(e, values)}
    >
      <div className="form__elements">
        <label className="form__row">
          <TextField
            inputProps={{
              "data-testid": "input-email"
            }}
            required
            name="email"
            label="Имя пользователя"
            fullWidth={true}
            autoFocus
            value={emailValue}
            onChange={e => setValues({ ...values, emailValue: e.target.value })}
          />
        </label>
        <label className="form__row">
          <TextField
            required
            inputProps={{
              "data-testid": "input-password"
            }}
            name="password"
            label="Пароль"
            type="password"
            fullWidth={true}
            value={passwordValue}
            onChange={e =>
              setValues({ ...values, passwordValue: e.target.value })
            }
          />
        </label>
      </div>
      <div className="form__elements">
        <label className="form__row button-submit">
          <Preloader isLoading={isLoading}/>
          <Button
            disabled={isDisabled}
            type="submit"
            name="submit"
            variant="contained"
            color="primary"
            data-testid="button-submit"
            className="form__button-submit"
          >
            Войти
          </Button>
        </label>
      </div>
    </form>
  );
};

FormLogin.defaultProps = {
  submitData: () => {}
};

FormLogin.propTypes = {
  submitData: PropTypes.func.isRequired
};

export default FormLogin;
