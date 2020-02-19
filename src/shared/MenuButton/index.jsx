import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const MenuButton = ({ name, caption, onClick, ...rest }) => {
  return (
    <Button
      name={name}
      onClick={e => onClick(e)}
      {...rest}
    >
      {caption}
    </Button>
  );
};

// значения props по-умолчанию (заглушки)
MenuButton.defaultProps = {
  name: "",
  caption: "",
  onClick: () => {},
};

// проверка на принимаемый тип данных из props
MenuButton.propTypes = {
  name: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;
