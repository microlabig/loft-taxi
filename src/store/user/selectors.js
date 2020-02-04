import { createSelector } from 'reselect';

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
