import React from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUserLogout } from "../../store/user";
import { fetchCardReset } from "../../store/card";
import { fetchAddressReset } from "../../store/address";

import MenuButton from "../menu-button";
import Logo from "../logocompany";

import { AppBar, Paper, Toolbar } from "@material-ui/core";
import "./styles.scss";

// список страниц
const PAGES = [
  {
    name: "map",
    caption: "Карта"
  },
  {
    name: "profile",
    caption: "Профиль"
  }
];

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = e => history.push(e.currentTarget.name);

  const exit = e => {
    dispatch(fetchUserLogout());
    dispatch(fetchCardReset());
    dispatch(fetchAddressReset());
    history.push("/");
  };

  const getButtons = () => {
    return PAGES.map(page => {
      return (
        <div className="header__item" key={page.name}>
          <MenuButton
            data-testid={`button-${page.name}`}
            name={page.name}
            caption={page.caption}
            onClick={e => handleClick(e)}
          />
        </div>
      );
    });
  };

  return (
    <div className="header">
      <AppBar position="static">
        <Paper elevation={3}>
          <Toolbar className="header__wrapper">
            <div className="header__logo">
              <Logo type={"black"} />
            </div>
            <div className="header__menu">
              <div className="header__list">
                { getButtons() }
                <div className="header__item">
                  <MenuButton caption={"Выйти"} onClick={exit} />
                </div>
              </div>
            </div>
          </Toolbar>
        </Paper>
      </AppBar>
    </div>
  );
};

export default Header;
