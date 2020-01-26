import React, {useState} from 'react';
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

export default MapPage;