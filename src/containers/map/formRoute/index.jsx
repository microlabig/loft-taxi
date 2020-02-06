import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { Place, MyLocation } from "@material-ui/icons";
import {
  fetchRouteRequest,
  fetchAddressListRequest
} from "../../../store/address";
import DottedLine from "./dottedline";
import AddressSelect from "./address-select";
import FormRouteDone from "./formSuccess";
import { getIsLoadingAddresses, getIsLoadingRoutes } from "../../../store/address";
import Preloader from "../../../shared/preloader";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMapMarkerAlt, faDotCircle } from '@fortawesome/free-solid-svg-icons'

import "./styles.scss";

const FormRoute = ({ submitData, showForm }) => {
  const [from, setFrom] = useState("0");
  const [to, setTo] = useState("0");
  const dispatch = useDispatch();
  const isLoadingAddresses = useSelector(state => getIsLoadingAddresses(state));
  const isLoadingRoutes = useSelector(state => getIsLoadingRoutes(state));

  useEffect(() => {
    dispatch(fetchAddressListRequest());
    dispatch(
      fetchRouteRequest({
        address1: "Шаверма на Невском",
        address2: "Пулково (LED)"
      })
    );
  }, [dispatch]);

  const handleFromChange = event => {
    setFrom(event.target.value);
  };

  const handleToChange = event => {
    setTo(event.target.value);
  };

  const formTemplate = (
    <>
      <div className="form__wrapper">
        <div className="form__elements">
          <MyLocation style={{ fontSize: 23 }} color="primary" />
          <DottedLine num={4} />
          <Place style={{ fontSize: 23 }} />
        </div>
        <div className="form__elements">
          <label className="form__row">
            <AddressSelect
              name="from"
              value={from}
              label="Откуда"
              helperText="Выберите точку А"
              onChange={handleFromChange}
            />
          </label>
          <label className="form__row">
            <AddressSelect
              name="to"
              value={to}
              label="Куда"
              helperText="Выберите точку В"
              onChange={handleToChange}
            />
          </label>
        </div>
      </div>
      <div className="form__elements">
        <label className="form__row button-submit">
          {isLoadingAddresses && isLoadingRoutes ? (
            <div className="isLoading formRoute">
              <Preloader isLoading={true} />
            </div>
          ) : (
            <Button
              name="call"
              onClick={submitData}
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

  return (
    <div className="routeform">
      <form className="form" name="formRoute">
        {showForm ? formTemplate : <FormRouteDone submitData={submitData} />}
      </form>
    </div>
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
