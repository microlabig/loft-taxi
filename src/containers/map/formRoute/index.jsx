import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Button } from "@material-ui/core";
import { Place, MyLocation } from "@material-ui/icons";
import Preloader from "../../../shared/preloader";
import DottedLine from "./dottedline";
import AddressSelect from "./address-select";
import FormOrderSuccess from "./formOrderSuccess";
import FormWarning from "./formWarning";
import {
  getIsLoadingAddresses,
  getIsLoadingRoutes,
  getAdressList,
  fetchRouteLoading,
  fetchRouteRequest,
  fetchRouteFailure,
  fetchAddressListRequest
} from "../../../store/address";
import { getToken } from "../../../store/user";
import { fetchCardGetInfo, getCardInfo } from "../../../store/card";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMapMarkerAlt, faDotCircle } from '@fortawesome/free-solid-svg-icons'

import "./styles.scss";

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

  useEffect(() => {
    if (!isCardExist) {
      dispatch(fetchCardGetInfo(token));
    }
  }, [isCardExist, dispatch, token]);

  useEffect(() => {
    if (cardInfo.cardNumber.length > 0) {
      setIsCardExist(true);
      dispatch(fetchAddressListRequest());
    }
  }, [dispatch, cardInfo]);

  useEffect(() => {
    if (isSelectRoute.from && isSelectRoute.to) {
      if (from === to) {
        dispatch(
          fetchRouteFailure("Начальная и конечная точки должны отличаться!")
        );
        setIsSelectRoute({ ...isSelectRoute, from: false, to: false });
        setFrom("");
        setTo("");
      } else {
        dispatch(fetchRouteLoading());
        dispatch(
          fetchRouteRequest({
            address1: from,
            address2: to
          })
        );
      }
    }
  }, [isSelectRoute, addressList, from, to, dispatch]);

  const handleFromChange = (event, value, reason) => {
    if (reason === 'clear') {
      setFrom('');
    } else
    if (value.length > 0) {
        setFrom(value);
        setIsSelectRoute({ ...isSelectRoute, from: true });
    }
  };

  const handleToChange = (event, value, reason) => {
    if (reason === 'clear') {
      setTo('');
    } else
    if (value.length > 0) {
      setTo(value);
      setIsSelectRoute({ ...isSelectRoute, to: true });
    }
  };

  const onClick = event => {
    submitData(event);
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
                  onClick={onClick}
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
      return <FormOrderSuccess submitData={submitData} />;
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
