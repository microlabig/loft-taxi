import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

const Logo = ({ type }) => {
  return (
    <div className="logo">
        <div className="logo__image"></div>
        <h1 className="logo__description">
            <span className="logo__company">Loft </span>
            <span className={`logo__type ${type}`}>Taxi</span>
        </h1>
    </div>
  );
};

Logo.defaultProps = {
  type: ''
}

Logo.propTypes = {
  type: PropTypes.string
}

export default Logo;
