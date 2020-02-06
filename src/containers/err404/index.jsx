import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./styles.scss";

const Err404 = () => {
  const history = useHistory();

  return (
    <div className="error404">
      <div className="error404__container">
        <h1 className="error404__title">Error 404</h1>
        <div className="error404__description">
          Такой страницы не существует!
        </div>
        <Button
          name="submit"
          onClick={() => history.push('/')}
          variant="contained"
          color="primary"
          data-testid="button-submit"
          className="form__button-submit"
        >
          Перейти на главную
        </Button>
      </div>
    </div>
  );
};

export default Err404;
