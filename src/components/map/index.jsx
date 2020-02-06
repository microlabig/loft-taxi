import React, { useState } from 'react';

import Header from '../../shared/header';

import Map from './mapbox';
import FormRoute from './formRoute';

const MapPage = () => {
    const [showForm, setShowForm] = useState(true);

    const submitData = () => {
        setShowForm(showForm => !showForm); 
    }

    return (
        <>
            <Header />
            <Map />
            <FormRoute submitData={submitData} showForm={showForm}/>
        </>
    );
}

export default MapPage;