import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar, Slide } from "@material-ui/core";
import { getUserErrorMessage, fetchUserClearError } from "../../pages/Login/store";
import { getCardErrorMessage, fetchCardClearError } from "../../pages/Profile/store";
import { getAddressErrorMessage, fetchAddressClearError } from "../../pages/Map/store";
import { DELAY_TOOLTIP } from '../../utils/consts';

const SlideTransition = (props) => {
  return <Slide {...props} direction="up" />;
}

const ErrorTooltip = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const userError = useSelector(state => getUserErrorMessage(state));
  const cardError = useSelector(state => getCardErrorMessage(state));
  const addressError = useSelector(state => getAddressErrorMessage(state));

  useEffect(() => {
    if (userError) {
      setMessage(userError);
    }
    if (cardError) {
      setMessage(cardError);
    }
    if (addressError) {
      setMessage(addressError);
    }
  }, [userError, cardError, addressError]);

  const closeTooltip = useCallback(() => {
    setOpen(false);
    setMessage(null);
    dispatch(fetchUserClearError());
    dispatch(fetchCardClearError());
    dispatch(fetchAddressClearError());
  }, [dispatch]);

  const openTooltip = useCallback(() => {
    setOpen(true);
    new Promise(resolve => {
      setTimeout(() => {
        closeTooltip();
        resolve();
      }, DELAY_TOOLTIP * 1000);
    });
  }, [closeTooltip]);

  useEffect(() => {
    if (message) {
      openTooltip();
    }
  }, [message, openTooltip]);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        severity="error"
        open={open}
        TransitionComponent={SlideTransition}
        message={message}
        onClick={closeTooltip}
      />
      {children}
    </>
  );
};

export default ErrorTooltip;
