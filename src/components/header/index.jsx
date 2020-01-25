import React, { Component } from 'react';
import MenuButton from './../menu-buttons';
import PropTypes from 'prop-types';

import Logo from '../logo';

import { AuthContext } from '../../contexts/login-context';

import { AppBar, Paper, Toolbar } from "@material-ui/core";
import './styles.scss';

export default class Header extends Component {
    // значения props по-умолчанию (заглушки)
    static defaultProps = {
        setPage: () => { },
        pages: {}
    }

    // проверка на принимаемый тип данных из props
    static propTypes = {
        setPage: PropTypes.func,
        pages: PropTypes.object
    }

    static contextType = AuthContext; // забираем контекст авторизации

    handleClick = (e) => {
        console.log(1);
        
        this.props.setPage(e.currentTarget.name);
        console.log(e.currentTarget.name);
    }

    exit = (e) => {
        this.context.logout();
    }

    getButtons = (isLoggedIn) => {
        const pages = this.props.pages;
        const btnList = [];
        
        for (const page in pages) {
            const menuButtonTemplate = (
                <div className="header__item" key={page}>
                    <MenuButton
                        name={page}
                        caption={pages[page].caption}
                        onClick={(e) => this.handleClick(e)}
                    />
                </div>
            );
            
            if (pages.hasOwnProperty(page)) { // не искать в __proto__
                if (pages[page].auth) {
                    if (isLoggedIn) {
                        btnList.push(menuButtonTemplate);
                    }
                }
            }
        }

        return btnList;
    }

    // функция рендера header по контексту isLoggedIn
    headerRender = (isLoggedIn) => {
        const headerTemplate = (
                <div className="header">
                    <AppBar position="static">
                        <Paper elevation={3}>
                            <Toolbar className="header__wrapper">
                                <div className="header__logo">
                                    <Logo type={'black'}/>
                                </div>
                                <div className="header__menu">
                                    <div className="header__list">
                                        {this.getButtons(isLoggedIn)}
                                        <div className="header__item">
                                            <MenuButton caption={'Выйти'} onClick={this.exit} />
                                        </div>
                                    </div>
                                </div>
                            </Toolbar>
                        </Paper>
                    </AppBar>
                </div>
        );
        
        return isLoggedIn ? headerTemplate : null;
    };

    render() {
        const isLoggedIn = this.props.isLoggedIn;

        return (
            this.headerRender(isLoggedIn)
        );
    }
}
