import React from 'react';
import Map from '../../components/map';
import FormRoute from '../../components/forms/route';

const MapPage = (isLoggedIn) => {
    const mapTemplate = (
        <>
            <Map />
            <FormRoute />
        </>
    );

    return (
        <>
            { isLoggedIn && mapTemplate }
        </>
    );
}

export default MapPage;