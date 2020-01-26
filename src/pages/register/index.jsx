import React, { Component } from "react";
import PropTypes from "prop-types";

import LogoCompany from '../../components/logocompany';
import FormSubmit from '../../components/forms/submit';
import DescpriptionForForm from '../../components/forms/description';

import { AuthContext } from "../../contexts/login-context";

import "./styles.scss";

export default class RegisterFormPage extends Component {
  // значения props по-умолчанию (заглушки)
  static defaultProps = {
    setPage: () => {}
  };

  // проверка на принимаемый тип данных из props
  static propTypes = {
    setPage: PropTypes.func
  };

  static contextType = AuthContext; // заберем контекст авторизации

  submitData = (e) => {
    e.preventDefault();
    this.context.login("email", "password");
  };

  toAction = (e) => {
    e.preventDefault();
    this.props.setPage('login');
  }

  render() {
    return (
      <AuthContext.Consumer>
        {() => (
          <div className="login newuser">
            <div className="login__container">
                <div className="login__logo">
                    <LogoCompany type={'white'} />
                </div>
                <div className="login__data">
                    <DescpriptionForForm 
                      headingText={'Регистрация'}
                      questionText={'Уже зарегистрирован? '}
                      actionTextLink={'Войти'}
                      toAction={this.toAction}
                    />
                    <FormSubmit submitData={this.submitData} />
                </div>
            </div>
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}
