import React, { useState } from "react";
import PropTypes from 'prop-types';

import { TextField, Button } from "@material-ui/core";
import './styles.scss';

const FormRegister = ({ submitData }) => {
    const [values, setValues] = useState({
        email:'', name:'', surname:'', password:''
    });

    return (
        <form className="form" name="formSubmit">
            <div className="form__elements">
                <label className="form__row">
                    <TextField 
                        required 
                        name="email" 
                        label="Адрес электронной почты" 
                        type="email"
                        fullWidth={true} 
                        autoFocus
                        value={values.email}
                        onChange={(e) => setValues({...values, email: e.target.value})}
                    />
                </label>
            </div>
            <div className="form__elements names">
                <label className="form__row">
                    <TextField 
                        required
                        name="name" 
                        label="Имя" 
                        value={values.name}
                        onChange={(e) => setValues({...values, name: e.target.value})}
                    />
                </label>
                <label className="form__row">
                    <TextField 
                        required
                        name="surName" 
                        label="Фамилия" 
                        value={values.surname}
                        onChange={(e) => setValues({...values, surname: e.target.value})}
                    />
                </label>
            </div>
            <div className="form__elements">
                <label className="form__row">
                    <TextField 
                        required
                        name="password" 
                        label="Пароль" 
                        type="password" 
                        fullWidth={true} 
                        value={values.password}
                        onChange={(e) => setValues({...values, password: e.target.value})} 
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
                    >
                        Зарегистрироваться
                    </Button>
                </label>
            </div>
        </form>
    );
}

FormRegister.defaultProps = {
    submitData: () => { }
}

FormRegister.propTypes = {
    submitData: PropTypes.func.isRequired
}

export default FormRegister;