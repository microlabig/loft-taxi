import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../store/user";
import {
  fetchCardRequest,
  fetchCardGetInfo,
  getCardInfoIsUpdate
} from "../../store/card";

import Header from "../../shared/header";
import FormPayment from "./formPayment";

const ProfilePage = () => {
  const [showForm, setShowForm] = useState(true);
  const dispatch = useDispatch();
  const cardInfoIsUpdate = useSelector(state => getCardInfoIsUpdate(state));
  const token = useSelector(state => getToken(state));

  useEffect(() => {
    setShowForm(showForm => false);
    dispatch(fetchCardGetInfo());    
  }, [cardInfoIsUpdate, showForm, dispatch]);

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
        token: token
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
