import React, { useState } from "react";
import PropTypes from 'prop-types';

import { TextField, Button } from "@material-ui/core";
import './styles.scss';

const FormLogin = ({ submitData }) => {
    const [values, setValues] = useState({
        emailValue:'', passwordValue:''
    });

    return (
        <form className="form" name="formLogin">
            <div className="form__elements">
                <label className="form__row">
                    <TextField 
                        required 
                        name="email" 
                        label="Имя пользователя"
                        fullWidth={true} 
                        autoFocus
                        value={values.emailValue}
                        onChange={(e) => setValues({...values, emailValue: e.target.value})}
                    />
                </label>
                <label className="form__row">
                    <TextField 
                        required
                        name="password" 
                        label="Пароль"
                        type="password" 
                        fullWidth={true} 
                        value={values.passwordValue}
                        onChange={(e) => setValues({...values, passwordValue: e.target.value})}
                    />
                </label>
            </div>
            <div className="form__elements">
                <label className="form__row button-submit">
                    <Button 
                        name="submit" 
                        onClick={(e) => submitData(e, values)}
                        variant="contained" 
                        color="primary"
                        data-testid="button-submit"
                        className="form__button-submit"
                    >
                        Войти
                    </Button>
                </label>
            </div>
        </form>
    );
}

FormLogin.defaultProps = {
    submitData: () => { }
}

FormLogin.propTypes = {
    submitData: PropTypes.func.isRequired
}

export default FormLogin;
