import React, { Component } from 'react';
import MenuButton from './../menu-buttons';
import PropTypes from 'prop-types';

import { LoginContext } from '../../api/login-context';

export default class Header extends Component {
    // значения props по-умолчанию (заглушки)
    static defaultProps = {
        checkPage: () => { },
        pagesList: [],
        loginPagesList: []
    }

    // проверка на принимаемый тип данных из props
    static propTypes = {
        checkPage: PropTypes.func,
        pagesList: PropTypes.array,
        loginPagesList: PropTypes.array
    }

    static contextType = LoginContext;

    handleClick = (e) => this.props.checkPage(e.target.name);

    getButtons = (isLoggedIn) => {
        return this.props.pagesList.map((page, index) => {
            const menuButtonTemplate = (
                <MenuButton
                    onClick={(e) => this.handleClick(e)}
                    page={page}
                    key={index}
                />
            );

            if (this.props.loginPagesList.includes(page)) { // если в списке страниц, зависящих от авторизации, есть название текущей страницы
                if (isLoggedIn) { // и если пользователь авторизовался
                    return menuButtonTemplate;
                }

                return null;
            }

            return menuButtonTemplate;
        });
    }

    render() {
        return (
            <LoginContext.Consumer>
                {({ isLoggedIn }) => (
                    <header>
                        {this.getButtons(isLoggedIn)}
                        <p>{isLoggedIn}</p>
                    </header>
                )}
            </LoginContext.Consumer>
        );
    }
}
