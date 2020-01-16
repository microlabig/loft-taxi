import React, { Component } from 'react';

export default class extends Component {
    state = {
        PAGES_LIST: [
            {
                id: 0, // для атрибута key
                caption: 'profile' // для названия кнопки
            },
            {
                id: 1,
                caption: 'map'
            },
            {
                id: 2,
                caption: 'login'
            },
            {
                id: 3,
                caption: 'submit'
            }
        ]
    }

    handleClick = (e) => this.props.checkPage(e.target.name);

    getButtons = () => {
        return this.state.PAGES_LIST.map( page => {
            if (page.hasOwnProperty('caption') && page.caption.length > 0) { // если существует поле caption и оно не пустое
              return (
                    <button 
                        name={page.caption} 
                        type="button" 
                        onClick={(e) => this.handleClick(e)}
                        key={page.id}
                    >
                        {page.caption[0].toUpperCase() + page.caption.slice(1)}
                    </button>
                );  
            }
            return null;
        });
    }
    
    render() {
        return (
            <>
                <header>
                    {this.getButtons()}
                </header>
            </>
        );
    }
}
