import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRegister, getAuthed } from "../Login/store";
import LogoCompany from "../../shared/Logo";
import FormRegister from "./RegisterForm";
import DescpriptionForForm from "../../shared/DescriptionForForm";
import "./styles.scss";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authed = useSelector(state => getAuthed(state));

  useEffect(() => {
    if (authed) {
      history.push("/map");
    }
  }, [authed, history]);

  const submitData = ({email, password, name, surname}) => {
    dispatch(
      fetchUserRegister({
        email,
        password,
        name,
        surname
      })
    );
  };

  const goToPage = e => {
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
            goToPage={goToPage}
          />
          <FormRegister submitData={submitData} />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
