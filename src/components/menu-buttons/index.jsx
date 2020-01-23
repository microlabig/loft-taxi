import React from 'react';
import PropTypes from 'prop-types';

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

// значения props по-умолчанию (заглушки)
MenuButton.defaultProps = {
    onClick: () => {},
    page: ""
}

// проверка на принимаемый тип данных из props
MenuButton.propTypes = {
    onClick: PropTypes.func,
    page: PropTypes.string
}

export default MenuButton;
