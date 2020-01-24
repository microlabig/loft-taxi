import React, { Component } from "react";
import PropTypes from "prop-types";

import { AppContext } from "../../contexts/login-context";

export default class LoginPage extends Component {
    // значения props по-умолчанию (заглушки)
    static defaultProps = {
        setPage: () => { }
    };

    // проверка на принимаемый тип данных из props
    static propTypes = {
        setPage: PropTypes.func
    };

    submitData = (e, login) => {
        e.preventDefault();
        this.context.login("email", "password");
    };

    render() {
        return (
            <AppContext.Consumer>
                {({ isLoggedIn }) => (
                    <>
                        <h1>LOGIN</h1>
                        <form name="formLogin">
                            <div>
                                <label>
                                    <input type="text" name="name" />
                                </label>
                                <label>
                                    <input type="password" name="password" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <button
                                        type="submit"
                                        name="submit"
                                        onClick={this.submitData}
                                    >
                                        Отправить
                                    </button>
                                </label>
                            </div>
                        </form>
                    </>
                )}
            </AppContext.Consumer>
        );
    }
}

LoginPage.contextType = AppContext; // заберем контекст авторизации
