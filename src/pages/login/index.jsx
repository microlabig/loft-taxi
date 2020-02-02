import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import LogoCompany from "../../components/logocompany";
import FormLogin from "../../components/forms/login";
import DescpriptionForForm from "../../components/forms/description";

import "./styles.scss";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const submitData = e => {
    e.preventDefault();
    dispatch({ type: "LOGIN" });
    history.push("/map");
  };

  const toAction = e => {
    e.preventDefault();
    history.push("/register");
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <LogoCompany type={"white"} showIcon={true} />
        </div>
        <div className="login__data">
          <DescpriptionForForm
            headingText={"Войти"}
            questionText={"Новый пользователь? "}
            actionTextLink={"Зарегистрируйтесь"}
            toAction={toAction}
          />
          <FormLogin submitData={submitData} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
