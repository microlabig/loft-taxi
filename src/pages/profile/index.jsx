import React, {useState} from 'react';

import Header from '../../components/header';
import FormPayment from '../../components/forms/payment';

const ProfilePage = () => {
    const [showForm, setShowForm] = useState(true);

    const changeShowForm = () => {
        setShowForm(showForm => !showForm); 
    } 
   
    return (
        <>
            <Header />
            <FormPayment changeShowForm={changeShowForm} showForm={showForm} />
        </>
    );
}

export default ProfilePage;
