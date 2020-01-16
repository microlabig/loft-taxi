import React, { Component } from 'react';

export default class extends Component {
    submitData = () => {
        this.props.setPage('map');
    }

    render() {
        return (
            <>
                <h1>LOGIN</h1>
                <form name="formLogin">
                    <label>
                        <input type="text" name="name"/>
                    </label>
                    <label>
                        <input type="password" name="password"/>
                    </label>
                    <label>
                        <button type="submit" name="submit" onClick={this.submitData}>Отправить</button>
                    </label>
                </form>
            </>
        );
    }
}
