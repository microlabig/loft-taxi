import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { TextField, Button } from "@material-ui/core";
import { getIsLoading } from '../../../store/user';
import Preloader from "../../../shared/preloader";
import "./styles.scss";

const FormRegister = ({ submitData }) => {
  const [values, setValues] = useState({
    email: "",
    name: "",
    surname: "",
    password: ""
  });
  const {email, name, surname, password} = values;
  const [isDisabled, setIsDisabled] = useState(true);
  const isLoading = useSelector(state => getIsLoading(state));

  useEffect(() => {
    (email.length === 0 || name.length === 0 ||
    password.length === 0 || surname.length === 0)
      ? setIsDisabled(true)
      : setIsDisabled(false);
  }, [email, name, password, surname]);

  return (
    <form
      className="form"
      name="formSubmit"
      onSubmit={e => submitData(e, values)}
    >
      <div className="form__elements">
        <label className="form__row">
          <TextField
            required
            name="email"
            label="Адрес электронной почты"
            type="email"
            fullWidth={true}
            autoFocus
            value={email}
            onChange={e => setValues({ ...values, email: e.target.value })}
          />
        </label>
      </div>
      <div className="form__elements names">
        <label className="form__row">
          <TextField
            required
            name="name"
            label="Имя"
            value={name}
            onChange={e => setValues({ ...values, name: e.target.value })}
          />
        </label>
        <label className="form__row">
          <TextField
            required
            name="surName"
            label="Фамилия"
            value={surname}
            onChange={e => setValues({ ...values, surname: e.target.value })}
          />
        </label>
      </div>
      <div className="form__elements">
        <label className="form__row">
          <TextField
            required
            name="password"
            label="Пароль"
            type="password"
            fullWidth={true}
            value={password}
            onChange={e => setValues({ ...values, password: e.target.value })}
          />
        </label>
      </div>
      <div className="form__elements">
        <div className="form__row button-submit">
          <Preloader isLoading={isLoading}/>
          <Button
            disabled={isDisabled || isLoading}
            type="submit"
            name="submit"
            onClick={e => submitData(e, values)}
            variant="contained"
            color="primary"
          >
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </form>
  );
};

FormRegister.defaultProps = {
  submitData: () => {}
};

FormRegister.propTypes = {
  submitData: PropTypes.func.isRequired
};

export default FormRegister;
