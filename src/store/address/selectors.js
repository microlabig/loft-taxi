import { createSelector } from 'reselect';

// Статус загрузки Addresses
export const getIsLoadingAddresses = createSelector(
    state => state.addressReducer.isLoadingAddresses,
    isLoadingAddresses => isLoadingAddresses
);

// Статус загрузки Routes
export const getIsLoadingRoutes = createSelector(
    state => state.addressReducer.isLoadingRoutes,
    isLoadingRoutes => isLoadingRoutes
);

// Список роутов
export const getRoutes = createSelector(
    state => state.addressReducer.routesList,
    routesList => routesList
);

// Список адресов
export const getAdressList = createSelector(
    state => state.addressReducer.addressList,
    addressList => addressList.length > 0 ? addressList.map( (item, index) => ({ value: index, label: item })) : [ {value: '0', label: ''} ]
);
