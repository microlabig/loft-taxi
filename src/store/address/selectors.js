import { createSelector } from 'reselect';

// Список адресов
export const getAdressList = createSelector(
    state => state.address.addressList,
    addressList => addressList.length > 0 ? addressList.map( (item, index) => ({ value: index, label: item })) : [ {value: '0', label: ''} ]
);
