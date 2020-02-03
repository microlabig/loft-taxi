import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardRequest, fetchCardGetInfo } from "../../store/user";

import Header from "../../components/header";
import FormPayment from "../../components/forms/payment";

const ProfilePage = () => {
  const [showForm, setShowForm] = useState(true);
  const dispatch = useDispatch();
  const cardIsUpdate = useSelector(state => state.user.card.isUpdate);
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    setShowForm(showForm => false);
    dispatch(fetchCardGetInfo());
  }, [cardIsUpdate, showForm, dispatch]);

  useEffect(() => {
    setShowForm(showForm => true);
  },[])

  const changeShowForm = (e, {cardNumber, expiryDate, cardName, cvc}) => {
      e.preventDefault();
      console.log(cardNumber, expiryDate, cardName, cvc, token);
      
    /* dispatch(
      fetchCardRequest({
        //cardNumber: "0014 0030 0020 0040", expiryDate: "01/31", cardName: "TEST NAME", cvc: "123", token: "recYP3UHH89o6XAIx"
        cardNumber, expiryDate, cardName, cvc, token: token
      })
    ); */
  };

  return (
    <>
      <Header />
      <FormPayment changeShowForm={changeShowForm} showForm={showForm} />
    </>
  );
};

export default ProfilePage;
