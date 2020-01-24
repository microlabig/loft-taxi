import React, { useEffect } from 'react';
import { AppProvider } from '../../contexts/login-context';

function CheckOnline(props) {
  const { children } = props;

  useEffect(() => {
    if (props.isLoggedIn) {
        props.setPage('map');
    } else {
        props.setPage('login');
    }
  }, [props.isLoggedIn]);

  return (
    <>
      {children}
    </>
  );
}

export default CheckOnline;