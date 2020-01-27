import React, {useState} from 'react';

import FormPayment from '../../components/forms/payment';

const ProfilePage = () => {
    const [showForm, setShowForm] = useState(true);

    const changeShowForm = () => {
        setShowForm(showForm => !showForm); 
    } 
   
    return (
        <>
            <FormPayment changeShowForm={changeShowForm} showForm={showForm} />
        </>
    );
}

export default ProfilePage;
