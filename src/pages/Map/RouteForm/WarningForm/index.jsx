import React from "react";
import { useSelector } from "react-redux";
import { getIsLoading } from "../../../Profile/store";
import Preloader from "../../../../shared/Preloader";

const FormWarning = () => {
  const isLoading = useSelector(state => getIsLoading(state));

  return (
    <>
      {isLoading ? (
        <div className="isLoading formRoute warning">
          <Preloader isLoading={isLoading} />
        </div>
      ) : (
        <>
          <h2 className="form__title">Внимание</h2>
          <p className="form__description">
            Для работы с сервисом введите данные платежной карты в разделе "Профиль"
          </p>
        </>
      )}
    </>
  );
};

export default FormWarning;
