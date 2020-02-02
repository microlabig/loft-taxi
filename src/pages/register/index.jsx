import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import LogoCompany from "../../components/logocompany";
import FormSubmit from "../../components/forms/submit";
import DescpriptionForForm from "../../components/forms/description";

import "./styles.scss";

const RegisterFormPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const submitData = e => {
    e.preventDefault();
    dispatch({ type: "LOGIN" });
    history.push("/map");
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
          <FormSubmit submitData={submitData} />
        </div>
      </div>
    </div>
  );
};

export default RegisterFormPage;
