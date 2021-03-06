import React from "react";
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppBar, Paper, Toolbar } from "@material-ui/core";
import { fetchUserLogout } from "../../pages/Login/store";
import { fetchCardReset } from "../../pages/Profile/store";
import { fetchAddressReset } from "../../pages/Map/store";
import MenuButton from "../MenuButton";
import Logo from "../Logo";
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

const Header = ({numCurrentPage}) => {
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
    return PAGES.map((page, index) => {
      return (
        <div className="header__item" key={page.name}>
          <MenuButton
            data-testid={`button-${page.name}`}
            name={page.name}
            caption={page.caption}
            color={numCurrentPage === index ? "secondary": "default"}
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

Header.defaultProps = {
  numCurrentPage: 0
}

Header.propTypes = {
  numCurrentPage: PropTypes.number.isRequired
}

export default Header;
