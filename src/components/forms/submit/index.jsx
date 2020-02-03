import React, { useState } from "react";
import PropTypes from 'prop-types';

import { TextField, Button } from "@material-ui/core";
import './styles.scss';

const FormSubmit = ({ submitData }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');

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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
            </div>
            <div className="form__elements names">
                <label className="form__row">
                    <TextField 
                        required
                        name="name" 
                        label="Имя" 
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    />
                </label>
                <label className="form__row">
                    <TextField 
                        required
                        name="surName" 
                        label="Фамилия" 
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)} 
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </label>
            </div>
            <div className="form__elements">
                <label className="form__row button-submit">
                    <Button 
                        name="submit" 
                        onClick={(e) => submitData(e, {email, name, surname, password})}
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

FormSubmit.defaultProps = {
    submitData: () => { }
}

FormSubmit.propTypes = {
    submitData: PropTypes.func.isRequired
}

export default FormSubmit;