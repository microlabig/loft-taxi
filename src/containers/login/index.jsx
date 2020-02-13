import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserLogin, getAuthed } from "../../store/user";
import LogoCompany from "../../shared/logocompany";
import FormLogin from "./formLogin";
import DescpriptionForForm from "../../shared/descriptionForForm";
import "./styles.scss";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authed = useSelector(state => getAuthed(state));

  useEffect(() => {
    if (authed) {
      history.push("/map");
    }
  }, [authed, history]);

  const submitData = ({ email, password }) => {
    dispatch(
      fetchUserLogin({
        // email: "test1211@exa4mple.com",
        // password: "password00001654564"
        email,
        password
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
