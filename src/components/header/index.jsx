import React, { Component } from 'react';
import MenuButton from './../menu-buttons';
import PropTypes from 'prop-types';

import { AppContext } from '../../contexts/login-context';

export default class Header extends Component {
    // значения props по-умолчанию (заглушки)
    static defaultProps = {
        checkPage: () => { },
        pages: {}
    }

    // проверка на принимаемый тип данных из props
    static propTypes = {
        checkPage: PropTypes.func,
        pages: PropTypes.object
    }

    static contextType = AppContext; // забираем контекст авторизации

    handleClick = (e) => this.props.checkPage(e.target.name);

    exit = (e) => {
        this.context.logout();
    }

    getButtons = (isLoggedIn) => {
        const pages = this.props.pages;
        const btnList = [];
        
        for (const page in pages) {
            const menuButtonTemplate = (
                <MenuButton
                    onClick={(e) => this.handleClick(e)}
                    caption={page}
                    key={page}
                />
            );
            
            if (pages.hasOwnProperty(page)) { // не искать в __proto__
                if (pages[page].auth) {
                    if (isLoggedIn) {
                        btnList.push(menuButtonTemplate);
                    }
                } else {
                    if (!isLoggedIn) {
                        btnList.push(menuButtonTemplate);
                    }
                }
            }
        }

        return btnList;
    }

    render() {
        return (
            <AppContext.Consumer>
                {({ isLoggedIn }) => (
                    <header>
                        {this.getButtons(isLoggedIn)}
                        {isLoggedIn ? 
                            <MenuButton 
                                caption={'Выйти'}
                                onClick={this.exit}
                            /> : null
                        }
                    </header>
                )}
            </AppContext.Consumer>
        );
    }
}

Header.contextType = AppContext; // заберем контекст авторизации
