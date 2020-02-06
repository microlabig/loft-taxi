import React from "react";
import PropTypes from 'prop-types';
import { Button } from "@material-ui/core";

const FormRouteDone = ({ submitData }) => {
    return (
        <>
            <h2 className="form__title">Заказ размещен</h2>
            <p className="form__description">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>
            <div className="form__elements">
                <label className="form__row button-submit">
                    <Button 
                        name="call" 
                        onClick={submitData}
                        variant="contained" 
                        color="primary"
                        fullWidth={true}
                    >
                        Сделать новый заказ
                    </Button>
                </label>
            </div>
        </>
    );
}

FormRouteDone.defaultProps = {
    submitData: () => { }
}

FormRouteDone.propTypes = {
    submitData: PropTypes.func.isRequired
}

export default FormRouteDone;