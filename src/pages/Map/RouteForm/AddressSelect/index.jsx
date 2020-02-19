import React from "react";
import PropTypes from 'prop-types';
import {FormControl,TextField} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { ExpandMore } from "@material-ui/icons/";

const AddressSelect = ({ label, list, onChange }) => {
  const defaultProps = {
    options: list,
    getOptionLabel: option => option.label
  };

  return (
    <FormControl fullWidth={true}>
      <Autocomplete
        {...defaultProps}
        clearOnEscape
        autoComplete
        autoHighlight
        popupIcon={<ExpandMore/>}
        onInputChange={(event, value, reason) => onChange(event, value, reason)}
        renderInput={params => (
          <TextField {...params} label={label} margin="normal" fullWidth />
        )}
      />
    </FormControl>
  );
};

AddressSelect.defaultProps = {
  label: '',
  list: [],
  onChange: () => { }
}

AddressSelect.propTypes = {
  label: PropTypes.string.isRequired,
  list: PropTypes.array,
  onChange: PropTypes.func.isRequired
}

export default AddressSelect;
