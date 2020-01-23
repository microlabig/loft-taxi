import React, { Component } from "react";
import PropTypes from "prop-types";

import { LoginContext } from "../../api/login-context";

export default class Login extends Component {
    // значения props по-умолчанию (заглушки)
    static defaultProps = {
        setPage: () => { }
    };

    // проверка на принимаемый тип данных из props
    static propTypes = {
        setPage: PropTypes.func
    };

    static contextType = LoginContext; // забираем контекст авторизации

    submitData = (e, contextData = {}) => {
        e.preventDefault();

        contextData.isLoggedIn = contextData.login("", "");

        if (contextData.isLoggedIn) {
            this.props.setPage("map");
        }

        console.log(LoginContext);
        console.log(contextData.isLoggedIn);
    };

    render() {
        // console.log(LoginContext);
        // console.log(this.context.isLoggedIn);

        return (
            <LoginContext.Consumer>
                {({ login, isLoggedIn }) => (
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
                                        onClick={e => this.submitData(e, { login, isLoggedIn })}
                                    >
                                        Отправить
                                    </button>
                                </label>
                            </div>
                        </form>
                    </>
                )}
            </LoginContext.Consumer>
        );
    }
}
