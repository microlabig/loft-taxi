import { createSelector } from 'reselect';

// Статус загрузки
export const getIsLoading = createSelector(
    state => state.userReducer.isLoading,
    isLoading => isLoading
);

// Статус авторизации
export const getAuthed = createSelector(
    state => state.userReducer.authed,
    authed => authed
);

// Токен
export const getToken = createSelector(
    state => state.userReducer.token,
    token => token
);
