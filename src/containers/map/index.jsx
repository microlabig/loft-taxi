import React, { useState } from 'react';
import Map from './mapbox';
import FormRoute from './formRoute';
import Header from '../../shared/header';

const MapPage = () => {
    const [showForm, setShowForm] = useState(true);

    const submitData = () => {
        setShowForm(showForm => !showForm); 
    }

    return (
        <>
            <Header />
            <Map />
            <FormRoute submitData={submitData} showForm={showForm} />
        </>
    );
}

export default MapPage;