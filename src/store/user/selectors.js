import { createSelector } from 'reselect';

// Статус авторизации
export const getAuthed = createSelector(
    state => state.user.authed,
    authed => authed
);

// Токен
export const getToken = createSelector(
    state => state.user.token,
    token => token
);
