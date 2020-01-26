import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Map from '../../components/map';
import FormRoute from '../../components/forms/route';

const MapPage = (isLoggedIn) => {
    const [showForm, setShowForm] = useState(true);

    const submitData = () => {
        setShowForm(showForm => !showForm);
    }

    const mapTemplate = (
        <>
            <Map />
            <FormRoute submitData={submitData} showForm={showForm}/>
        </>
    );

    return (
        <>
            { isLoggedIn && mapTemplate }
        </>
    );
}

MapPage.defaultProps = {
    isLoggedIn: false
}

MapPage.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

export default MapPage;