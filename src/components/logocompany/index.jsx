import React from "react";
import PropTypes from 'prop-types';

import './styles.scss';

const LogoCompany = ({ type }) => {
  return (
    <div className="logo">
        <div className="logo__image"></div>
        <h2 className="logo__description">
            <span className="logo__company">Loft </span>
            <span className={`logo__type ${type}`}>Taxi</span>
        </h2>
    </div>
  );
};

LogoCompany.defaultProps = {
  type: ''
}

LogoCompany.propTypes = {
  type: PropTypes.string
}

export default LogoCompany;
