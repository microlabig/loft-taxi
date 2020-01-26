import React from "react";

import './styles.scss';

const LogoCompany = ({type}) => {
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

export default LogoCompany;
