import React from "react";
import PropTypes from 'prop-types';
import { TextField, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from '@material-ui/icons';
import HelpOutlineSharpIcon from '@material-ui/icons/HelpOutlineSharp';
import Hint from './hint';
import './styles.scss';

const CVC = ({ onChange, ...rest }) => {
    const [showPassword, setshowPassword] = React.useState(false);

    const handleClickShowCVC = () => {
        setshowPassword(!showPassword);
    };

    const handleMouseDownCVC = (event) => {
        event.preventDefault();
    };

    return (
        <div className="cvc">
            <div htmlFor="formPayment" className="cvc__wrapper">
            <TextField
                required
                fullWidth={true}
                type={showPassword ? 'text' : 'password'}
                onChange={e => onChange(e)}
                className="form__input"
                {...rest}
              />
                <div className="cvc__helpicon">
                    <Hint textHint="3 последние цифры на оборотной стороне карты" className="cvc__helpicon">
                        <HelpOutlineSharpIcon fontSize="small" />
                    </Hint>
                </div>
                <div className="cvc__button">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowCVC}
                        onMouseDown={handleMouseDownCVC}
                    >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </div>
                
            </div>
        </div>
    );
}

CVC.defaultProps = {
    onChange: () => { }
}

CVC.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default CVC;
