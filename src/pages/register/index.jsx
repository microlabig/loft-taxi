import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRegister } from "../../store/user";

import LogoCompany from "../../components/logocompany";
import FormRegister from "../../components/forms/register";
import DescpriptionForForm from "../../components/forms/description";

import "./styles.scss";

const RegisterFormPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authed = useSelector(state => state.user.authed);

  useEffect(() => {
    if (authed) {
      history.push("/map");
    }
  }, [authed, history]);

  const submitData = (e, {email, password, name, surname}) => {
    e.preventDefault();
    dispatch(
      fetchUserRegister({
        // email: "test1211@exa4mple.com",
        // password: "password00001654564",
        // name: "Name",
        // surname: "Surname"
        email,
        password,
        name,
        surname
      })
    );
  };

  const toAction = e => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <div className="login newuser">
      <div className="login__container">
        <div className="login__logo">
          <LogoCompany type={"white"} />
        </div>
        <div className="login__data">
          <DescpriptionForForm
            headingText={"Регистрация"}
            questionText={"Уже зарегистрирован? "}
            actionTextLink={"Войти"}
            toAction={toAction}
          />
          <FormRegister submitData={submitData} />
        </div>
      </div>
    </div>
  );
};

export default RegisterFormPage;
