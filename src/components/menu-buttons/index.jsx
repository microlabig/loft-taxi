import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const MenuButton = ({ name, caption, onClick }) => {
  return (
    <Button
      name={name}
      onClick={e => {
        onClick(e);
      }}
    >
      {caption}
    </Button>
  );
};

// значения props по-умолчанию (заглушки)
MenuButton.defaultProps = {
  onClick: () => {},
  caption: ""
};

// проверка на принимаемый тип данных из props
MenuButton.propTypes = {
  onClick: PropTypes.func,
  caption: PropTypes.string
};

export default MenuButton;
