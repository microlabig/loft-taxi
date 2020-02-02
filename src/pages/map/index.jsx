import React, { useState } from 'react';

import Header from '../../components/header';

import Map from '../../components/map';
import FormRoute from '../../components/forms/route';

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