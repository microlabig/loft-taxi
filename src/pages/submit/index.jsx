import React, { Component } from 'react';

export default class extends Component {
    submitData = (e) => {
        e.preventDefault();
        this.props.setPage('map');
    }

    render() {
        return (
            <>
                <h1>SUBMIT</h1>
                <form name="formRegister">
                    <div>
                        <label>
                            <div>Адрес электронной почты</div>
                            <input type="email" name="email"/>
                        </label>
                        <label>
                            <div>Имя</div>
                            <input type="text" name="name"/>
                        </label>
                        <label>
                            <div>Фамилия</div>
                            <input type="text" name="lasName"/>
                        </label>
                        <label>
                            <div>Пароль</div>
                            <input type="password" name="password"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <button type="submit" name="submit" onClick={this.submitData}>Зарегистрироваться</button>
                        </label>
                    </div>
                </form>
            </>
        );
    }
}
