import React, { Component } from 'react';
import MenuButton from './../menu-buttons';

export default class Header extends Component {

    handleClick = (e) => this.props.checkPage(e.target.name);

    getButtons = () => {
        return this.props.pagesList.map( (page, index) => {
            return <MenuButton 
                onClick={(e) => this.handleClick(e)} 
                page={page} 
                key={index}
            /> 
        });
    }
    
    render() {
        return (
            <header>
                {this.getButtons()}
            </header>
        );
    }
}
