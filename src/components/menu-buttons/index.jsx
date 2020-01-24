import React from 'react';
import PropTypes from 'prop-types';

const MenuButton = ({ caption, onClick }) => {
    return (
        <button 
            type="button"
            name={caption} 
            onClick={e => onClick(e)}
        >
            {caption}
        </button>
    );
}

// значения props по-умолчанию (заглушки)
MenuButton.defaultProps = {
    onClick: () => {},
    caption: ""
}

// проверка на принимаемый тип данных из props
MenuButton.propTypes = {
    onClick: PropTypes.func,
    caption: PropTypes.string
}

export default MenuButton;
