import React from "react";
import { TextField, Button } from "@material-ui/core";
import './styles.scss';

const FormLogin = ({ submitData }) => {
    return (
        <form className="form" name="formLogin">
            <div className="form__elements">
                <label className="form__row">
                    <TextField 
                        required 
                        name="name" 
                        label="Имя пользователя" 
                        defaultValue="User123"
                        fullWidth={true} 
                        autoFocus
                    />
                </label>
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
                        Войти
                    </Button>
                </label>
            </div>
        </form>
    );
}

export default FormLogin;