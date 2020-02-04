import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCardRequest,
  fetchCardGetInfo,
  getCardInfoIsUpdate,
  getToken
} from "../../store/user";

import Header from "../../components/header";
import FormPayment from "../../components/forms/payment";

const ProfilePage = () => {
  const [showForm, setShowForm] = useState(true);
  const dispatch = useDispatch();
  const stateInfo = useSelector(state => ({
    cardInfoIsUpdate: getCardInfoIsUpdate(state),
    token: getToken(state)
  }));

  useEffect(() => {
    setShowForm(showForm => false);
    dispatch(fetchCardGetInfo());
  }, [stateInfo.cardInfoIsUpdate, showForm, dispatch]);

  useEffect(() => {
    setShowForm(showForm => true);
  }, []);

  const changeShowForm = (e, { cardNumber, expiryDate, cardName, cvc }) => {
    e.preventDefault();

    dispatch(
      fetchCardRequest({
        //cardNumber: "0014 0030 0020 0040", expiryDate: "01/31", cardName: "TEST NAME", cvc: "123", token: "recYP3UHH89o6XAIx"
        cardNumber,
        expiryDate,
        cardName,
        cvc,
        token: stateInfo.token
      })
    );
  };

  return (
    <>
      <Header />
      <FormPayment changeShowForm={changeShowForm} showForm={showForm} />
    </>
  );
};

export default ProfilePage;
