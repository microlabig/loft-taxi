import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

import { TextField } from "@material-ui/core";
import './style.scss';

const NumberInput = ({textmask, format, label, type, className, onChangeValue}) => {
  return (
      <NumberFormat 
        required
        label={label}
        type={type}
        textmask={textmask} 
        customInput={TextField} 
        format={format}
        autoComplete="new-password"
        fullWidth={true}
        className={className}
        onValueChange={(values) => onChangeValue(values.formattedValue)}
      />
  );
};

NumberInput.defaultValue = {
  textmask: '', 
  format: '', 
  label: '', 
  className: ''
}

NumberInput.propTypes = {
  textmask: PropTypes.string.isRequired, 
  format:PropTypes.string.isRequired, 
  label:PropTypes.string.isRequired, 
  className:PropTypes.string
}

export default NumberInput;

