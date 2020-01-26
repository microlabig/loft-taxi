import React from "react";

import Hint from '../hint';
import NumberInput from '../../components/numberinput';

import { IconButton, Input, InputLabel, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from '@material-ui/icons';
import HelpOutlineSharpIcon from '@material-ui/icons/HelpOutlineSharp';
import './styles.scss';

const CVC = ({ submitData }) => {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowCVC = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownCVC = (event) => {
        event.preventDefault();
    };

    return (
        <div className="form__cvc">
            <InputLabel htmlFor="formPayment" className="form__cvc-hintwrapper">
                <div className="form__cvc-text">CVC:*</div>
                <div className="form__cvc-helpicon">
                    <Hint textHint="3 последние цифры на оборотной стороне карты">
                        <HelpOutlineSharpIcon fontSize="small"/>
                    </Hint>
                </div>
            </InputLabel>
            
            <Input
                required
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowCVC}
                            onMouseDown={handleMouseDownCVC}
                        >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <div>{values.showPassword ? 'true' : 'false'}</div>
        </div>
    );
}

export default CVC;
