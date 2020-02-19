import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import { getIsLoading } from "../store";
import Preloader from "../../../shared/Preloader";
import "./styles.scss";

const validationSchema = Yup.object({
  email: Yup.string()
    .min(5,"Введите ваш e-mail")
    .email("Введите валидный e-mail вида name@domain.com")
    .required("Введите ваш e-mail"),
  password: Yup.string("")
    .min(6, "Пароль должен содержать не менее 6 символов")
    .required("Введите пароль")
});

const LoginForm = ({ submitData }) => {
  const isLoading = useSelector(state => getIsLoading(state));

  return (
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={value => submitData(value)}
      >
        {props => {
          const { values, errors, handleSubmit, handleChange, isValid } = props;
          const { email, password } = values;
            
          return (
            <form className="form" name="LoginForm" onSubmit={handleSubmit}>
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
                    disabled={!isValid || isLoading}
                    type="submit"
                    name="auth"
                    onClick={handleSubmit}
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
  );
};

LoginForm.defaultProps = {
  submitData: () => { }
};

LoginForm.propTypes = {
  submitData: PropTypes.func.isRequired
};

export default LoginForm;
