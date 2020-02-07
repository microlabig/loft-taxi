import React from "react";
import PropTypes from 'prop-types';
import { CircularProgress, Fade } from "@material-ui/core";
import './styles.scss';

const Preloader = ({ isLoading, error }) => {
  return (
    <div className="preloader">
      <div className="preloader__container">
        <Fade
          in={isLoading}
          style={{
            transitionDelay: isLoading ? "800ms" : "0ms"
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      </div>
    </div>
  );
};

Preloader.defaultProp = {
  isLoading: false,
  error: ''
}

Preloader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string
}

export default Preloader;