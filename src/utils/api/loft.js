import axios from 'axios';
import { SERVER_URL } from '../consts';

const axiosInstance = axios.create(
    {
        baseURL: SERVER_URL
    }
);

const requestData = async (restUrl, sendData) => { 
    const { data } = await axiosInstance.post(restUrl, sendData);
    return data;
}

// USER

export const userLogin = async (sendData) => {
    return requestData('/auth', sendData);
};

export const userRegister = (sendData) => {
    return requestData('/register', sendData);
};

// CARD

export const cardRequest = (sendData) => {
    return requestData('/card', sendData);
};

export const cardGetInfo = async (token) => {
    const { data } = await axiosInstance.get(`/card?token=${token}`);
    return data;
};

// ROUTES

export const routeRequest = async (payload) => {
    const { data } = await axiosInstance.get(`/route?address1=${payload.address1}&address2=${payload.address2}`);
    return data;
};

// ADDRESSES

export const addressListRequest = async () => {
    const { data } = await axiosInstance.get('/addressList');
    return data;
};