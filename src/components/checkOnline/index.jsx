import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// компонент перехода между картой и логином пользователя 
// относительно изменения isLoggedIn контекста авторизации
function CheckOnline({ isLoggedIn, setPage, children }) {
  useEffect(() => {
    isLoggedIn ? setPage('map') : setPage('login');
  }, [isLoggedIn, setPage]);

  return (
    <>
      {children}
    </>
  );
}

CheckOnline.defaultProps = {
  isLoggedIn: false, 
  setPage: () => { }, 
  children: null
}

CheckOnline.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired, 
  setPage: PropTypes.func.isRequired, 
  children: PropTypes.node
}

export default CheckOnline;