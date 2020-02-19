import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../Login/store";
import {
  fetchCardRequest,
  getCardInfoIsUpdate
} from "./store";
import Header from "../../shared/Header";
import FormPayment from "./PaymentForm";

const ProfilePage = () => {
  const [showForm, setShowForm] = useState(true);
  const dispatch = useDispatch();
  const cardInfoIsUpdate = useSelector(state => getCardInfoIsUpdate(state));
  const token = useSelector(state => getToken(state));

  useEffect(() => {
    setShowForm(showForm => false);
    // dispatch(fetchCardGetInfo(token));    
  }, [ cardInfoIsUpdate, token, showForm, dispatch ]); // es-lint ругается если оставить только [cardInfoIsUpdate] (React Hook useEffect has missing dependencies: 'dispatch' and 'token'. Either include them or remove the dependency array - eslint(react-hooks/exhaustive-deps))

  useEffect(() => {
    setShowForm(showForm => true);
  }, []);

  const changeShowForm = ({ cardNumber, expiryDate, cardName, cvc }) => {
    dispatch(
      fetchCardRequest({
        cardNumber,
        expiryDate,
        cardName,
        cvc,
        token: token
      })
    );
  };

  return (
    <>
      <Header numCurrentPage={1}/>
      <FormPayment changeShowForm={changeShowForm} showForm={showForm} />
    </>
  );
};

export default ProfilePage;
