import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const DottedLine = ({num}) => {
    const renderDots = (num) => {
        const lines = [];
        let isVisible = true;

        for (let i = 0; i < num * 2; i++) {
            isVisible = !isVisible;

            let lineTemplate = (
                <li className={isVisible ? 'lines__item' : 'lines__item novisible'} key={i}>
                    <div className="line__pattern"></div>
                </li>
            );
                
            lines.push(lineTemplate);
        }

        return (
            <>
                <div className="lines">
                    <ul className="lines__list">
                        {lines}
                    </ul>
                </div>
            </>
        )
    }

    return renderDots(num);
}

DottedLine.defaultProps = {
    num: 0
}

DottedLine.propTypes = {
    num: PropTypes.number.isRequired
}

export default DottedLine;