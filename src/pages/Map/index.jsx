import React, { useState } from 'react';
import Map from './Mapbox';
import FormRoute from './RouteForm';
import Header from '../../shared/Header';

const MapPage = () => {
    const [showForm, setShowForm] = useState(true);

    return (
        <>
            <Header numCurrentPage={0}/>
            <Map />
            <FormRoute submitData={() => setShowForm(showForm => !showForm)} showForm={showForm} />
        </>
    );
}

export default MapPage;