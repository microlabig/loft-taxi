import React, { useEffect } from 'react';

// компонент перехода между картой и логином пользователя 
// относительно изменения isLoggedIn контекста авторизации
function CheckOnline(props) {
  const { isLoggedIn, setPage, children } = props;

  useEffect(() => {
    isLoggedIn ? setPage('map') : setPage('login');
  }, [isLoggedIn, setPage]);

  return (
    <>
      {children}
    </>
  );
}

export default CheckOnline;