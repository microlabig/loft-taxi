import React from "react";
import {FormControl,TextField} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { ExpandMore } from "@material-ui/icons/";

const AddressSelect = ({ label, list,  onChange }) => {
  const defaultProps = {
    options: list,
    getOptionLabel: option => option.label
  };

  const handleChange = (event, value) => {
    onChange(value)
  }

  return (
    <FormControl fullWidth={true}>
      <Autocomplete
        {...defaultProps}
        clearOnEscape
        autoComplete
        autoHighlight
        popupIcon={<ExpandMore/>}
        onInputChange={(event, value) => handleChange(event, value)}
        renderInput={params => (
          <TextField {...params} label={label} margin="normal" fullWidth />
        )}
      />
    </FormControl>
  );
};

export default AddressSelect;

/*
 <InputLabel id={label}>{helperText}</InputLabel>
      <TextField />
      <Divider className={classes.divider} orientation="vertical" />
      <Select
        label={label}
        value={value}
        name={name}
        IconComponent={ExpandMore}
        className="form__input"
        onChange={e => onChange(e)}
      >
        {adressList.map(address => (
          <MenuItem key={address.value} value={address.value}>
            {address.label}
          </MenuItem>
        ))}
      </Select>
 */
