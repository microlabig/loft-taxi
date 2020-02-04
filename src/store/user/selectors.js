import { createSelector } from 'reselect';

// Статус авторизации
export const getAuthed = createSelector(
    state => state.user.authed,
    authed => authed
);

// Информация о карте
export const getCardInfo = createSelector(
    state => state.user.card,
    card => ({
        cardNumber: card.cardNumber ? card.cardNumber : '',
        expiryDate: card.expiryDate ? card.expiryDate : '',
        cardName: card.cardName ? card.cardName.toUpperCase() : '',
        cvc: card.cvc ? card.cvc : ''
    })
);

// Статус обновления информации о платежной карте
export const getCardInfoIsUpdate = createSelector(
    state => state.user.card.isUpdate,
    isUpdate => isUpdate
);

// Токен
export const getToken = createSelector(
    state => state.user.token,
    token => token
);
