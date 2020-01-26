import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

import { TextField } from "@material-ui/core";
import './style.scss';

const NumberInput = ({textmask, format, label, type, className}) => {
  return (
      <NumberFormat 
        required
        label={label} 
        value={textmask} 
        customInput={TextField} 
        format={format}
        fullWidth={true}
        className={className}
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
