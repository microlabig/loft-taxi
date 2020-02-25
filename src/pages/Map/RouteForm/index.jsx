import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Button } from "@material-ui/core";
import { Place, MyLocation } from "@material-ui/icons";
import Preloader from "../../../shared/Preloader";
import DottedLine from "./DottedLine";
import AddressSelect from "./AddressSelect";
import FormOrderSuccess from "./OrderSuccessForm";
import FormWarning from "./WarningForm";
import {
  getIsLoadingAddresses,
  getIsLoadingRoutes,
  getAdressList,
  fetchRouteRequest,
  fetchAddressListRequest
} from "../store";
import { getToken } from "../../Login/store";
import { fetchCardGetInfo, getCardInfo } from "../../Profile/store";

import "./styles.scss";

// ---------
// компонент
// ---------
const FormRoute = ({ submitData, showForm }) => {
  const [isCardExist, setIsCardExist] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [isSelectRoute, setIsSelectRoute] = useState({
    from: false,
    to: false
  });
  const dispatch = useDispatch();
  const addressList = useSelector(state => getAdressList(state));
  const token = useSelector(state => getToken(state));
  const cardInfo = useSelector(state => getCardInfo(state));
  const isLoadingAddresses = useSelector(state => getIsLoadingAddresses(state));
  const isLoadingRoutes = useSelector(state => getIsLoadingRoutes(state));
  const [isCalled, setIsCalled] = useState(false);

  // если данные карты существуют - запросить карту
  useEffect(() => {
    if (!isCardExist) {
      dispatch(fetchCardGetInfo(token));
    }
  }, [isCardExist, dispatch, token]);

  // если информация о карте есть - запросить список адресов
  useEffect(() => {
    if (cardInfo.cardNumber.length > 0) {
      setIsCardExist(true);
      dispatch(fetchAddressListRequest());
    }
  }, [dispatch, cardInfo]);

  // для показа формы об успешном вызове такси
  useEffect(() => {
    if (isCalled && !isLoadingRoutes) {
      submitData();
      setIsCalled(false);
    }
  }, [isCalled, isLoadingRoutes, submitData]);

  // обработчик изменения значения поля "Откуда"
  const handleFromChange = (event, value, reason) => {
    if (reason === "clear") {
      setFrom("");
    } else if (value.length > 0) {
      setFrom(value);
      setIsSelectRoute({ ...isSelectRoute, from: true });
    }
  };

  // обработчик изменения значения поля "Куда"
  const handleToChange = (event, value, reason) => {
    if (reason === "clear") {
      setTo("");
    } else if (value.length > 0) {
      setTo(value);
      setIsSelectRoute({ ...isSelectRoute, to: true });
    }
  };

  // обработчик клика по кнопке "Вызвать такси"
  const callTaxi = () => {
    dispatch(
      fetchRouteRequest({
        address1: from,
        address2: to
      })
    );
    setIsCalled(true);
    setIsSelectRoute({ ...isSelectRoute, from: false, to: false });
    setFrom("");
    setTo("");
  };

  const formTemplate = () => {
    if (showForm) {
      return (
        <>
          <div className="form__adresses">
            <div className="form__elements">
              <MyLocation style={{ fontSize: 23 }} color="primary" />
              <DottedLine num={4} />
              <Place style={{ fontSize: 23 }} />
            </div>
            <div className="form__elements">
              <label className="form__row">
                <AddressSelect
                  label="Откуда"
                  list={addressList.filter(el => el.label !== to)}
                  onChange={handleFromChange}
                />
              </label>
              <label className="form__row">
                <AddressSelect
                  label="Куда"
                  list={addressList.filter(el => el.label !== from)}
                  onChange={handleToChange}
                />
              </label>
            </div>
          </div>
          <div className="form__elements">
            <label className="form__row button-submit">
              {isLoadingAddresses || isLoadingRoutes ? (
                <div className="isLoading formRoute">
                  <Preloader isLoading={true} />
                </div>
              ) : (
                <Button
                  disabled={!(isSelectRoute.from && isSelectRoute.to)}
                  name="call"
                  onClick={() => callTaxi()}
                  variant="contained"
                  color="primary"
                  fullWidth={true}
                >
                  Вызвать такси
                </Button>
              )}
            </label>
          </div>
        </>
      );
    } else {
      return <FormOrderSuccess submitData={() => submitData()} />;
    }
  };

  return (
    <Paper elevation={3} className="routeform">
      <form className="form" name="formRoute">
        {isCardExist ? formTemplate() : <FormWarning />}
      </form>
    </Paper>
  );
};

FormRoute.defaultProps = {
  submitData: () => {},
  showForm: false
};

FormRoute.propTypes = {
  submitData: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired
};

export default FormRoute;
