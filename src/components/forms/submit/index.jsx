import React from "react";
import { TextField, Button } from "@material-ui/core";
import './styles.scss';

const FormSubmit = ({ submitData }) => {
    return (
        <form className="form" name="formSubmit">
            <div className="form__elements">
                <label className="form__row">
                    <TextField 
                        required 
                        name="email" 
                        label="Адрес электронной почты" 
                        defaultValue="mail@mail.ru"
                        type="email"
                        fullWidth={true} 
                        autoFocus
                    />
                </label>
            </div>
            <div className="form__elements names">
                <label className="form__row">
                    <TextField 
                        required
                        name="name" 
                        label="Имя"  
                    />
                </label>
                <label className="form__row">
                    <TextField 
                        required
                        name="lastName" 
                        label="Фамилия" 
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
                    />
                </label>
            </div>
            <div className="form__elements">
                <label className="form__row button-submit">
                    <Button 
                        name="submit" 
                        onClick={submitData}
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

export default FormSubmit;