import React, { Component } from "react";
import PropTypes from "prop-types";

import LogoCompany from '../../components/logocompany';
import FormLogin from '../../components/forms/login';
import DescpriptionForForm from '../../components/forms/description';

import { AuthContext } from "../../contexts/login-context";

import './styles.scss';

export default class LoginPage extends Component {
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
    this.props.setPage('submit');
  }

  render() {
    return (
      <div className="login">
            <div className="login__container">
                <div className="login__logo">
                    <LogoCompany type={'white'} showIcon={true}/>
                </div>
                <div className="login__data">
                    <DescpriptionForForm 
                      headingText={'Войти'}
                      questionText={'Новый пользователь? '}
                      actionTextLink={'Зарегистрируйтесь'}
                      toAction={this.toAction}
                    />
                    <FormLogin submitData={this.submitData}/>
                </div>
            </div>
      </div>
    );
  }
}
