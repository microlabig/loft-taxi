import React from 'react';

const MenuButton = ({ page, onClick }) => {
    return (
        <button 
            type="button"
            name={page} 
            onClick={e => onClick(e)}
        >
            {page}
        </button>
    );
}

export default MenuButton;
