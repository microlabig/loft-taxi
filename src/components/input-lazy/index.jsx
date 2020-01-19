/*
    Компонент "ленивый" инпут с реализацией браузерного onchange (без стейта)
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Profile extends Component {
    // значения по умолчанию
    static defaultProps = {
        onChange: function(e) {}, // заглушка (т.е. если в props не передаем - то undefined)
        nativeProps: {} // заглушка
    }

    // проверка на принимаемый тип данных из props
    static propTypes = {
        value: PropTypes.any.isRequired,
        onChange: PropTypes.func,
        nativeProps: PropTypes.object
    }

    nativeInput = React.createRef(); // для доступа к компоненту input

    // обновление компонента только по изменению значений из props
    componentDidUpdate(prevProps, prevState) {
        let currentInput = this.nativeInput.current;
        
        if (prevProps.value !== this.props.value ||   // если предыдущее значение не равно передаваемому значению из пропса
            this.props.value.toString() !== currentInput.value) { // и если текущее значение в инпуте не равно значению из пропса (для оптимизации, т.к. не используем стейт)
            currentInput.value = this.props.value; // взять значение input из props
        }
    }

    onChange = (e) => {
        if (this.props.value.toString() !== e.target.value) {
            this.props.onChange(e); // вызвать onChange, переданный по ссылке из props
        }
    }

    keyEnterPress = (e) => {
        if (e.keyCode === 13) { // нажата клавиша <ENTER>
            this.onChange(e);
        }
    }

    render() {
        // defaultValue - значение по-умолчанию, срабатывает один раз
        return (
            <input 
                {...this.props.nativeProps}
                defaultValue={this.props.value}
                onBlur={this.onChange}
                onKeyDown={this.keyEnterPress}
                ref={this.nativeInput}
            />
        )
    }
}