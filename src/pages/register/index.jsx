import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RegisterForm extends Component {
    // значения props по-умолчанию (заглушки)
    static defaultProps = {
        setPage: () => {}
    }

    // проверка на принимаемый тип данных из props
    static propTypes = {
        setPage: PropTypes.func
    }

    submitData = (e) => {
        e.preventDefault();
        this.props.setPage('map');
    }

    render() {
        return (
            <>
                <h1>SUBMIT</h1>
                <form name="formRegister">
                    <div>
                        <label>
                            <div>Адрес электронной почты</div>
                            <input type="email" name="email"/>
                        </label>
                        <label>
                            <div>Имя</div>
                            <input type="text" name="name"/>
                        </label>
                        <label>
                            <div>Фамилия</div>
                            <input type="text" name="lasName"/>
                        </label>
                        <label>
                            <div>Пароль</div>
                            <input type="password" name="password"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <button type="submit" name="submit" onClick={this.submitData}>Зарегистрироваться</button>
                        </label>
                    </div>
                </form>
            </>
        );
    }
}
