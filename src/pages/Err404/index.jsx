import React from 'react';
import './styles.scss';

const Err404 = () => {
    return (
        <div className="error404">
            <div className="error404__container">
                <h1 className="error404__title">Error 404</h1>
                <div className="error404__description">Такой страницы не существует!</div>
            </div>
        </div>
    )
}

export default Err404;