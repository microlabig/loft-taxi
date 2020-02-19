import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import { getIsLoading } from "../../Login/store";
import Preloader from "../../../shared/Preloader";
import "./styles.scss";

const validationSchema = Yup.object({
  email: Yup.string()
    .min(6, "Введите ваш e-mail")
    .email("Введите валидный e-mail вида name@domain.com")
    .required("Введите ваш e-mail"),
  name: Yup.string("")
    .max(15, "Имя должно содержать не более 15 символов")
    .required("Введите ваше имя"),
  surname: Yup.string("")
    .max(30, "Имя должно содержать не более 30 символов")
    .required("Введите вашу фамилию"),
  password: Yup.string("")
    .min(6, "Пароль должен содержать не менее 6 символов")
    .required("Введите пароль")
});

const FormRegister = ({ submitData }) => {
  const isLoading = useSelector(state => getIsLoading(state));

  return (
    <>
      <Formik
        initialValues={{ email: "", name: "", surname: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={value => submitData(value)}
      >
        {props => {
          const { values, errors, handleSubmit, handleChange, isValid } = props;
          const { email, name, surname, password } = values;

          return (
            <form className="form" name="formSubmit" onSubmit={handleSubmit}>
              <div className="form__elements">
                <label className="form__row">
                  <TextField
                    required
                    name="email"
                    label="Адрес электронной почты"
                    //type="email"
                    inputProps={{
                      "data-testid": "input-email"
                    }}
                    fullWidth={true}
                    autoFocus
                    value={email}
                    helperText={errors.email}
                    error={Boolean(errors.email)}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="form__elements names">
                <label className="form__row">
                  <TextField
                    required
                    name="name"
                    label="Имя"
                    inputProps={{
                      "data-testid": "input-name"
                    }}
                    value={name}
                    helperText={errors.name}
                    error={Boolean(errors.name)}
                    onChange={handleChange}
                  />
                </label>
                <label className="form__row">
                  <TextField
                    required
                    name="surname"
                    label="Фамилия"
                    inputProps={{
                      "data-testid": "input-surname"
                    }}
                    value={surname}
                    helperText={errors.surname}
                    error={Boolean(errors.surname)}
                    onChange={handleChange}
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
                    inputProps={{
                      "data-testid": "input-password"
                    }}
                    fullWidth={true}
                    value={password}
                    helperText={errors.password}
                    error={Boolean(errors.password)}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="form__elements">
                <div className="form__row button-submit">
                  <Preloader isLoading={isLoading} />
                  <Button
                    disabled={!isValid || isLoading}
                    type="submit"
                    name="register"
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                    data-testid="button-submit"
                    className="form__button-submit"
                  >
                    Зарегистрироваться
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

FormRegister.defaultProps = {
  submitData: () => {}
};

FormRegister.propTypes = {
  submitData: PropTypes.func.isRequired
};

export default FormRegister;
