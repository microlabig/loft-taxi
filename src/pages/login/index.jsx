import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserLogin } from "../../store/user";

import LogoCompany from "../../components/logocompany";
import FormLogin from "../../components/forms/login";
import DescpriptionForForm from "../../components/forms/description";

import "./styles.scss";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authed = useSelector(state => state.user.authed);

  useEffect(() => {
    if (authed) {
      history.push("/map");
    }
  }, [authed, history]);

  const submitData = (e, {emailValue, passwordValue}) => {
    e.preventDefault();
    dispatch(
      fetchUserLogin({
        // email: "test1211@exa4mple.com",
        // password: "password00001654564"
        email: emailValue,
        password: passwordValue
      })
    ); 
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
          <FormLogin submitData={submitData}/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
