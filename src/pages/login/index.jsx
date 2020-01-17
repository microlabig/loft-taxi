import React, { Component } from 'react';

export default class Login extends Component {
    submitData = e => {
        e.preventDefault();
        this.props.setPage('map');
    }

    render() {
        return (
            <>
                <h1>LOGIN</h1>
                <form name="formLogin">
                    <div>
                        <label>
                            <input type="text" name="name"/>
                        </label>
                        <label>
                            <input type="password" name="password"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <button type="submit" name="submit" onClick={this.submitData}>Отправить</button>
                        </label>
                    </div>
                </form>
            </>
        );
    }
}
