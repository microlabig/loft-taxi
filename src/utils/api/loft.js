import { SERVER_URL } from '../consts';

const getStatusResponse = (response) => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Ошибка сети');
    }
}

const requestData = (restUrl, data) => {
    return fetch(
        SERVER_URL + restUrl,
        {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(response => getStatusResponse(response));
}

// USER

export const userLogin = (data) => {
    return requestData('/auth', data);
};

export const userRegister = (data) => {
    return requestData('/register', data);
};

// CARD

export const cardRequest = (data) => {
    return requestData('/card', data);
};

export const cardGetInfo = (token) => {
    return fetch(
        SERVER_URL + `/card?token=${token}`,
        {
            method: 'GET'
        }).then(response => getStatusResponse(response));
};

// ROUTES

export const routeRequest = (payload) => {
    return fetch(
        SERVER_URL + `/route?address1=${payload.address1}&address2=${payload.address2}`,
        {
            method: 'GET'
        })
        .then(response => getStatusResponse(response));
};

// ADDRESSES

export const addressListRequest = () => {
    return fetch(
        SERVER_URL + '/addressList', 
        { 
            method: 'GET' 
        })
        .then(response => getStatusResponse(response));
};