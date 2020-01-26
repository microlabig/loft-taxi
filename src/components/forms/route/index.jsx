import React from "react";

import DottedLine from '../../dottedline';
import FormRouteDone from '../../forms/done/route';

import { TextField, Button } from "@material-ui/core";
import { Place, MyLocation } from '@material-ui/icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMapMarkerAlt, faDotCircle } from '@fortawesome/free-solid-svg-icons'

import './styles.scss';

const FormRoute = ({ submitData, showForm }) => {
    const formTemplate = (
        <>
            <div className="form__wrapper">
                <div className="form__elements">
                    <MyLocation style={{ fontSize: 23 }} color="primary"/>
                    <DottedLine num={4}/>
                    <Place style={{ fontSize: 23 }}/>
                </div>
                <div className="form__elements">
                    <label className="form__row">
                        <TextField 
                            name="from" 
                            label="Откуда" 
                            defaultValue="пр. Октябрьский 78"
                            fullWidth={true}
                            className="form__input"
                        />
                    </label>
                    <label className="form__row">
                        <TextField 
                            name="to" 
                            label="Куда" 
                            defaultValue="пр. Московский 87"
                            fullWidth={true} 
                            className="form__input"
                        />
                    </label>
                </div>
            </div>
            <div className="form__elements">
                <label className="form__row button-submit">
                    <Button 
                        name="call" 
                        onClick={submitData}
                        variant="contained" 
                        color="primary"
                        fullWidth={true}
                    >
                        Вызвать такси
                    </Button>
                </label>
            </div>
        </>
    );

    return (
        <div className="routeform">
            <form className="form" name="formRoute">
                {showForm ? formTemplate : <FormRouteDone submitData={submitData}/>}
            </form>
        </div>
    );
}

export default FormRoute;