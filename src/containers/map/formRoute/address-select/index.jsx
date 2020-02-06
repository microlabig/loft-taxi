import React from 'react';
import { useSelector } from "react-redux";
import { TextField, MenuItem } from "@material-ui/core";
import { getAdressList } from "../../../../store/address";

const AddressSelect = ({ ...rest }) => {  
  const adressList = useSelector(state => getAdressList(state));

  return (
    <TextField
      select
      {...rest}
      fullWidth={true}
      className="form__input"
    >
      {adressList.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default AddressSelect;
