import React from "react";
import { useSelector } from "react-redux";
import { MenuItem, Select, FormControl, InputLabel } from "@material-ui/core";
import { getAdressList } from "../../../../store/address";

const AddressSelect = ({ name, value, label, helperText, onChange }) => {
  const adressList = useSelector(state => getAdressList(state));
  
  return (
    <FormControl fullWidth={true}>
      <InputLabel id={label}>{helperText}</InputLabel>
      <Select
        label={label}
        value={value}
        name={name}
        className="form__input" 
        onChange={(e) => onChange(e)}
      >
        {adressList.map(address => (
          <MenuItem key={address.value} value={address.value}>
            {address.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AddressSelect;
