import React from 'react';

export default function(props) {
    return (
        <button 
            type="button"
            name={props.page} 
            onClick={(e) => props.onClick(e)}
        >
            {props.page[0].toUpperCase() + props.page.slice(1)}
        </button>
    );
}
