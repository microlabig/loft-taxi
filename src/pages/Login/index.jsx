import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserLogin, getAuthed } from "./store";
import Logo from "../../shared/Logo";
import LoginForm from "./LoginForm";
import DescpriptionForForm from "../../shared/DescriptionForForm";
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
        email,
        password
      })
    ); 
  };

  const goToPage = e => {
    e.preventDefault();
    history.push("/register");
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <Logo type={"white"} showIcon={true} />
        </div>
        <div className="login__data">
          <DescpriptionForForm
            headingText={"Войти"}
            questionText={"Новый пользователь? "}
            actionTextLink={"Зарегистрируйтесь"}
            goToPage={goToPage}
          />
          <LoginForm submitData={submitData}/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
