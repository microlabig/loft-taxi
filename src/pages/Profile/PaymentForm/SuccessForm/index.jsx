import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./styles.scss";

const SuccessForm = () => {
  const history = useHistory();

  const handlerClick = () => {
    history.push('/map');
  };

  return (
    <>
      <p className="form__textdone">
        Платёжные данные обновлены. Теперь вы можете заказывать такси.
      </p>
      <div className="form__elements">
        <label className="form__row">
          <Button
            name="call"
            onClick={handlerClick}
            variant="contained"
            color="primary"
            className="form__button"
          >
            Перейти на карту
          </Button>
        </label>
      </div>
    </>
  );
};

SuccessForm.defaultProps = {
  changeShowForm: () => false
};

SuccessForm.propTypes = {
  changeShowForm: PropTypes.func.isRequired
};

export default SuccessForm;
