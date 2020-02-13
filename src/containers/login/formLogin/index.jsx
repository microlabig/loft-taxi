import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import { getIsLoading } from "../../../store/user";
import Preloader from "../../../shared/preloader";
import "./styles.scss";

const validationSchema = Yup.object({
  email: Yup.string("Введите ваш e-mail")
    .email("Введите валидный e-mail вида name@domain.com")
    .required("Поле обязательное для ввода"),
  password: Yup.string("")
    .min(6, "Пароль должен содержать не менее 6 символов")
    .required("Поле обязательное для ввода")
});

const FormLogin = ({ submitData }) => {
  const isLoading = useSelector(state => getIsLoading(state));

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(value) => {
          console.log(value);
          submitData(value)
        }}
      >
        {props => {
          const { values, errors, handleSubmit, handleChange } = props;
          const { email, password } = values;
          return (
            <form className="form" name="formLogin" onSubmit={handleSubmit}>
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
                    value={email}
                    error={Boolean(errors.email)}
                    onChange={handleChange}
                    helperText={errors.email}
                  />
                </label>
                <label className="form__row">
                  <TextField
                    inputProps={{
                      "data-testid": "input-password"
                    }}
                    required
                    name="password"
                    label="Пароль"
                    type="password"
                    fullWidth={true}
                    value={password}
                    error={Boolean(errors.password)}
                    onChange={handleChange}
                    helperText={errors.password}
                  />
                </label>
              </div>
              <div className="form__elements">
                <div className="form__row button-submit">
                  <Preloader isLoading={isLoading} />
                  <Button
                    disabled={(email.length === 0) || (password.length === 0) || isLoading}
                    type="submit"
                    name="submit"
                    variant="contained"
                    color="primary"
                    data-testid="button-submit"
                    className="form__button-submit"
                  >
                    Войти
                  </Button>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

FormLogin.defaultProps = {
  submitData: () => {}
};

FormLogin.propTypes = {
  submitData: PropTypes.func.isRequired
};

export default FormLogin;
