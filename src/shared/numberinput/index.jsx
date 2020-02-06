import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { TextField } from "@material-ui/core";
import './style.scss';

const NumberInput = ({ currentValue, onChangeValue, ...rest}) => {
  return (
      <NumberFormat 
        required
        {...rest}
        value={currentValue}
        customInput={TextField} 
        autoComplete="new-password"
        fullWidth={true}
        onValueChange={(values) => onChangeValue(values.formattedValue)}
      />
  );
};

NumberInput.defaultValue = {
  currentValue: '', 
  onChangeValue: () => { }
}

NumberInput.propTypes = {
  currentValue: PropTypes.string.isRequired, 
  onChangeValue: PropTypes.func.isRequired
}

export default NumberInput;

